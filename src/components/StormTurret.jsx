import React from 'react'
import { useLoader } from '@react-three/fiber'
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

const StormTurret = () => {
    const pyramid =  useLoader(FBXLoader, './basePyramid.fbx');
    const baseGem =  useLoader(FBXLoader, './baseGem.fbx');
    return (
        <group>
            <primitive object = {pyramid} scale={0.008}/>
            <primitive object = {baseGem} scale={0.009}/>
        </group>
    )
}
export default StormTurret
