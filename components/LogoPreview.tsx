'use client';

import { Component, Suspense, useMemo, useRef, useState, type ReactNode } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useReducedMotion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { BufferGeometry, DoubleSide, Float32BufferAttribute, Group, MathUtils, ShaderMaterial, SRGBColorSpace, TextureLoader } from 'three';
import styles from '@/app/logo-preview/preview.module.css';

const turnSeconds = 2.4;
const width = 4.8;
const height = width * 297 / 460;
const depth = .24;
const iconUrl = '/aayaamx-infinity.png';

function createEdges(image: HTMLImageElement) {
  const canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  const context = canvas.getContext('2d')!;
  context.drawImage(image, 0, 0);
  const pixels = context.getImageData(0, 0, image.width, image.height).data;
  const positions: number[] = [];
  const solid = (x: number, y: number) =>
    x >= 0 && x < image.width && y >= 0 && y < image.height &&
    pixels[(y * image.width + x) * 4 + 3] >= 96;

  function edge(x1: number, y1: number, x2: number, y2: number) {
    const a = (x1 / image.width - .5) * width;
    const b = (.5 - y1 / image.height) * height;
    const c = (x2 / image.width - .5) * width;
    const d = (.5 - y2 / image.height) * height;
    const z = depth / 2;
    positions.push(a,b,z,c,d,z,c,d,-z,a,b,z,c,d,-z,a,b,-z);
  }

  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      if (!solid(x, y)) continue;
      if (!solid(x - 1, y)) edge(x,y,x,y+1);
      if (!solid(x + 1, y)) edge(x+1,y+1,x+1,y);
      if (!solid(x, y - 1)) edge(x+1,y,x,y);
      if (!solid(x, y + 1)) edge(x,y+1,x+1,y+1);
    }
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

const vertexShader = `
  varying vec2 logoUv;
  void main() {
    logoUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float elapsed;
  uniform sampler2D artwork;
  varying vec2 logoUv;
  void main() {
    vec4 ink = texture2D(artwork, logoUv);
    vec2 left = (logoUv - vec2(.30, .46)) * vec2(1.0, .65);
    vec2 right = (logoUv - vec2(.78, .64)) * vec2(1.0, .65);
    float blend = smoothstep(.54, .66, logoUv.x);
    float angle = mix(atan(left.y, left.x), -atan(right.y, right.x), blend);
    float phase = fract(angle / 6.283185 + .5 - elapsed * .30);
    float pulse = smoothstep(.02, .18, phase) * (1.0 - smoothstep(.19, .29, phase));
    float streak = pow(.5 + .5 * cos((logoUv.y + logoUv.x * .32) * 68.0), 5.0);
    vec3 light = mix(vec3(.58, .82, 1.0), vec3(.70, 1.0, .71), blend);
    gl_FragColor = vec4(light, ink.a * pulse * (.12 + .53 * streak));
  }
`;

function Ribbon({replay, reduced, turnDegrees}: {replay:number; reduced:boolean; turnDegrees:number}) {
  const turn = MathUtils.degToRad(turnDegrees);
  const model = useRef<Group>(null);
  const light = useRef<ShaderMaterial>(null);
  const start = useRef<{ replay:number; time:number } | null>(null);
  const artwork = useLoader(TextureLoader, iconUrl);
  artwork.colorSpace = SRGBColorSpace;
  const geometry = useMemo(() => createEdges(artwork.image), [artwork]);
  const uniforms = useMemo(() => ({elapsed:{value:0}, artwork:{value:artwork}}), [artwork]);

  useFrame(({clock}) => {
    const group = model.current;
    if (!group || reduced) return;
    const now = clock.elapsedTime;
    if (!start.current || start.current.replay !== replay) start.current = { replay, time: now };

    const progress = Math.min((now - start.current.time) / turnSeconds, 1);
    const ease = progress * progress * (3 - 2 * progress);
    group.rotation.y = -turn * (1 - ease);
    if (light.current) light.current.uniforms.elapsed.value = now;
  });

  return <group ref={model} rotation={[0, reduced ? 0 : -turn, 0]}>
    <mesh geometry={geometry}>
      <meshPhysicalMaterial color="#2b7295" metalness={.34} roughness={.29} clearcoat={1} side={DoubleSide}/>
    </mesh>
    <mesh position={[0,0,-depth / 2]} >
      <planeGeometry args={[width,height]}/>
      <meshBasicMaterial map={artwork} alphaTest={.38} toneMapped={false} side={DoubleSide}/>
    </mesh>
    <mesh position={[0,0,depth / 2]}>
      <planeGeometry args={[width,height]}/>
      <meshBasicMaterial map={artwork} alphaTest={.38} toneMapped={false}/>
    </mesh>
    {!reduced && <mesh position={[0,0,depth / 2 + .004]}>
      <planeGeometry args={[width,height]}/>
      <shaderMaterial ref={light} uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} transparent depthWrite={false}/>
    </mesh>}
  </group>;
}

class PreviewBoundary extends Component<{ children:ReactNode; fallback:ReactNode }, { failed:boolean }> {
  state = { failed:false };
  static getDerivedStateFromError() { return { failed:true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

export function InfinityRibbonCanvas({replay = 0, reduced = false, turnDegrees = 160}: {replay?:number; reduced?:boolean; turnDegrees?:number}) {
  const fallback = <div className={styles.fallback}><img src={iconUrl} alt="AayaamX infinity icon" width="460" height="297"/></div>;

  return <PreviewBoundary fallback={fallback}>
        <Canvas fallback={fallback} aria-label="Blue and green infinity ribbon" camera={{position:[0,0,8.5],fov:38}} dpr={[1,1.5]} frameloop={reduced?'demand':'always'}>
          <ambientLight intensity={1.65}/>
          <directionalLight position={[1,4,5]} intensity={2.6}/>
          <directionalLight position={[-3,-1,2]} intensity={1.1} color="#99d6ff"/>
          <Suspense fallback={null}><Ribbon replay={replay} reduced={reduced} turnDegrees={turnDegrees}/></Suspense>
        </Canvas>
  </PreviewBoundary>;
}

export default function LogoPreview() {
  const [replay, setReplay] = useState(0);
  const reduced = useReducedMotion() === true;

  return <section className={styles.preview} aria-label="3D AayaamX infinity icon preview">
    <div className={styles.stage}>
      <InfinityRibbonCanvas replay={replay} reduced={reduced}/>
    </div>
    <div className={styles.controls}>
      <span>3D ICON STUDY</span>
      {!reduced && <button type="button" onClick={() => setReplay(value => value + 1)}><RotateCcw size={16}/> Replay 160° turn</button>}
    </div>
  </section>;
}
