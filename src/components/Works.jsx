import React from 'react'
import styled from "styled-components";

const data = [
    "Game Development",
    "Web Development",
    "Music",
    "Visuals"
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
`
const  Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
`
const  List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
const  ListItem = styled.li`
    font-size: 85px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    //-webkit-text-stroke: 1px white;
    position: relative;
    white-space: nowrap;

    &::after {
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
        &::after {

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
                            <ListItem key={item} text= {item}> {item}</ListItem>
                        ))}
                    </List>
                </Left>
                <Right></Right>
            </Container>
        </Section>
    )
}
export default Works
