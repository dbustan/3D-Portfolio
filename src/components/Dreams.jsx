import React from 'react'
import styled from "styled-components";
import Navbar from "./Navbar";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import * as THREE from "three";
import StormTurret from "./StormTurret.jsx";
import {Canvas} from "@react-three/fiber";
import { useNavigate } from "react-router-dom";

const  Section = styled.div`
 height: 100vh;
 //scroll-snap-align: center;
 display: flex;
 flex-direction: column;
 align-items: center;
    @media only screen and (max-width: 768px) {
        height: 100vh;
    }
`

const  Container = styled.div`
 height: 100vh;
 //scroll-snap-align: center;
 width: 1400px;
 display: flex;
 justify-content: space-between;

    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
const  Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
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
    @media only screen and (max-width: 768px) {
        text-align: center;
        font-size: 20px;
    }
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
`

const  Right = styled.div`
   flex: 3;
   position: relative;
    @media only screen and (max-width: 768px) {
        flex: 1;
        display: none;
    }
`
// const  Img = styled.img`
//    width: 800px;
//    height: 600px;
//    object-fit: contain;
//    position: absolute;
//    top: 0;
//    bottom: 0;
//    left: 0;
//    right: 0;
//    margin: auto;
//    animation: animate 2s infinite ease alternate;
//
//    @keyframes animate {
//
//    }
// `
const Dreams = () => {
    const navigate = useNavigate();
    return (
        <Section>
            {/*<Navbar />*/}
            <Container>
                <Left>
                    <Title>Follow Your Dreams.</Title>
                    <WhatWeDo>
                        <Line src="./line.png"/>
                        <Subtitle>What I Do</Subtitle>
                    </WhatWeDo>
                    <Desc>I enjoy creating unique and interactive experiences.</Desc>
                    <Button onClick={() => navigate('/contact')}>Learn more</Button>
                </Left>
                <Right>
                    <Canvas camera={{fov:50, position: [30,5, 5]}}>
                        <OrbitControls enableZoom={false} autoRotate={true} mouseButtons={{
                            LEFT: THREE.MOUSE.ROTATE,
                            RIGHT: null,
                        }}/>

                        <ambientLight intensity = {0.5}/>
                        <directionalLight pos={[3,2,1]}/>
                        <StormTurret pos={[10,2,1]}>
                            <meshToonMaterial color="lightblue"/>
                            <PerspectiveCamera makeDefault position ={[0, 0, 5]}/>
                        </StormTurret>
                    </Canvas>
                </Right>
            </Container>
        </Section>
    )
}
export default Dreams
