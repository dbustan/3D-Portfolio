import React from 'react'
import styled from "styled-components";
import Navbar from "./Navbar";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import * as THREE from "three";
import StormTurret from "./StormTurret.jsx";
import {Canvas} from "@react-three/fiber";


const  Section = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 display: flex;
 flex-direction: column;
 align-items: center;
`

const  Container = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 width: 1400px;
 display: flex;
 justify-content: space-between;   
`
const  Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`
const  Title = styled.h1`
    font-size: 74px;
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
    background-color: #3a17d8;
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
const Hero = () => {
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
                    <Button>Learn more</Button>
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
export default Hero
