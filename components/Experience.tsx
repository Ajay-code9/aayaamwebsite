'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { RoundedBox, Environment, Lightformer } from '@react-three/drei';
import { Component, memo, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type Props = { active: number; reduced: boolean; running: boolean };
const BLUE = '#101C82', GREEN = '#55B75C', ORANGE = '#FF861E';
const CAMERA = { position: [7, 5.8, 10] as [number, number, number], fov: 34, zoom: 1.18 };
const TITLES = ['AI ENGINE', 'TRADING INFRA', 'BLOCKCHAIN', 'PRODUCT ENGINEERING'];
const SLOTS = [[.95, -.65, 1.65], [-2.1, -.35, .25], [-1.25, -.15, -1.85], [1.65, -.2, -1.7]];
const OVERVIEW_SLOTS = [[-1.55,-.64,1.15],[1.48,-.5,1.12],[-1.5,-.24,-1.3],[1.5,-.15,-1.38]];
const INITIAL = SLOTS.map(p => new THREE.Vector3(...p));
const CENTER = new THREE.Vector3(0, -.76, 0);
const UPLINK = new THREE.Vector3(0, -.1, 0);
function Satin({ color = BLUE }: { color?: string; metalness?: number }) {
 const branded=color===BLUE||color===GREEN;
 const royal=useMemo(()=>new THREE.Color(BLUE),[]);
 const emerald=useMemo(()=>new THREE.Color(GREEN),[]);
 return <meshPhysicalMaterial color={branded?'#ffffff':color} metalness={.035} roughness={branded?.17:.23} clearcoat={1} clearcoatRoughness={.11} transmission={branded?.46:.55} thickness={.55} ior={1.48} attenuationColor={branded?'#c6e4df':color} attenuationDistance={5} envMapIntensity={.95}
 customProgramCacheKey={()=>branded?`logo-glass-${color}`:'pearl-glass'}
 onBeforeCompile={shader=>{
 if(!branded)return;
 shader.uniforms.logoBlue={value:royal};shader.uniforms.logoGreen={value:emerald};
 shader.vertexShader='varying vec3 vLogoSurface;\n'+shader.vertexShader;
 shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvLogoSurface=position;');
 shader.fragmentShader='varying vec3 vLogoSurface;\nuniform vec3 logoBlue;\nuniform vec3 logoGreen;\n'+shader.fragmentShader;
 shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
 vec3 brandDirection=normalize(vLogoSurface+vec3(0.00001));
 float brandSweep=smoothstep(-0.35,0.65,brandDirection.y*0.8+brandDirection.x*0.5);
 brandSweep=mix(brandSweep,${color===GREEN?'0.94':'0.06'},0.42);
 diffuseColor.rgb*=mix(logoBlue,logoGreen,brandSweep);
 float ribbonEdge=pow(max(0.0,1.0-abs(brandDirection.y*0.8+brandDirection.x*0.5-0.2)*5.0),12.0);
 diffuseColor.rgb+=vec3(ribbonEdge*0.035);`);
 }}/>
}function Solid({ position = [0, 0, 0], size, color = '#ffffff', name }: { position?: [number, number, number]; size: [number, number, number]; color?: string; name?: string }) {
 return <RoundedBox name={name} args={size} radius={Math.min(...size) * .22} smoothness={2} position={position}><Satin color={color} /></RoundedBox>;
}
function Trace({ points, color = '#c4d1e1', opacity = .65, reveal=false, reduced=false }: { points: number[][]; color?: string; opacity?: number; reveal?:boolean; reduced?:boolean }) {
 const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points.map(p => new THREE.Vector3(...p))), [points]);
 useEffect(() => () => geometry.dispose(), [geometry]);
 const {invalidate}=useThree();useEffect(()=>{const count=geometry.attributes.position.count;const value={n:reveal&&!reduced?0:count};const tween=gsap.to(value,{n:count,duration:reduced?0:1.2,ease:"power2.out",onUpdate:()=>{geometry.setDrawRange(0,Math.floor(value.n/2)*2);invalidate();}});return()=>{tween.kill();geometry.setDrawRange(0,count);};},[geometry,reveal,reduced,invalidate]);
 return <lineSegments geometry={geometry}><lineBasicMaterial color={color} transparent opacity={opacity} /></lineSegments>;
}
function AIEngine({running,reduced}:Pick<Props,'running'|'reduced'> & {active:boolean}){
 const packets=useRef<THREE.Mesh[]>([]);const time=useRef(0);
 const routes=useMemo(()=>[
 new THREE.CatmullRomCurve3([new THREE.Vector3(-.7,.38,.08),new THREE.Vector3(-.48,.24,.12),new THREE.Vector3(-.2,.28,.1),new THREE.Vector3(0,.42,0)]),
 new THREE.CatmullRomCurve3([new THREE.Vector3(.08,.47,0),new THREE.Vector3(.33,.28,.12),new THREE.Vector3(.55,.3,.12),new THREE.Vector3(.72,.46,.02)])
 ],[]);
 const label=useMemo(()=>{const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;const ctx=canvas.getContext('2d')!;ctx.fillStyle='#ffffff';ctx.font='600 130px Arial';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('AI',128,136);const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;return texture;},[]);
 useEffect(()=>()=>label.dispose(),[label]);
 useFrame((_,dt)=>{if(!running||reduced)return;time.current+=Math.min(dt,.05);packets.current.forEach((p,i)=>routes[Math.floor(i/3)].getPoint((time.current*.19+(i%3)/3)%1,p.position));});
 return <group>
 {/* Incoming tasks: documents arrive in a compact queue. */}
 {[0,1,2].map(i=><group key={i} position={[-.72,.35+i*.2,.16-i*.12]} rotation={[0,-.12,-.08]}>
 <Solid size={[.42,.3,.035]} color="#edf5ff"/>
 <Solid position={[-.095,.07,.026]} size={[.13,.035,.012]} color={i===1?GREEN:BLUE}/>
 <Solid position={[0,-.005,.026]} size={[.28,.023,.012]} color="#9aafd0"/>
 <Solid position={[-.04,-.065,.026]} size={[.2,.023,.012]} color="#bdcee3"/>
 </group>)}
 {/* AI assistant: a single processor turns the task queue into useful work. */}
 <Solid position={[0,.08,0]} size={[.84,.12,.67]} color={BLUE}/>
 <Solid position={[0,.18,0]} size={[.66,.07,.53]} color="#e5effa"/>
 <group position={[0,.62,-.08]}>
 <Solid size={[.58,.61,.22]} color={BLUE}/>
 <Solid position={[0,0,.125]} size={[.49,.51,.025]} color={GREEN}/>
 <mesh position={[0,0,.145]}><planeGeometry args={[.42,.42]}/><meshBasicMaterial map={label} transparent depthWrite={false} toneMapped={false}/></mesh>
 {[-1,1].flatMap(side=>[0,1,2,3].map(i=><Solid key={`${side}-${i}`} position={[side*.34,(i-1.5)*.12,0]} size={[.11,.035,.065]} color="#afc4df"/>))}
 <mesh position={[0,.35,0]}><sphereGeometry args={[.025,16,12]}/><meshBasicMaterial color={ORANGE}/></mesh>
 </group>
 {/* Completed work: checkmarks make the benefit readable at a glance. */}
 <group position={[.74,.61,.02]} rotation={[0,-.14,0]}>
 <Solid size={[.46,.76,.055]} color="#eff8f3"/>
 <Solid position={[0,.275,.037]} size={[.38,.12,.02]} color={GREEN}/>
 {[0,1,2,3].map(i=><group key={i} position={[-.13,.135-i*.13,.04]}>
 <mesh><circleGeometry args={[.04,24]}/><meshBasicMaterial color={GREEN}/></mesh>
 <group position={[-.015,-.006,.006]} rotation={[0,0,.8]}><Solid size={[.01,.028,.006]} color="#ffffff"/></group><group position={[.008,.006,.006]} rotation={[0,0,-.65]}><Solid size={[.01,.05,.006]} color="#ffffff"/></group>
 <Solid position={[.18,.008,0]} size={[.19,.022,.012]} color={i===0?BLUE:'#97b5ac'}/>
 <Solid position={[.155,-.028,0]} size={[.14,.015,.01]} color="#c3d8ce"/>
 </group>)}
 </group>
 {routes.map((curve,i)=><ProductRoute key={i} curve={curve}/>)}
 {Array.from({length:6},(_,i)=><mesh key={i} ref={m=>{if(m)packets.current[i]=m;}} position={routes[Math.floor(i/3)].getPoint((i%3)/3)}><sphereGeometry args={[.018,12,8]}/><meshBasicMaterial color={i<3?BLUE:GREEN}/></mesh>)}
 </group>;
}function PanelTitle({text,color=BLUE,position,size=[.3,.07]}:{text:string;color?:string;position:[number,number,number];size?:[number,number]}){
 const texture=useMemo(()=>{const c=document.createElement('canvas');c.width=512;c.height=96;const ctx=c.getContext('2d')!;ctx.fillStyle=color;ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='600 60px Arial';const width=ctx.measureText(text).width;if(width>472)ctx.font="600 "+Math.floor(60*472/width)+"px Arial";ctx.fillText(text,256,51);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t;},[text,color]);
 useEffect(()=>()=>texture.dispose(),[texture]);
 return <mesh position={position}><planeGeometry args={size}/><meshBasicMaterial map={texture} transparent depthWrite={false} toneMapped={false}/></mesh>;
}
function TradingEngine({running,reduced}:Pick<Props,'running'|'reduced'>){
 const packets=useRef<THREE.Mesh[]>([]);const time=useRef(0);
 const routes=useMemo(()=>[
 new THREE.CatmullRomCurve3([new THREE.Vector3(-.69,.43,.13),new THREE.Vector3(-.46,.25,.22),new THREE.Vector3(-.18,.28,.14),new THREE.Vector3(-.1,.48,-.12)]),
 new THREE.CatmullRomCurve3([new THREE.Vector3(.15,.46,-.12),new THREE.Vector3(.35,.25,.13),new THREE.Vector3(.61,.25,.19),new THREE.Vector3(.76,.42,.09)])
 ],[]);
 useFrame((_,dt)=>{if(!running||reduced)return;time.current+=Math.min(dt,.05);packets.current.forEach((p,i)=>routes[Math.floor(i/3)].getPoint((time.current*.16+(i%3)/3)%1,p.position));});
 return <group>
 {/* Broker CRM: clients and accounts, rather than anonymous floating bars. */}
 <group position={[-.7,.62,.11]} rotation={[0,-.08,0]}>
 <Solid size={[.41,.68,.055]} color="#eef5ff"/>
 <Solid position={[0,.245,.038]} size={[.35,.12,.018]} color={BLUE}/>
 <PanelTitle text="BROKER CRM" color="#ffffff" position={[0,.245,.052]} size={[.3,.055]}/>
 {[0,1,2].map(i=><group key={i} position={[-.12,.1-i*.15,.04]}>
 <mesh><circleGeometry args={[.035,20]}/><meshBasicMaterial color={i===0?'#c6e3d5':'#d0dff1'}/></mesh>
 <mesh position={[0,.006,.004]}><circleGeometry args={[.013,16]}/><meshBasicMaterial color={BLUE}/></mesh>
 <Solid position={[0,-.017,.007]} size={[.033,.015,.008]} color={BLUE}/>
 <Solid position={[.16,.012,0]} size={[.17,.023,.012]} color={i===0?GREEN:BLUE}/>
 <Solid position={[.135,-.031,0]} size={[.12,.018,.012]} color="#a5bad4"/>
 </group>)}
 </group>
 {/* Trading terminal: chart, bid/ask book and an execution status rail. */}
 <group position={[0,.73,-.18]}>
 <Solid size={[1.02,.76,.075]} color={BLUE}/>
 <Solid position={[0,0,.048]} size={[.95,.69,.025]} color="#f2f8ff"/>
 <Solid position={[0,.265,.067]} size={[.89,.12,.018]} color={BLUE}/>
 <PanelTitle text="TRADING PLATFORM" color="#ffffff" position={[0,.265,.081]} size={[.58,.06]}/>
 <Solid position={[-.15,-.015,.066]} size={[.54,.35,.014]} color="#e5f0f4"/>
 {[.12,.23,.17,.31,.25,.37].map((height,i)=><group key={i} position={[-.37+i*.083,-.155+height/2,.09]}>
 <Solid size={[.039,height,.016]} color={i===2||i===4?BLUE:GREEN}/>
 <mesh><boxGeometry args={[.007,height+.055,.01]}/><meshStandardMaterial color={i===2||i===4?BLUE:GREEN}/></mesh>
 </group>)}
 {[0,1,2,3].map(i=><group key={i} position={[.27,.12-i*.073,.076]}>
 <Solid position={[-.045,0,0]} size={[.075+i*.014,.027,.013]} color={GREEN}/>
 <Solid position={[.065,0,0]} size={[.065+(3-i)*.015,.027,.013]} color={BLUE}/>
 </group>)}
 <Solid position={[0,-.265,.068]} size={[.85,.065,.016]} color="#d6eade"/>
 <PanelTitle text="CONNECTED OPERATIONS" position={[0,-.265,.081]} size={[.56,.043]}/>
 </group>
 {/* Infrastructure: connected services keep the trading business operating. */}
 {[0,1].map(i=><group key={i} position={[0,.09+i*.105,-.1]}>
 <Solid size={[.87,.08,.61]} color={i===0?BLUE:'#e4eef8'}/>
 {[0,1,2].map(j=><mesh key={j} position={[-.3+j*.065,0,.312]}><sphereGeometry args={[.012,12,8]}/><meshBasicMaterial color={j===0?GREEN:'#a2bad7'}/></mesh>)}
 </group>)}
 <group position={[.76,.6,.1]} rotation={[0,-.1,0]}>
 <Solid size={[.38,.63,.055]} color="#edf7f1"/>
 <Solid position={[0,.225,.04]} size={[.32,.11,.018]} color={GREEN}/>
 <PanelTitle text="OPERATIONS" color="#ffffff" position={[0,.225,.053]} size={[.28,.05]}/>
 {['ACCOUNTS','PAYMENTS','REPORTS'].map((text,i)=><group key={text} position={[0,.08-i*.14,.04]}>
 <mesh position={[-.115,0,.005]}><circleGeometry args={[.019,16]}/><meshBasicMaterial color={GREEN}/></mesh>
 <PanelTitle text={text} position={[.025,0,.015]} size={[.21,.043]}/>
 <Solid position={[0,-.056,0]} size={[.28,.008,.008]} color="#c8ded2"/>
 </group>)}
 </group>
 {routes.map((curve,i)=><ProductRoute key={i} curve={curve}/>)}
 {Array.from({length:6},(_,i)=><mesh key={i} ref={m=>{if(m)packets.current[i]=m;}} position={routes[Math.floor(i/3)].getPoint((i%3)/3)}><sphereGeometry args={[.018,12,8]}/><meshBasicMaterial color={i<3?BLUE:GREEN}/></mesh>)}
 </group>;
}const BLOCKS=Array.from({length:8},(_,i)=>new THREE.Vector3((i%2-.5)*.54,.34+Math.floor(i/4)*.5,(Math.floor(i/2)%2-.5)*.54));
const BLOCK_LINES=BLOCKS.flatMap((p,i)=>[p.toArray(),BLOCKS[(i+1)%8].toArray(),p.toArray(),BLOCKS[(i+4)%8].toArray()]);
function Blockchain({active,reduced}:{active:boolean;reduced:boolean}){return <group><Trace points={BLOCK_LINES} color="#398557" reveal={active} reduced={reduced}/>{BLOCKS.map((p,i)=><group key={i} position={p} name="piece"><Solid size={[.32,.32,.32]} color={i%3===0?GREEN:i%3===1?BLUE:'#e5ecf8'}/><Solid position={[0,.169,0]} size={[.13,.012,.13]} color={i%3===1?'#7e92cf':'#fff'}/></group>)}</group>;}
function ProductRoute({curve}:{curve:THREE.CatmullRomCurve3}){
 const geometry=useMemo(()=>new THREE.TubeGeometry(curve,24,.006,6,false),[curve]);
 useEffect(()=>()=>geometry.dispose(),[geometry]);
 return <mesh geometry={geometry}><meshStandardMaterial color="#77bba6" roughness={.35} metalness={.1}/></mesh>;
}
function AppStack({running,reduced}:Pick<Props,'running'|'reduced'>){
 const packets=useRef<THREE.Mesh[]>([]);const time=useRef(0);
 const routes=useMemo(()=>[
  new THREE.CatmullRomCurve3([new THREE.Vector3(-.7,.5,.04),new THREE.Vector3(-.54,.32,.08),new THREE.Vector3(-.28,.34,.08),new THREE.Vector3(-.08,.58,-.13)]),
  new THREE.CatmullRomCurve3([new THREE.Vector3(.16,.44,-.13),new THREE.Vector3(.35,.26,.04),new THREE.Vector3(.6,.28,.19),new THREE.Vector3(.73,.52,.23)]),
  new THREE.CatmullRomCurve3([new THREE.Vector3(-.2,.21,.2),new THREE.Vector3(-.08,.12,.43),new THREE.Vector3(.34,.12,.48),new THREE.Vector3(.73,.3,.25)])
 ],[]);
 const filament=useMemo(()=>new THREE.CatmullRomCurve3([new THREE.Vector3(-.05,-.06,0),new THREE.Vector3(-.065,.035,0),new THREE.Vector3(0,.075,0),new THREE.Vector3(.065,.035,0),new THREE.Vector3(.05,-.06,0)]),[]);
 const filamentGeometry=useMemo(()=>new THREE.TubeGeometry(filament,20,.009,6,false),[filament]);
 useEffect(()=>()=>filamentGeometry.dispose(),[filamentGeometry]);
 useFrame((_,dt)=>{if(!running||reduced)return;time.current+=Math.min(dt,.05);packets.current.forEach((packet,i)=>routes[i].getPoint((time.current*.16+i*.31)%1,packet.position));});
 return <group>
 {/* Idea: a glass bulb, with a real filament and a drafted product blueprint. */}
 <group position={[-.7,.77,.04]}>
  <mesh><sphereGeometry args={[.17,32,24]}/><meshPhysicalMaterial color="#c9edda" roughness={.12} transmission={.78} thickness={.18} ior={1.45} clearcoat={1}/></mesh>
  <mesh geometry={filamentGeometry}><meshStandardMaterial color={ORANGE} emissive={ORANGE} emissiveIntensity={.35}/></mesh>
  <mesh position={[0,-.17,0]}><cylinderGeometry args={[.07,.055,.11,24]}/><Satin color={BLUE}/></mesh>
  {[0,1,2].map(i=><mesh key={i} position={[0,-.13-i*.025,0]} rotation={[Math.PI/2,0,0]}><torusGeometry args={[.067,.007,6,24]}/><meshStandardMaterial color="#a9bad1" metalness={.65} roughness={.3}/></mesh>)}
 </group>
 <group position={[-.66,.23,.2]} rotation={[-Math.PI/2,0,-.12]}>
  <Solid size={[.43,.36,.035]} color="#e8f1ff"/>
  <Solid position={[0,.1,.024]} size={[.28,.025,.012]} color={BLUE}/>
  {[-1,1].map(i=><group key={i}><Solid position={[i*.11,-.025,.027]} size={[.09,.07,.012]} color={i===1?GREEN:BLUE}/><Solid position={[i*.11,-.105,.027]} size={[.09,.018,.012]} color="#93a7cb"/></group>)}
  <Solid position={[0,-.025,.025]} size={[.12,.009,.01]} color="#8ba4c6"/>
 </group>
 {/* Engineering: visible service layers support a finished digital product. */}
 {[0,1,2].map(i=><group key={i} position={[-.15,.08+i*.1,-.05]}>
  <Solid size={[.78,.075,.55]} color={i===0?BLUE:i===1?'#c4d7ed':'#edf5ff'}/>
  {[0,1,2].map(j=><mesh key={j} position={[-.27+j*.075,0,.284]}><sphereGeometry args={[.012,12,8]}/><meshBasicMaterial color={j===0?GREEN:'#91a9cf'}/></mesh>)}
 </group>)}
 <group position={[-.07,.77,-.2]} rotation={[0,-.08,0]}>
  <Solid size={[.98,.76,.085]} color={BLUE}/><Solid position={[0,0,.05]} size={[.91,.69,.025]} color="#f3f8ff"/>
  <Solid position={[0,.255,.071]} size={[.84,.13,.018]} color={BLUE}/>
  <Solid position={[-.29,.255,.085]} size={[.14,.035,.009]} color="#eff8ff"/>
  {[-1,0,1].map(i=><group key={i} position={[i*.25,.055,.073]}><Solid size={[.21,.19,.016]} color={i===0?'#e0f2e8':'#e3ebf8'}/><Solid position={[0,.025,.014]} size={[.085,.055,.012]} color={i===0?GREEN:BLUE}/><Solid position={[0,-.045,.014]} size={[.12,.017,.01]} color="#a3b8d4"/></group>)}
  <Solid position={[0,-.17,.072]} size={[.72,.12,.014]} color="#e4f1ed"/>
  <Solid position={[-.1,-.16,.085]} size={[.42,.022,.01]} color={GREEN}/>
  <mesh position={[.285,-.17,.09]}><circleGeometry args={[.028,20]}/><meshBasicMaterial color={GREEN}/></mesh>
 </group>
 {/* Launch: a companion mobile app uses the same connected product services. */}
 <group position={[.73,.55,.25]} rotation={[0,-.18,-.06]}>
  <Solid size={[.33,.66,.065]} color={BLUE}/><Solid position={[0,0,.039]} size={[.28,.59,.018]} color="#f4f9ff"/>
  <Solid position={[0,.247,.055]} size={[.1,.022,.012]} color={BLUE}/>
  <Solid position={[0,.105,.055]} size={[.21,.17,.012]} color="#d3eadf"/>
  <Solid position={[0,.105,.067]} size={[.08,.08,.012]} color={GREEN}/>
  {[0,1,2].map(i=><Solid key={i} position={[0,-.04-i*.06,.057]} size={[.2-i*.025,.025,.012]} color={i===0?BLUE:'#b5c8e2'}/>)}
  <Solid position={[0,-.235,.055]} size={[.19,.045,.015]} color={GREEN}/>
 </group>
 {routes.map((curve,i)=><group key={i}><ProductRoute curve={curve}/><mesh ref={mesh=>{if(mesh)packets.current[i]=mesh;}} position={curve.getPoint(i*.31)}><sphereGeometry args={[.018,12,8]}/><meshBasicMaterial color={GREEN}/></mesh></group>)}
 </group>;
}function ProductModule({index,active,running,reduced}:{index:number;active:boolean;running:boolean;reduced:boolean}) {
 return <group position={[0,.09,0]}>{index===0?<AIEngine running={running} reduced={reduced} active={active}/>:index===1?<TradingEngine running={running} reduced={reduced}/>:index===2?<Blockchain active={active} reduced={reduced}/>:<AppStack running={running} reduced={reduced}/>}</group>;
}

function InfinityConnector() {
 const curve = useMemo(() => new THREE.CatmullRomCurve3(
  Array.from({length:72}, (_, index) => {
   const t = index / 72 * Math.PI * 2;
   return new THREE.Vector3(.43 * Math.sin(t), .24 * Math.sin(2 * t), .06 * Math.cos(t));
  }), true
 ), []);
 return <mesh position={[-.08,-.69,.06]} rotation={[-.94,0,-.08]}>
  <tubeGeometry args={[curve,96,.035,10,true]}/>
  <Satin color={BLUE}/>
 </mesh>;
}

function Architecture({active,reduced,running}:Props){
 const accentLight=useRef<THREE.PointLight>(null);const root=useRef<THREE.Group>(null);const modules=useRef<THREE.Group[]>([]);const routes=useRef<THREE.LineSegments>(null);const packets=useRef<THREE.InstancedMesh>(null);
 const {camera,pointer,invalidate,size}=useThree();const time=useRef(0);const dummy=useMemo(()=>new THREE.Object3D(),[]);const scroll=useRef({amount:0});const timeline=useRef<gsap.core.Timeline|null>(null);
 const routePoints=useMemo(()=>Array.from({length:4},()=>[new THREE.Vector3(),new THREE.Vector3(),CENTER,UPLINK]),[]);const mutedRoute=useMemo(()=>new THREE.Color("#b8c8df"),[]);const activeRoute=useMemo(()=>new THREE.Color(GREEN),[]);
 const preferredZoom=useRef(1.3);const frameBounds=useMemo(()=>new THREE.Box3(),[]);const frameCorner=useMemo(()=>new THREE.Vector3(),[]);
 const positions=useMemo(()=>new Float32Array(4*3*6),[]);const lineColors=useMemo(()=>new Float32Array(4*3*6),[]);
 useEffect(()=>{preferredZoom.current=size.width>500?Math.min(2.52,2.52*(size.width/size.height)/1.35):1.77;camera.zoom=preferredZoom.current;camera.updateProjectionMatrix();invalidate();},[camera,size.width,size.height,invalidate]);
 useEffect(()=>{camera.lookAt(0,-.5,0);gsap.registerPlugin(ScrollTrigger);const tween=gsap.to(scroll.current,{amount:1,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});return()=>{tween.scrollTrigger?.kill();tween.kill();};},[camera]);
 useEffect(()=>{
 const overview=active<0;
 const tl=gsap.timeline({onUpdate:()=>{camera.lookAt(0,-.5,0);invalidate();}});timeline.current=tl;const view=overview?[5,6.7,11]:[[7,5.8,10],[6.5,5.6,10.4],[7.7,6.3,9.5],[6.7,5.8,10.2]][active];tl.to(camera.position,{x:view[0],y:view[1],z:view[2],duration:reduced?0:1.5,ease:"power2.inOut"},0);
 if(accentLight.current){tl.to(accentLight.current,{intensity:overview?8:[7,5,9,6][active],duration:reduced?0:1.3},0);tl.to(accentLight.current.position,{x:overview?0:[0,2,-2,1][active],z:overview?-2:[-3,-1,-2,-3][active],duration:reduced?0:1.3},0);}
 modules.current.forEach((module,i)=>{
 const focused=i===active;const slot=overview?OVERVIEW_SLOTS[i]:SLOTS[(i-active+4)%4];const scale=overview?1.58:focused?3.9:.36;
 if(!focused)tl.to(module.scale,{x:scale,y:scale,z:scale,duration:reduced?0:overview?1.05:.55,ease:'power2.inOut'},0);
 tl.to(module.position,{x:slot[0],y:slot[1]+(focused?.1:0),z:slot[2],duration:reduced?0:1.25,ease:'power2.inOut'},reduced?0:.12);
 if(focused)tl.to(module.scale,{x:scale,y:scale,z:scale,duration:reduced?0:1.05,ease:'power3.out'},reduced?0:.28);
 tl.to(module.rotation,{x:0,y:0,z:0,duration:reduced?0:.6,ease:'power2.out'},0);
 module.traverse(object=>{if(!(object instanceof THREE.Mesh)||!(object.material instanceof THREE.MeshPhysicalMaterial))return;tl.to(object.material,{envMapIntensity:focused?.95:.55,roughness:focused?.17:.28,duration:reduced?0:.9,ease:'power2.inOut'},0);});
 }); return()=>{tl.kill();modules.current.forEach(module=>gsap.killTweensOf(module.rotation));};},[active,reduced,invalidate,camera]);
 useEffect(()=>{timeline.current?.paused(!running);},[running]);
 useFrame((_,dt)=>{
 if(running&&!reduced)time.current+=Math.min(dt,.05);const t=time.current;
 if(root.current){root.current.rotation.y=THREE.MathUtils.damp(root.current.rotation.y,reduced?0:pointer.x*.075,3,dt);root.current.rotation.x=THREE.MathUtils.damp(root.current.rotation.x,reduced?0:-pointer.y*.035,3,dt);root.current.position.y=-.34-scroll.current.amount*.45;}
 const perModule=size.width<500?4:8;const count=perModule*4;if(root.current)root.current.updateMatrixWorld(true);
 // Fit the real animated bounds, including assembly lift and pointer parallax.
 camera.updateMatrixWorld();let fitZoom=preferredZoom.current;
 modules.current.forEach(module=>{
 frameBounds.setFromObject(module);
 for(let i=0;i<8;i++){
 frameCorner.set(i&1?frameBounds.max.x:frameBounds.min.x,i&2?frameBounds.max.y:frameBounds.min.y,i&4?frameBounds.max.z:frameBounds.min.z).project(camera);
 const fit=Math.min(.96/Math.max(Math.abs(frameCorner.x),.001),.94/Math.max(Math.abs(frameCorner.y),.001));
 fitZoom=Math.min(fitZoom,camera.zoom*fit);
 }
 });
 const safeZoom=Math.max(.35,fitZoom);
 camera.zoom=safeZoom<camera.zoom||reduced?safeZoom:THREE.MathUtils.damp(camera.zoom,safeZoom,3,dt);
 camera.updateProjectionMatrix();
 modules.current.forEach((m,i)=>{const route=routePoints[i];route[0].set(m.position.x,-.76,m.position.z);route[1].set(m.position.x,-.76,0); for(let j=0;j<3;j++){const a=route[j],b=route[j+1];const offset=(i*3+j)*6;positions[offset]=a.x;positions[offset+1]=a.y;positions[offset+2]=a.z;positions[offset+3]=b.x;positions[offset+4]=b.y;positions[offset+5]=b.z;const color=i===active||active<0?activeRoute:mutedRoute;for(let k=0;k<2;k++){lineColors[offset+k*3]=color.r;lineColors[offset+k*3+1]=color.g;lineColors[offset+k*3+2]=color.b;}}
 if(packets.current){for(let j=0;j<perModule;j++){const id=i*perModule+j;const u=reduced?.5:(t*.2+j/perModule)%1;const u2=u*3;const segment=Math.min(2,Math.floor(u2));dummy.position.lerpVectors(route[segment],route[segment+1],u2-segment);dummy.position.y+=.022;dummy.scale.setScalar(i===active?.035:.023);dummy.updateMatrix();packets.current.setMatrixAt(id,dummy.matrix);}}
 });
 if(routes.current){routes.current.geometry.attributes.position.needsUpdate=true;routes.current.geometry.attributes.color.needsUpdate=true;}
 if(packets.current){packets.current.count=count;packets.current.instanceMatrix.needsUpdate=true;}
 });
 return <><ambientLight intensity={.8}/><directionalLight position={[4,8,5]} intensity={2.6}/><directionalLight position={[-5,4,1]} intensity={1.2} color="#d8e4ff"/><pointLight ref={accentLight} position={[0,3,-3]} color="#d0f0dc" intensity={7}/>
 <Environment resolution={128} frames={1}><Lightformer form="rect" intensity={3} position={[0,5,0]} rotation={[Math.PI/2,0,0]} scale={[8,8,1]}/><Lightformer form="rect" intensity={2} position={[-5,2,2]} rotation={[0,Math.PI/2,0]} scale={[4,6,1]}/><Lightformer form="rect" intensity={1.5} position={[4,3,-3]} rotation={[0,-Math.PI/3,0]} scale={[3,5,1]}/></Environment><group ref={root}>
 <InfinityConnector/><lineSegments ref={routes} frustumCulled={false}><bufferGeometry><bufferAttribute attach="attributes-position" args={[positions,3]}/><bufferAttribute attach="attributes-color" args={[lineColors,3]}/></bufferGeometry><lineBasicMaterial vertexColors transparent opacity={.3}/></lineSegments>
 <instancedMesh ref={packets} args={[undefined,undefined,32]} frustumCulled={false}><sphereGeometry args={[1,8,8]}/><meshBasicMaterial color={GREEN}/></instancedMesh>
 
 {TITLES.map((_,i)=><group key={i} ref={g=>{if(g)modules.current[i]=g;}} position={INITIAL[i]} onPointerOver={event=>{if(i!==active||reduced)return;event.stopPropagation();gsap.to(event.eventObject.rotation,{x:-.025,y:.055,duration:.55,ease:"power2.out",overwrite:true,onUpdate:invalidate});}} onPointerOut={event=>{if(i!==active||reduced)return;gsap.to(event.eventObject.rotation,{x:0,y:0,duration:.65,ease:"power2.out",overwrite:true,onUpdate:invalidate});}}><ProductModule index={i} active={active===i} running={running} reduced={reduced}/></group>)}


 </group></>;
}
class CanvasBoundary extends Component<{children:ReactNode},{failed:boolean}>{state={failed:false};static getDerivedStateFromError(){return{failed:true};}render(){return this.state.failed?<div className="fallback"><span>∞</span><p>One technology partner. From product strategy to continuous evolution.</p></div>:this.props.children;}}
function Experience(props:Props){const [supported,setSupported]=useState<boolean|null>(null);const [compact,setCompact]=useState(false);
 useEffect(()=>{const query=matchMedia('(max-width: 640px)');const change=()=>setCompact(query.matches);change();query.addEventListener('change',change);try{const c=document.createElement('canvas');setSupported(!!(c.getContext('webgl2')||c.getContext('webgl')));}catch{setSupported(false);}return()=>query.removeEventListener('change',change);},[]);
 if(supported===false)return <div className="fallback"><span>∞</span><p>One technology partner. AI, Trading Infrastructure, blockchain and complete digital products. Enable WebGL to explore the live architecture.</p></div>;
 if(supported===null)return <div className="loading-scene">Assembling the ecosystem<span/></div>;
 return <CanvasBoundary><div className="architecture-render"><Canvas onCreated={({gl})=>gl.setClearColor("#ffffff",0)} dpr={compact?1:[1,1.5]} frameloop={props.running&&!props.reduced?'always':'demand'} camera={CAMERA} gl={{antialias:true,alpha:true,powerPreference:'high-performance'}}><Architecture {...props}/></Canvas></div></CanvasBoundary>;
}
export default memo(Experience);






























