import {OrbitControls} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import PermanenceCube from "./PermanenceCube.jsx";
import React from 'react'
import styled from "styled-components";



const Container = styled.div`
height: 100vh;
width: 100%;
scroll-snap-align: center;    
`
const Test = () => {
    return (
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate={true}/>
                <ambientLight intensity = {0.5}/>
                <directionalLight pos={[3,2,1]}/>
                <PermanenceCube>
                    <meshToonMaterial color="lightblue"/>
                </PermanenceCube>
                {/*<mesh>*/}
                {/*    <boxGeometry args={[1,1,1]}/>*/}
                {/*    <meshToonMaterial color="lightblue"/>*/}
                {/*</mesh>*/}
            </Canvas>
        </Container>
    )
}
export default Test
