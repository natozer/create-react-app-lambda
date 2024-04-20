import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass.js"; 

const SnowScene = () => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);
  const glitchPassRef = useRef(null);

  useEffect(() => {

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );

    camera.position.z = 1000;
    cameraRef.current = camera;

    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();

    const forestTexture = textureLoader.load("images/snow.jpg");
    scene.background = forestTexture; 

    scene.fog = new THREE.FogExp2(0x000000, 0.00006);
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("particle-system-container")
      .appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const composer = new EffectComposer(renderer);
    composerRef.current = composer;

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const glitchPass = new GlitchPass();

    glitchPassRef.current = glitchPass;
    glitchPass.goWild = false;
    glitchPass.curF = 25;
    glitchPass.randX = 5;

    composer.addPass(glitchPass);

    const filmPass = new FilmPass(
      0.5,   
      0.025,  
      648,    
      false   
    );

    composer.addPass(filmPass);

    const snowflakeImages = [
      "images/snowflake1.png",
      "images/snowflake2.png",
      "images/snowflake3.png",
    ];
    
    const snowflakeTextures = snowflakeImages.map((image) =>
      textureLoader.load(image)
    );

    const geometry = new THREE.BufferGeometry();

    const vertices = new Array(5000 * 3); 

    for (let i = 0; i < 5000; i++) {
      const baseIndex = i * 3; 
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
    
      vertices[baseIndex] = x; 
      vertices[baseIndex + 1] = y; 
      vertices[baseIndex + 2] = z; 
    }
    

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    const sizes = [7, 8, 9];
    const colors = [
      [1.0, 0.2, 0.5],
      [0.95, 0.1, 0.5],
      [0.9, 0.05, 0.5],
    ];

    snowflakeTextures.forEach((sprite, _index) => {
      sizes.forEach((size, index) => {
        const material = new THREE.PointsMaterial({
          size,
          map: sprite,
          blending: THREE.AdditiveBlending,
          depthTest: false,
          transparent: true,
          color: new THREE.Color().setHSL(...colors[index % colors.length]),
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);
      });
    });

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", onWindowResize);

    function animate() {
      requestAnimationFrame(animate);
      let time = Date.now() * 0.00002;
      scene.children.forEach((object, i) => {
        if (object instanceof THREE.Points) {
          let directionMultiplier = i % 2 === 0 ? 1 : -1;
          object.rotation.y = time * (i + 1) * directionMultiplier;
          object.rotation.z = time * directionMultiplier;
          object.position.x = Math.sin(time + i) * 20 * directionMultiplier;
          object.position.y = Math.cos(time + i) * 20;
        }
      });

      composer.render();
    }

    animate();
     
    const seconds = 8000
    // Set timeout to disable glitch after x seconds cause it gets a bit annoying and this is the only way to control it
    const glitchTimeout = setTimeout(() => {
      glitchPassRef.current.enabled = false;
    }, seconds);

    return () => {
      clearTimeout(glitchTimeout);
      document
        .getElementById("particle-system-container")
        .removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div id="particle-system-container" />;
};

export default SnowScene;
