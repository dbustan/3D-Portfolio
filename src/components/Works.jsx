import React from 'react'
import styled from "styled-components";
import Navbar from "./Navbar.jsx";
import {Link} from "react-router-dom";

const data = [
    { name: "Game Development", path: "/game-development" },
    { name: "Music", path: "/music"},
    { name: "Visuals", path: "/visuals"}
];

const  Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    
`
const  Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        padding-top: 200px;
        width: 100%;
        flex-direction: column;
        align-items: center; /* Center the flex items horizontally */
        justify-content: center; /* Center the flex items vertically */
    }
`
const  Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    @media only screen and (max-width: 768px) {
        padding: 20px;
        //justify-content: center;
        
    }

`
const  List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media only screen and (max-width: 768px) {
        padding: 20px;
        //justify-content: center;
        align-items: center;
    }
`
const  ListItem = styled.li`
    font-size: 85px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    //-webkit-text-stroke: 1px white;
    position: relative;
    white-space: nowrap;
    @media only screen and (max-width: 768px) {
        font-size: 38px;
        color: white;
    }
 
    & a {
        color: white; /* This will set the initial color of the link text */
        text-decoration: none; /* Removes the underline from the link */
        position: relative;
    }

    & a::after {
        content: "${(props) => props.text}";
        position: absolute;
        top: 0;
        left: 0;
        color: rgba(113, 170, 227, 0.71);
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover {
        /* Apply the animation to the nested <a> tag's ::after pseudo-element */
        & a::after {
            animation: moveText 0.2s linear both;
            @keyframes moveText {
                to {
                    width: 100%;
                }
            }
        }
    }
`
const  Right = styled.div`
    flex: 1;
`


const Works = () => {
    return (
        <Section>

            <Container>
                <Left>
                    <List>
                        {data.map((item) => (
                            <ListItem key={item.name} text= {item.name}>
                                <Link to={item.path}>
                                {item.name}
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Left>
                <Right></Right>
            </Container>
        </Section>
    )
}
export default Works
