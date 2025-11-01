// 14 and 16 =>  PrestationControlls

import { PresentationControls } from '@react-three/drei';
import { useRef } from 'react'
import MacbookModel16 from '../models/Macbook-16';
import MacbookModel14 from '../models/Macbook-14';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ANIMATION_DURATION = 1;
const OFFEST_DISTANCE = 5;

const fadeMeshes = (group,opacity)=>{
    if(!group) return;
     group.traverse((child)=>{
        if(child.isMesh){
             child.material.transparent = true;
             gsap.to(child.material, {opacity, duration:ANIMATION_DURATION})
        }
     })
};

// moving element used by move group
const moveGroup = (group,x)=>{
    if(!group) return;

    gsap.to(group.position, {x, duration:ANIMATION_DURATION})
}

const ModelSwitcher = ({scale, isMobile}) => {
    const smallMackbookRef = useRef();
    const largeMackbookRef = useRef();
    const showLargeMacbook = scale ===0.08 || scale ===0.05;
    // use gspa hook
    useGSAP(()=>{
        if(showLargeMacbook){
        moveGroup(smallMackbookRef.current, -OFFEST_DISTANCE);
        moveGroup(largeMackbookRef.current, 0);
        // fade animation
        fadeMeshes(smallMackbookRef.current,0);
        fadeMeshes(largeMackbookRef.current,1)
        } else{
        moveGroup(smallMackbookRef.current, 0);
        moveGroup(largeMackbookRef.current, OFFEST_DISTANCE);
        // fade animation
        fadeMeshes(smallMackbookRef.current,1);
        fadeMeshes(largeMackbookRef.current,0)
        }

},[scale])
    // controll object
    const controllConfig = {
        snap:true,
        speed: 1,
        zoom:1,
        // polar : [-Math.PI,Math.PI],
        azimuth: [-Infinity,Infinity],
        config: {mass:1,tension:0,friction:26},
    };
  return (
    <>
    {/* mackbook 16 */}
    <PresentationControls {...controllConfig}>
        <group ref={largeMackbookRef}>
            <MacbookModel16 scale= {isMobile ? 0.05 : 0.08}/>
        </group>
    </PresentationControls>

    {/* mackbook 14 */}
    <PresentationControls {...controllConfig}>
        <group ref={smallMackbookRef}>
            <MacbookModel14 scale= {isMobile ? 0.03 : 0.06}/>
        </group>
    </PresentationControls>
    </>
  )
}

export default ModelSwitcher
