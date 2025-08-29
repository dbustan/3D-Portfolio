import React, {useEffect, useRef} from 'react'
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import PermanenceCube from "./PermanenceCube.jsx";
import * as THREE from "three";
import Navbar from "./Navbar.jsx";




const  Section = styled.div`
 height: 100vh;
 //scroll-snap-align: center;
 display: flex;
 justify-content: center;
    @media only screen and (max-width: 768px) {
        height: 100vh; /* Keeps the section tall enough to hold both elements */
    }
`

const  Container = styled.div`
 height: 100vh;
 //scroll-snap-align: center;
 width: 1400px;
 display: flex;
 justify-content: space-between;
    @media only screen and (max-width: 768px) {
        height: 100vh; /* Revert to 100vh for proper scroll snapping */
        flex-direction: column; /* Stacks content vertically */
    }
`
const  Left = styled.div`
    flex: 1;
    @media only screen and (max-width: 768px) {
        width: 100%;
        height: 100vh;
        padding-top: 40px;
    }
`
const  Title = styled.h1`
    font-size: 74px;
    @media only screen and (max-width: 768px) {
        text-align: center;
        padding-top: 0px;
        font-size: 34px;
    }
`
const  Right = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 20px;
    @media only screen and (max-width: 768px) {
        height: 50vh;
        align-items: center; /* Centers text elements on mobile */
        text-align: center; /* Ensures text is centered */
        gap: 30px;
    }
`
const  WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const  Line = styled.img`
    height: 5px;
`
const  Subtitle = styled.h2`
    color: #4b79cf;
`
const  Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`
const  Button = styled.button`
    background-color: rgba(79, 49, 214, 0.63);
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
        width: 200px;
        font-size: 24px;
        Height: 120px;
    }
`



const Who = () => {
    const navigate = useNavigate();
    return (

        <Section>

            <Container>
                <Left>
                    <Canvas camera={{fov:25, position: [3,3, 3]}}>
                        <OrbitControls enableZoom={false} autoRotate={true} mouseButtons={{
                        LEFT: THREE.MOUSE.ROTATE,
                        RIGHT: null,
                        }}/>

                        <ambientLight intensity = {0.5}/>
                        <directionalLight pos={[3,2,1]}/>
                        <PermanenceCube>
                            <meshToonMaterial color="lightblue"/>
                            <PerspectiveCamera makeDefault position ={[0, 0, 5]}/>
                        </PermanenceCube>
                    </Canvas>
                </Left>
                <Right>
                    <Title>What if you looked away?</Title>
                    <WhatWeDo>
                        <Line src="./line.png"/>
                        <Subtitle>Who I Am</Subtitle>
                    </WhatWeDo>
                    <Desc>A Game Developer and Musician with a passion to innovate.</Desc>
                    <Button onClick={() => navigate('/projects/')}>See My Works</Button>

                    {/*3D Model*/}
                    {/*<Img src= "/img/moon.png"/>*/}
                </Right>
            </Container>
        </Section>
    )
}
export default Who
