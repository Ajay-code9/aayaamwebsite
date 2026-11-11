'use client';

import {Canvas, useFrame} from '@react-three/fiber';
import {RoundedBox, Line} from '@react-three/drei';
import {Component, useRef, type ReactNode} from 'react';
import type {Group} from 'three';

type Point = [number, number, number];
type Props = {service:number; step:number; reduced:boolean};
const blue = '#365db8';
const mint = '#55ba93';
const light = '#edf6ff';

function Tile({at,size,color=light}:{at:Point;size:Point;color?:string}) {
  return <RoundedBox args={size} position={at} radius={Math.min(...size)*.23} smoothness={3}>
    <meshStandardMaterial color={color} roughness={.24} metalness={.22}/>
  </RoundedBox>;
}

function MovingTile({at,size,reduced}:{at:Point;size:Point;reduced:boolean}) {
  const piece=useRef<Group>(null);
  const initial=useRef(at);
  useFrame((_,delta)=>{
    const group=piece.current;
    if (!group || reduced) return;
    const ease=1-Math.exp(-delta*7);
    group.position.x+=(at[0]-group.position.x)*ease;
    group.position.y+=(at[1]-group.position.y)*ease;
    group.position.z+=(at[2]-group.position.z)*ease;
  });
  return <group ref={piece} position={reduced?at:initial.current}>
    <Tile at={[0,0,0]} size={size} color={mint}/>
  </group>;
}
function Screen({at,small=false,trading=false}:{at:Point;small?:boolean;trading?:boolean}) {
  return <group position={at} scale={small?.58:1}>
    <Tile at={[0,0,0]} size={[1.75,1.19,.14]} color={blue}/>
    <Tile at={[0,0,.078]} size={[1.58,1.01,.046]}/>
    <Tile at={[0,.32,.115]} size={[1.36,.15,.045]} color={mint}/>
    {[0,1,2].map(column => {
      const height=trading ? [.22,.31,.47][column] : .23;
      return <Tile key={column} at={[(column-1)*.4,-.33+height/2,.119]} size={[.27,height,.05]} color={column===1?mint:'#a4c2ec'}/>;
    })}
  </group>;
}

function DemoModel({service,step,reduced}:Props) {
  const model=useRef<Group>(null);
  useFrame(({clock,pointer},delta) => {
    const group=model.current;
    if (!group) return;
    const easing=1-Math.exp(-delta*4);
    group.rotation.y+=(pointer.x*.14-group.rotation.y)*easing;
    group.position.y+=(Math.sin(clock.elapsedTime*1.4)*.055-group.position.y)*easing;
  });
  const active = step>0;
  const done = step>1;
  return <group ref={reduced?undefined:model}>
    <Tile at={[0,-.28,0]} size={[4.25,.14,2.55]} color="#b7cce8"/>
    <Tile at={[0,-.17,0]} size={[4.1,.13,2.42]} color="#e5f0fc"/>
    {service===0 && <>
      <Screen at={[0,.82,-.27]}/>
      {active && <Screen at={[1.35,.43,.25]} small/>}
      {done && <Tile at={[-1.26,.06,.5]} size={[.56,.27,.45]} color={mint}/>}
    </>}
    {service===1 && <>
      <Tile at={[-1.33,.25,.22]} size={[.62,.1,.72]} color={active?mint:light}/>
      <Tile at={[0,.55,0]} size={[.92,1.07,.68]} color={blue}/>
      <Tile at={[0,.6,.36]} size={[.54,.57,.08]} color={active?mint:'#b3c7ef'}/>
      {[-.24,0,.24].map(y=><Tile key={y} at={[.53,.57+y,0]} size={[.2,.07,.38]}/>)}
      <Tile at={[1.33,.3,.23]} size={[.66,.7,.13]} color={done?mint:light}/>
      <Line points={[[-1.33,.33,.22],[0,.43,.69],[1.33,.34,.23]]} color={mint} lineWidth={1.5}/>
      <MovingTile at={done?[1.13,.36,.3]:active?[0,.43,.69]:[-1.13,.35,.29]} size={[.19,.19,.19]} reduced={reduced}/>
    </>}
    {service===2 && <>
      <Tile at={[-1.32,.34,.12]} size={[.73,.59,.38]} color={blue}/>
      <Tile at={[1.32,.34,.12]} size={[.73,.59,.38]} color={done?mint:blue}/>
      <Line points={[[-1,.35,.12],[0,.74,.12],[1,.35,.12]]} color={mint} lineWidth={2}/>
      <MovingTile at={[done?.84:active?0:-.84,active&&!done?.73:.39,.12]} size={[.34,.34,.34]} reduced={reduced}/>
    </>}
    {service===3 && <>
      <Screen at={[.4,.79,-.27]} trading/>
      <Tile at={[-1.26,.31,.29]} size={[.61,.73,.16]} color={blue}/>
      <MovingTile at={[done?1.38:active?.1:-1.18,.13,.66]} size={[.36,.23,.39]} reduced={reduced}/>
      <Line points={[[-1.35,.04,.67],[1.44,.04,.67]]} color={blue} lineWidth={1.6}/>
    </>}
    {service===4 && <>
      {[-.98,.98].map((x,index)=><group key={x} position={[x,0,-.23]}>
        {[.16,.41,.66].map(y=><group key={y}>
          <Tile at={[0,y,0]} size={[.96,.18,.64]} color={index===0||done?blue:'#a3bddc'}/>
          <Tile at={[.25,y,.327]} size={[.12,.045,.025]} color={index===0||done?mint:light}/>
        </group>)}
      </group>)}
      <Line points={[[-.98,.12,.34],[0,.12,.79],[.98,.12,.34]]} color={mint} lineWidth={1.7}/>
      {active && <MovingTile at={[done?.65:0,.12,.78]} size={[.27,.27,.27]} reduced={reduced}/>}
    </>}
    {service===5 && <>
      <Tile at={[-1.08,.04,.38]} size={[1.24,.11,.84]} color={blue}/>
      {[0,1,2].map(row=><Tile key={row} at={[-1.08,.109,.14+row*.22]} size={[.81-row*.15,.035,.06]} color={light}/>)}
      {active && <Screen at={[.78,.78,-.2]}/>}
      {done && <Tile at={[1.36,.11,.69]} size={[.52,.24,.42]} color={mint}/>}
    </>}
  </group>;
}

class WorkbenchBoundary extends Component<{children:ReactNode;fallback:ReactNode},{failed:boolean}> {
  state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  render(){return this.state.failed ? this.props.fallback : this.props.children;}
}

export default function ServiceWorkbenchScene({fallback,...props}:Props & {fallback:ReactNode}) {
  return <WorkbenchBoundary fallback={fallback}>
    <Canvas fallback={fallback} camera={{position:[4.7,3.4,6.4],fov:29}} dpr={[1,1.4]} frameloop={props.reduced?'demand':'always'}
      gl={{alpha:true,antialias:true}}>
      <ambientLight intensity={1.45}/>
      <directionalLight position={[3,7,5]} intensity={2.5}/>
      <directionalLight position={[-3,2,-3]} intensity={1.2} color="#8ce4d0"/>
      <DemoModel {...props}/>
    </Canvas>
  </WorkbenchBoundary>;
}


