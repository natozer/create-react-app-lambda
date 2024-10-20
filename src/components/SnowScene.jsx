import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass.js";
import snowflake1 from "../assets/snowflake1.png";
import snowflake2 from "../assets/snowflake2.png";
import snowflake3 from "../assets/snowflake3.png";
import apotheosis from "../assets/apotheosis.png";
import apotheosis_mobile from "../assets/apotheosis_mobile.png";

const SnowScene = () => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);

  const animationSettingsRef = useRef({
    speed: 0.002,
    color: new THREE.Color(1, 1, 1),
    size: 5,
  });

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
    sceneRef.current = scene;
    scene.fog = new THREE.Fog(0x000000, 500, 2000);

    const textureLoader = new THREE.TextureLoader();

    const setBackgroundTexture = () => {
      const isMobile = window.innerWidth < 768;
      const backgroundTexture = isMobile ? apotheosis_mobile : apotheosis;
      textureLoader.load(backgroundTexture, (texture) => {
        scene.background = texture;
      });
    };

    setBackgroundTexture();

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("snow-scene-container").appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const composer = new EffectComposer(renderer);
    composerRef.current = composer;

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const filmPass = new FilmPass(1, 0.025, 648, false);
    composer.addPass(filmPass);

    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    const snowflakeImages = [snowflake1, snowflake2, snowflake3];
    const snowflakeTextures = snowflakeImages.map((image) =>
      textureLoader.load(image)
    );

    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(9000);

    for (let i = 0; i < 3000; i++) {
      const baseIndex = i * 3;
      vertices[baseIndex] = Math.random() * 2000 - 1000;
      vertices[baseIndex + 1] = Math.random() * 2000 - 1000;
      vertices[baseIndex + 2] = Math.random() * 2000 - 1000;
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));

    const particlesArray = [];
    snowflakeTextures.forEach((sprite) => {
      const material = new THREE.PointsMaterial({
        size: animationSettingsRef.current.size,
        map: sprite,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
        opacity: 0.5,
        color: animationSettingsRef.current.color,
      });

      const particles = new THREE.Points(geometry, material);
      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;
      scene.add(particles);
      particlesArray.push(particles);
    });

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      setBackgroundTexture();
    }

    window.addEventListener("resize", onWindowResize);

    function animate() {
      requestAnimationFrame(animate);
      particlesArray.forEach((object) => {
        object.rotation.x += animationSettingsRef.current.speed;
        object.rotation.y += animationSettingsRef.current.speed;
      });

      composer.render();
    }


    animate();

    return () => {
      document.getElementById("snow-scene-container").removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div id="snow-scene-container" />;
};

export default SnowScene;
