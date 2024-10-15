import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import snowflake1 from "../assets/snowflake1.png";
import snowflake2 from "../assets/snowflake2.png";
import snowflake3 from "../assets/snowflake3.png";

/*
Full disclosure, I got the idea for the snowflake sprites from here:
https://threejs.org/examples/#webgl_points_sprites
Thank you Three JS people; and also Rene Descartes.
*/

const SnowScene = () => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const composerRef = useRef(null);

  const animationSettingsRef = useRef({
    speed: 0.002,
    color: new THREE.Color(0.2, 0.2, 1),
    size: 5,
    animationType: "Dangerous",
  });

  const themesAnimationSettingsRef = useRef({
 
    'Miramichi Grey': {
      speed: 0.002,
      color: new THREE.Color(0.2, 0.2, 1),
      size: 5,
      animationType: "Miramichi",
    },
     'Pretty Nice Day': {
      speed: 0.002,
      color: new THREE.Color(0.2, 0.2, 1),
      size: 5,
      animationType: "Dangerous",
    },
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
    scene.background = new THREE.Color(0x173d6b);
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document
      .getElementById("snow-scene-container")
      .appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const composer = new EffectComposer(renderer);
    composerRef.current = composer;

    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const outputPass = new OutputPass();
    composer.addPass(outputPass);

    const textureLoader = new THREE.TextureLoader();
    const snowflakeImages = [snowflake1, snowflake2, snowflake3];
    const snowflakeTextures = snowflakeImages.map((image) =>
      textureLoader.load(image)
    );

    const geometry = new THREE.BufferGeometry();
    const vertices = new Array(6000);

    for (let i = 0; i < 2000; i++) {
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

    const particlesArray = [];
    snowflakeTextures.forEach((sprite) => {
      const material = new THREE.PointsMaterial({
        size: animationSettingsRef.current.size,
        map: sprite,
        blending: THREE.AdditiveBlending,
        depthTest: false,
        transparent: true,
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
    }

    window.addEventListener("resize", onWindowResize);

    function animate() {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.000015;

      particlesArray.forEach((object, i) => {
        const { speed, color, size, animationType } =
          animationSettingsRef.current;
        object.material.color = color;
        object.material.size = size;

        switch (animationType) {
          case "Miramichi":
            object.rotation.x += 0.002;
            object.rotation.y += 0.002;
            break;
          case "Dangerous":
            object.rotation.x += Math.sin(time * 0.001) * speed * (i + 1) * 0.2;
            object.rotation.y += Math.cos(time * 0.001) * speed * (i + 1) * 0.2;
            object.rotation.z += Math.sin(time * 0.0005) * speed * 0.1;

        
            break;

        }
      });

      composer.render();
    }

    animate();

    const handleThemeChange = (event) => {
      const theme = event.detail;
      const secondaryColor = getComputedStyle(
        document.documentElement
      ).getPropertyValue("--secondary-color");
      scene.background = new THREE.Color(secondaryColor);

      const { speed, color, size, animationType } =
        themesAnimationSettingsRef.current[theme.name];
      animationSettingsRef.current = { speed, color, size, animationType };
    };

    window.addEventListener("themeChange", handleThemeChange);

    return () => {
      document
        .getElementById("snow-scene-container")
        .removeChild(renderer.domElement);
      window.removeEventListener("resize", onWindowResize);
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, []);

  return <div id="snow-scene-container" />;
};

export default SnowScene;
