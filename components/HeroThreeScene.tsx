"use client";

import { useEffect, useRef } from "react";

type SceneHandle = {
  dispose: () => void;
};

function makePanelTexture(
  THREE: typeof import("three"),
  title: string,
  detail: string,
  accent: string,
) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 280;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return null;
  }

  const gradient = ctx.createLinearGradient(0, 0, 512, 280);
  gradient.addColorStop(0, "rgba(4, 15, 25, 0.92)");
  gradient.addColorStop(1, "rgba(9, 28, 44, 0.76)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 280);

  ctx.strokeStyle = "rgba(184,216,234,0.36)";
  ctx.lineWidth = 3;
  ctx.strokeRect(13, 13, 486, 254);

  ctx.fillStyle = accent;
  ctx.fillRect(24, 224, 180, 10);
  ctx.fillStyle = "rgba(184,216,234,0.17)";
  ctx.fillRect(24, 244, 300, 4);

  ctx.font = "900 92px Impact, Arial Black, sans-serif";
  ctx.letterSpacing = "1px";
  ctx.fillStyle = "#ffffff";
  ctx.fillText(title, 26, 118);

  ctx.font = "800 28px Arial, sans-serif";
  ctx.fillStyle = "#b8d8ea";
  ctx.fillText(detail.toUpperCase(), 30, 170);

  ctx.font = "700 18px Arial, sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.62)";
  ctx.fillText("GILLIAM BASKETBALL CLUB", 30, 206);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function makeLine(
  THREE: typeof import("three"),
  points: import("three").Vector3[],
  color: number,
  opacity: number,
) {
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity,
  });

  return new THREE.Line(geometry, material);
}

function makeCurveLine(
  THREE: typeof import("three"),
  curve: import("three").Curve<import("three").Vector3>,
  color: number,
  opacity: number,
) {
  return makeLine(THREE, curve.getPoints(80), color, opacity);
}

