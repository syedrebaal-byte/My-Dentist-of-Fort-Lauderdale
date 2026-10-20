import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye, Sparkles, ShieldCheck, Layers } from 'lucide-react';

interface LayerInfo {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  benefit: string;
  techSpec: string;
}

const LAYERS: LayerInfo[] = [
  {
    id: 'enamel',
    name: 'Artisanal Porcelain Enamel',
    subtitle: 'Outer Aesthetic Shield',
    description: 'Layered feldspathic and lithium disilicate porcelain mimicking natural tooth fluorescence, opalescence, and micro-texture.',
    benefit: '100% stain-resistant, impervious to coffee, red wine, and aging discoloration.',
    techSpec: '0.3mm – 0.5mm ultra-thin preparation preserves 95% of natural tooth enamel.'
  },
  {
    id: 'dentin',
    name: 'Dentin Core & Biological Seal',
    subtitle: 'Shock Absorption & Color Tone',
    description: 'The natural resilient inner layer that gives the tooth its warm internal luminosity and cushions biting forces.',
    benefit: 'Bio-compatible bonding resins seal microscopic tubules to eliminate post-op sensitivity.',
    techSpec: 'Sub-micron adhesive hybridization bond strength exceeding 35 MPa.'
  },
  {
    id: 'implant',
    name: 'Biocompatible Titanium Anchor',
    subtitle: 'Sub-Gingival Root Structure',
    description: 'Medical-grade Grade 4 titanium root fixture engineered with a laser-etched micro-porous surface that fuses directly with jawbone.',
    benefit: 'Maintains alveolar jawbone volume and prevents sunken facial contours.',
    techSpec: 'Full osseointegration with >98.6% 10-year clinical success rate.'
  }
];

