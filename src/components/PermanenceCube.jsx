import { useLoader } from '@react-three/fiber'
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import {MeshStandardMaterial, MeshPhongMaterial, MeshNormalMaterial, MeshToonMaterial, TextureLoader} from "three";
import React from 'react'

const PermanenceCube = () => {
    const fbx = useLoader(FBXLoader, './PermanenceCube.fbx');
    const texture = useLoader(TextureLoader, './HiddenCubeTextureSmooth.png');

    fbx.traverse((child) =>{
        if(child.isMesh) {
            child.material = new MeshStandardMaterial({map: texture}, {gradientMap: texture});
        }
    });
    return <primitive object={fbx} scale={0.007}/>;

}
export default PermanenceCube
