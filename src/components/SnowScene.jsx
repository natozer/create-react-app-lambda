import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";

const SnowScene = () => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);

  const handleMobileLoad = (scene) => {
    scene.background = new THREE.Color(0x000000);
  };

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
    handleMobileLoad(scene);

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
    glitchPass.goWild = false;
    glitchPass.curF = 50;
    glitchPass.randX = 10;
    composer.addPass(glitchPass);

    const snowflakeImages = [
      "images/snowflake1.png",
      "images/snowflake2.png",
      "images/snowflake3.png",
    ];
    const snowflakeTextures = snowflakeImages.map((image) =>
      textureLoader.load(image)
    );

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 2500; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      vertices.push(x, y, z);
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
      handleMobileLoad(scene);
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

    return () => {
      document
        .getElementById("particle-system-container")
        .removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div id="particle-system-container" />;
};

export default SnowScene;