export const InteractiveTooth3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<LayerInfo>(LAYERS[0]);
  const [isRotating, setIsRotating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [webGlSupported, setWebGlSupported] = useState(true);
  const isRotatingRef = useRef(true);
  isRotatingRef.current = isRotating;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let toothGroup: THREE.Group;
    let animationFrameId: number;

    try {
      // Scene setup
      scene = new THREE.Scene();

      const width = container.clientWidth || 400;
      const height = container.clientHeight || 450;

      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0.8, 4.2);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.innerHTML = '';
      container.appendChild(renderer.domElement);

      // Group for tooth assembly
      toothGroup = new THREE.Group();
      scene.add(toothGroup);
    } catch (err) {
      console.warn('WebGL initialization failed, falling back to 2.5D visual mode:', err);
      setWebGlSupported(false);
      return;
    }

    // 1. Crown Geometry (Organic sculptural molar / premolar tooth anatomy)
    // We construct a multi-part sculptural representation using lathe / lofted procedural geometry
    const crownPoints: THREE.Vector2[] = [];
    crownPoints.push(new THREE.Vector2(0, 1.4));
    crownPoints.push(new THREE.Vector2(0.45, 1.35));
    crownPoints.push(new THREE.Vector2(0.85, 1.15));
    crownPoints.push(new THREE.Vector2(0.95, 0.7));
    crownPoints.push(new THREE.Vector2(0.88, 0.2));
    crownPoints.push(new THREE.Vector2(0.72, -0.2));
    crownPoints.push(new THREE.Vector2(0.55, -0.5));
    crownPoints.push(new THREE.Vector2(0.4, -0.7));

    const crownGeo = new THREE.LatheGeometry(crownPoints, 48);
    // Deform vertices to simulate organic dental cusps and anatomical groove contours
    const pos = crownGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const angle = Math.atan2(z, x);
      const radius = Math.sqrt(x * x + z * z);

      // 4 distinct dental cusps modulation
      const cuspModulation = Math.sin(angle * 2) * 0.12 * Math.max(0, (y + 0.3) / 1.5);
      const fissureModulation = Math.cos(angle * 4) * 0.04;
      
      const newRadius = radius * (1 + cuspModulation + fissureModulation);
      pos.setX(i, Math.cos(angle) * newRadius);
      pos.setZ(i, Math.sin(angle) * newRadius);

      // Cusp tip height variation
      if (y > 0.8) {
        const heightMod = Math.cos(angle * 2) * 0.15;
        pos.setY(i, y + heightMod);
      }
    }
    crownGeo.computeVertexNormals();

    // High-end pearlescent ceramic enamel material
    const enamelMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfcfbfa,
      roughness: 0.12,
      metalness: 0.05,
      transmission: 0.35,
      ior: 1.54,
      reflectivity: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      sheen: 0.6,
      sheenColor: new THREE.Color(0xdce7f0),
      specularColor: new THREE.Color(0xffffff)
    });

    const crownMesh = new THREE.Mesh(crownGeo, enamelMaterial);
    crownMesh.position.y = 0.2;
    crownMesh.castShadow = true;
    crownMesh.receiveShadow = true;
    toothGroup.add(crownMesh);

    // 2. Implant / Root Section (Titanium screw threading + biological taper)
    const rootPoints: THREE.Vector2[] = [];
    rootPoints.push(new THREE.Vector2(0.4, -0.5));
    rootPoints.push(new THREE.Vector2(0.38, -0.7));
    rootPoints.push(new THREE.Vector2(0.35, -1.0));
    rootPoints.push(new THREE.Vector2(0.30, -1.3));
    rootPoints.push(new THREE.Vector2(0.24, -1.6));
    rootPoints.push(new THREE.Vector2(0.12, -1.85));
    rootPoints.push(new THREE.Vector2(0, -1.95));

    const rootGeo = new THREE.LatheGeometry(rootPoints, 36);
    // Add micro-threading to titanium root
    const rootPos = rootGeo.attributes.position;
    for (let i = 0; i < rootPos.count; i++) {
      const y = rootPos.getY(i);
      const angle = Math.atan2(rootPos.getZ(i), rootPos.getX(i));
      const thread = Math.sin((y * 28) + angle) * 0.025;
      if (y < -0.6 && y > -1.8) {
        const r = Math.sqrt(rootPos.getX(i) ** 2 + rootPos.getZ(i) ** 2);
        rootPos.setX(i, (rootPos.getX(i) / r) * (r + thread));
        rootPos.setZ(i, (rootPos.getZ(i) / r) * (r + thread));
      }
    }
    rootGeo.computeVertexNormals();

    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0x9ba3af,
      roughness: 0.35,
      metalness: 0.88
    });

    const rootMesh = new THREE.Mesh(rootGeo, titaniumMaterial);
    rootMesh.position.y = 0.2;
    toothGroup.add(rootMesh);

    // 3. Subtle floating ambient ring (Sub-gingival margin indicator / gold accent)
    const ringGeo = new THREE.TorusGeometry(0.58, 0.02, 16, 64);
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xc5a880,
      roughness: 0.25,
      metalness: 0.8
    });
    const ringMesh = new THREE.Mesh(ringGeo, goldMaterial);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.y = -0.3;
    toothGroup.add(ringMesh);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xfff5ea, 2.8);
    mainKeyLight.position.set(3, 4, 3);
    scene.add(mainKeyLight);

    const softFillLight = new THREE.DirectionalLight(0xdbeafe, 1.8);
    softFillLight.position.set(-3, 2, -2);
    scene.add(softFillLight);

    const rimLight = new THREE.DirectionalLight(0xc5a880, 2.2);
    rimLight.position.set(0, -3, 2);
    scene.add(rimLight);

    // Interactive Drag Controls
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;

      toothGroup.rotation.y += deltaX * 0.01;
      toothGroup.rotation.x += deltaY * 0.01;
      // Clamp vertical tilt
      toothGroup.rotation.x = Math.max(-0.6, Math.min(0.6, toothGroup.rotation.x));

      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotatingRef.current && !isDragging) {
        toothGroup.rotation.y += delta * 0.45;
        // Subtle floating bob
        toothGroup.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.05;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      domElement.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
      crownGeo.dispose();
      rootGeo.dispose();
      ringGeo.dispose();
      enamelMaterial.dispose();
      titaniumMaterial.dispose();
      goldMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-b from-[#0e1726] to-[#070c14] border border-[#223147] p-6 lg:p-8 text-white shadow-2xl overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3b82f6]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10 border-b border-[#223147]/80 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a880]/15 text-[#d4bc9b] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#c5a880]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            Interactive 3D Biomechanics
          </div>
          <h3 className="text-2xl font-serif font-medium text-white tracking-tight">
            Anatomy of a Bespoke Dental Restoration
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Drag to rotate 360° • Explore clinical layers engineered by Dr. Z
          </p>
        </div>

        {/* Rotation Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              isRotating
                ? 'bg-[#c5a880] text-[#0b131f] font-semibold shadow-md shadow-[#c5a880]/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
            {isRotating ? 'Auto-Orbiting' : 'Paused (Manual Drag)'}
          </button>
        </div>
      </div>

      {/* Interactive Grid: 3D Canvas + Layer Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        {/* 3D Canvas Container */}
        <div
          className="lg:col-span-7 relative h-[360px] sm:h-[420px] rounded-2xl bg-gradient-to-b from-[#141e30]/50 to-[#0c1322]/80 border border-slate-800/80 cursor-grab active:cursor-grabbing flex items-center justify-center overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {webGlSupported ? (
            <>
              <div ref={containerRef} className="w-full h-full" />
              {/* Interactive Cue Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none px-3 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-[11px] text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#c5a880]" />
                  Interactive WebGL Viewport
                </span>
                <span className="text-slate-400">Click & Drag to Inspect</span>
              </div>
            </>
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <img
                src="/assert/images/dental-implants.jpg"
                alt="Precision Dental Anatomy and Titanium Implant"
                className="max-h-[260px] object-contain rounded-xl shadow-lg border border-slate-700"
              />
              <div className="mt-3 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-[#c5a880]/30 text-xs text-[#d4bc9b]">
                Anatomical Structural View: {activeLayer.name}
              </div>
            </div>
          )}
        </div>

        {/* Anatomical Layer Selector & Details */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#c5a880]" />
            Select Anatomical Component
          </div>

          <div className="flex flex-col gap-2.5">
            {LAYERS.map((layer) => {
              const isSelected = activeLayer.id === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer)}
                  className={`text-left p-4 rounded-xl transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#182338] border-[#c5a880] shadow-lg shadow-[#c5a880]/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-semibold ${isSelected ? 'text-[#e5d4be]' : 'text-slate-200'}`}>
                      {layer.name}
                    </span>
                    <span className="text-[11px] text-[#c5a880] uppercase tracking-wider font-mono">
                      {layer.id === 'enamel' ? 'Porcelain' : layer.id === 'dentin' ? 'Bond' : 'Titanium'}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-sans line-clamp-2">
                    {layer.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Layer Deep Dive Card */}
          <div className="p-4 rounded-2xl bg-[#111c2e] border border-slate-700/70 mt-1">
            <div className="text-xs font-semibold text-[#c5a880] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
              Clinical Specification
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {activeLayer.description}
            </p>
            <div className="mt-3 pt-3 border-t border-slate-800 flex flex-col gap-1.5 text-[11px]">
              <div className="text-slate-400">
                <strong className="text-slate-200">Patient Benefit:</strong> {activeLayer.benefit}
              </div>
              <div className="text-[#c5a880]/90 font-mono">
                {activeLayer.techSpec}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
