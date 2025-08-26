import React, {useEffect, useRef} from 'react'
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";

import PermanenceCube from "./PermanenceCube.jsx";
import * as THREE from "three";
import Navbar from "./Navbar.jsx";




const  Section = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 display: flex;
 justify-content: center;   
`

const  Container = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 width: 1400px;
 display: flex;
 justify-content: space-between;   
`
const  Left = styled.div`
    flex: 1;
    
`
const  Title = styled.h1`
    font-size: 74px;
`
const  Right = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 20px;
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
    background-color: #391df1;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`



const Who = () => {
    return (
        <Section>

            <Container>
                <Left>
                    <Canvas camera={{fov:25, position: [5,5, 5]}}>
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
                    <Desc>A Game Developer with a passion to innovate.</Desc>
                    <Button>See My Works</Button>

                    {/*3D Model*/}
                    {/*<Img src= "/img/moon.png"/>*/}
                </Right>
            </Container>
        </Section>
    )
}
export default Who