function buildScene(canvas: HTMLCanvasElement, frameRoot: HTMLElement): SceneHandle {
  let disposed = false;
  let animationFrame = 0;
  const disposables: Array<{ dispose: () => void }> = [];

  const setup = async () => {
    const THREE = await import("three");
    if (disposed) {
      return;
    }

    const qaCanvasSampling =
      window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

    let renderer: import("three").WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
        preserveDrawingBuffer: qaCanvasSampling,
      });
    } catch {
      canvas.dataset.threeReady = "unsupported";
      frameRoot.classList.add("hero-three-scene-reduced-motion");
      return () => {
        frameRoot.classList.remove("hero-three-scene-reduced-motion");
      };
    }
    disposables.push(renderer);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 90);
    const root = new THREE.Group();
    scene.add(root);
    const kineticGroup = new THREE.Group();
    root.add(kineticGroup);

    const routeCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4.7, -0.74, 2.25),
      new THREE.Vector3(-3.12, -0.08, 1.12),
      new THREE.Vector3(-1.78, 0.23, 0.05),
      new THREE.Vector3(-0.4, 0.5, -0.9),
      new THREE.Vector3(0.98, 0.66, -1.72),
    ]);

    const routeGeometry = new THREE.TubeGeometry(routeCurve, 110, 0.022, 9, false);
    const routeMaterial = new THREE.MeshBasicMaterial({
      color: 0xb8d8ea,
      transparent: true,
      opacity: 0.56,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const route = new THREE.Mesh(routeGeometry, routeMaterial);
    kineticGroup.add(route);
    disposables.push(routeGeometry, routeMaterial);

    const routeGlowGeometry = new THREE.TubeGeometry(routeCurve, 110, 0.065, 10, false);
    const routeGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0xb8d8ea,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const routeGlow = new THREE.Mesh(routeGlowGeometry, routeGlowMaterial);
    kineticGroup.add(routeGlow);
    disposables.push(routeGlowGeometry, routeGlowMaterial);

    const redArcCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-5.0, -0.95, 2.8),
      new THREE.Vector3(-3.85, -0.22, 1.1),
      new THREE.Vector3(-2.15, 0.12, -0.45),
      new THREE.Vector3(-0.85, 0.28, -1.82),
    ]);
    const redArc = makeCurveLine(THREE, redArcCurve, 0xd71920, 0.32);
    kineticGroup.add(redArc);
    disposables.push(redArc.geometry, redArc.material);

    const pulseGeometry = new THREE.SphereGeometry(0.11, 24, 18);
    const pulseMaterial = new THREE.MeshBasicMaterial({
      color: 0xd71920,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
    kineticGroup.add(pulse);
    disposables.push(pulseGeometry, pulseMaterial);

    const pulseHaloGeometry = new THREE.SphereGeometry(0.23, 24, 18);
    const pulseHaloMaterial = new THREE.MeshBasicMaterial({
      color: 0xd71920,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const pulseHalo = new THREE.Mesh(pulseHaloGeometry, pulseHaloMaterial);
    kineticGroup.add(pulseHalo);
    disposables.push(pulseHaloGeometry, pulseHaloMaterial);

    const courtGeometry = new THREE.PlaneGeometry(11.5, 7.2, 26, 16);
    const courtMaterial = new THREE.MeshBasicMaterial({
      color: 0xb8d8ea,
      wireframe: true,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
    });
    const court = new THREE.Mesh(courtGeometry, courtMaterial);
    court.rotation.x = -Math.PI / 2;
    court.position.set(0, -1.35, 0.28);
    root.add(court);
    disposables.push(courtGeometry, courtMaterial);

    const redStripeGeometry = new THREE.PlaneGeometry(0.24, 7.4);
    const redStripeMaterial = new THREE.MeshBasicMaterial({
      color: 0xd71920,
      transparent: true,
      opacity: 0.32,
      depthWrite: false,
    });
    const redStripe = new THREE.Mesh(redStripeGeometry, redStripeMaterial);
    redStripe.rotation.x = -Math.PI / 2;
    redStripe.rotation.z = -0.36;
    redStripe.position.set(-4.1, -1.28, 0.04);
    root.add(redStripe);
    disposables.push(redStripeGeometry, redStripeMaterial);

    const courtLineMaterialColor = 0xffffff;
    const courtRect = [
      new THREE.Vector3(-5.2, -1.25, -3.2),
      new THREE.Vector3(5.2, -1.25, -3.2),
      new THREE.Vector3(5.2, -1.25, 3.2),
      new THREE.Vector3(-5.2, -1.25, 3.2),
      new THREE.Vector3(-5.2, -1.25, -3.2),
    ];
    const courtBorder = makeLine(THREE, courtRect, courtLineMaterialColor, 0.24);
    root.add(courtBorder);
    disposables.push(courtBorder.geometry, courtBorder.material);

    const circlePoints: import("three").Vector3[] = [];
    for (let i = 0; i <= 72; i += 1) {
      const angle = (i / 72) * Math.PI * 2;
      circlePoints.push(new THREE.Vector3(Math.cos(angle) * 1.08, -1.24, Math.sin(angle) * 1.08));
    }
    const centerCircle = makeLine(THREE, circlePoints, 0xb8d8ea, 0.28);
    root.add(centerCircle);
    disposables.push(centerCircle.geometry, centerCircle.material);

    const dotGeometry = new THREE.SphereGeometry(0.045, 12, 8);
    const dotMaterial = new THREE.MeshBasicMaterial({
      color: 0xb8d8ea,
      transparent: true,
      opacity: 0.72,
    });
    disposables.push(dotGeometry, dotMaterial);
    for (let i = 0; i < 8; i += 1) {
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.position.copy(routeCurve.getPoint(i / 7));
      kineticGroup.add(dot);
    }

    const particlePositions: number[] = [];
    for (let i = 0; i < 90; i += 1) {
      const seed = i + 1;
      const x = -5.1 + ((Math.sin(seed * 13.37) + 1) / 2) * 6.0;
      const y = -0.85 + ((Math.sin(seed * 7.91) + 1) / 2) * 3.45;
      const z = -3.15 + ((Math.sin(seed * 5.31) + 1) / 2) * 5.6;
      particlePositions.push(x, y, z);
    }
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xb8d8ea,
      size: 0.04,
      transparent: true,
      opacity: 0.36,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    kineticGroup.add(particles);
    disposables.push(particleGeometry, particleMaterial);

    const panelGeometry = new THREE.PlaneGeometry(1.82, 0.995);
    disposables.push(panelGeometry);
    const panelSpecs = [
      { title: "GBC", detail: "team energy", color: "#d71920", position: [-3.68, 1.42, -1.58], rotation: [0.02, 0.34, -0.08] },
      { title: "DEFENSE", detail: "team standard", color: "#d71920", position: [-1.16, 2.12, -2.42], rotation: [0.02, -0.12, -0.035] },
      { title: "VEGAS", detail: "fund the trip", color: "#b8d8ea", position: [-4.22, 2.32, -2.95], rotation: [-0.08, 0.46, 0.06] },
    ] as const;

    const panels: Array<{
      mesh: import("three").Mesh;
      baseY: number;
      baseRotationZ: number;
    }> = [];
    for (const panel of panelSpecs) {
      const texture = makePanelTexture(THREE, panel.title, panel.detail, panel.color);
      if (!texture) {
        continue;
      }
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.58,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(panelGeometry, material);
      mesh.position.set(panel.position[0], panel.position[1], panel.position[2]);
      mesh.rotation.set(panel.rotation[0], panel.rotation[1], panel.rotation[2]);
      kineticGroup.add(mesh);
      panels.push({ mesh, baseY: mesh.position.y, baseRotationZ: mesh.rotation.z });
      disposables.push(texture, material);
    }

    const ballGeometry = new THREE.SphereGeometry(0.42, 24, 18);
    const ballMaterial = new THREE.MeshBasicMaterial({
      color: 0xd71920,
      wireframe: true,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
    });
    const basketball = new THREE.Mesh(ballGeometry, ballMaterial);
    basketball.position.set(-2.65, -0.46, 0.75);
    kineticGroup.add(basketball);
    disposables.push(ballGeometry, ballMaterial);

    const ballRingMaterial = new THREE.MeshBasicMaterial({
      color: 0xb8d8ea,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const ballRings: import("three").Mesh[] = [];
    for (let i = 0; i < 3; i += 1) {
      const ringGeometry = new THREE.TorusGeometry(0.7 + i * 0.16, 0.012, 8, 64);
      const ring = new THREE.Mesh(ringGeometry, ballRingMaterial);
      ring.position.copy(basketball.position);
      ring.rotation.set(Math.PI / 2.2, i * 0.62, i * 0.28);
      kineticGroup.add(ring);
      ballRings.push(ring);
      disposables.push(ringGeometry);
    }
    disposables.push(ballRingMaterial);

    const rimGeometry = new THREE.TorusGeometry(0.42, 0.018, 8, 48);
    const rimMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.36,
    });
    const rim = new THREE.Mesh(rimGeometry, rimMaterial);
    rim.rotation.x = Math.PI / 2;
    rim.position.set(0.86, 0.46, -0.18);
    kineticGroup.add(rim);
    disposables.push(rimGeometry, rimMaterial);

    const logoLoader = new THREE.TextureLoader();
    logoLoader.load("/brand/gbc-huskies-circle-logo.png?v=three-hero", (texture) => {
      if (disposed) {
        texture.dispose();
        return;
      }
      texture.colorSpace = THREE.SRGBColorSpace;
      const logoGeometry = new THREE.PlaneGeometry(2.45, 2.45);
      const logoMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.14,
        depthWrite: false,
      });
      const logo = new THREE.Mesh(logoGeometry, logoMaterial);
      logo.position.set(-4.42, 1.0, -2.7);
      logo.rotation.y = 0.34;
      kineticGroup.add(logo);
      disposables.push(texture, logoGeometry, logoMaterial);
    });

    const pointerTarget = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      pointerTarget.x = event.clientX / window.innerWidth - 0.5;
      pointerTarget.y = event.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = frameRoot.getBoundingClientRect();
      const width = Math.max(320, Math.floor(rect.width));
      const height = Math.max(420, Math.floor(rect.height));
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.fov = width < 768 ? 49 : 42;
      camera.position.set(width < 768 ? 0.42 : 0.2, width < 768 ? 2.95 : 3.12, width < 768 ? 8.65 : 7.4);
      root.scale.setScalar(width < 768 ? 0.82 : 1);
      root.position.set(width < 768 ? 0.08 : 0.18, width < 768 ? -0.02 : 0.04, 0);
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(frameRoot);
    resize();

    const lookAt = new THREE.Vector3(0, -0.1, 0);
    const startedAt = performance.now();
    let previousFrameTime = startedAt;

    const render = (frameTime = performance.now()) => {
      const safeFrameTime = frameTime >= startedAt ? frameTime : performance.now();
      const elapsed = Math.max(0, (safeFrameTime - startedAt) / 1000);
      const delta = Math.min(0.05, Math.max(0, (safeFrameTime - previousFrameTime) / 1000));
      previousFrameTime = safeFrameTime;
      const routeProgress = ((elapsed * 0.17) % 1 + 1) % 1;
      const travel = routeCurve.getPoint(routeProgress);
      pulse.position.copy(travel);
      pulseHalo.position.copy(travel);
      pulse.scale.setScalar(1 + Math.sin(elapsed * 5.4) * 0.18);
      pulseHalo.scale.setScalar(1 + Math.sin(elapsed * 5.4) * 0.32);
      routeGlowMaterial.opacity = 0.1 + Math.sin(elapsed * 1.4) * 0.025;

      root.rotation.y = pointerTarget.x * 0.13 + Math.sin(elapsed * 0.34) * 0.025;
      root.rotation.x = -pointerTarget.y * 0.035;
      kineticGroup.rotation.z = Math.sin(elapsed * 0.22) * 0.012;
      basketball.rotation.x += delta * 0.42;
      basketball.rotation.y += delta * 0.68;
      rim.rotation.z = Math.sin(elapsed * 0.75) * 0.1;
      redArc.rotation.y = Math.sin(elapsed * 0.38) * 0.05;
      particles.rotation.y = elapsed * 0.018;

      for (let index = 0; index < panels.length; index += 1) {
        const panel = panels[index];
        panel.mesh.position.y = panel.baseY + Math.sin(elapsed * 0.72 + index) * 0.025;
        panel.mesh.rotation.z = panel.baseRotationZ + Math.sin(elapsed * 0.52 + index) * 0.01;
      }
      for (let index = 0; index < ballRings.length; index += 1) {
        const ring = ballRings[index];
        ring.rotation.z += delta * (0.2 + index * 0.08);
        ring.rotation.x += Math.sin(elapsed + index) * 0.0009;
      }

      camera.position.x += (pointerTarget.x * 0.44 - camera.position.x) * 0.018;
      camera.lookAt(lookAt);
      renderer.render(scene, camera);
      canvas.dataset.threeFrame = String(Math.floor(elapsed * 24));

      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(render);
      }
    };

    canvas.dataset.threeReady = "true";
    render();

    if (reduceMotion) {
      frameRoot.classList.add("hero-three-scene-reduced-motion");
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  };

  let cleanup: (() => void) | undefined;
  setup().then((effectCleanup) => {
    cleanup = effectCleanup;
    if (disposed && cleanup) {
      cleanup();
    }
  });

  return {
    dispose: () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      cleanup?.();
      for (const disposable of disposables) {
        disposable.dispose();
      }
    },
  };
}

export default function HeroThreeScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const frame = frameRef.current;
    if (!canvas || !frame) {
      return undefined;
    }

    const handle = buildScene(canvas, frame);
    return () => handle.dispose();
  }, []);

  return (
    <div ref={frameRef} className="hero-three-scene" aria-hidden="true" data-hero-three>
      <canvas ref={canvasRef} data-hero-three-canvas />
    </div>
  );
}
