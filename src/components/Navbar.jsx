import React from 'react'
import styled from "styled-components";

const  Section = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    background-color: darkslategrey;
    justify-content: center;   
    align-items: center;
    z-index: 1000;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }

`
const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    
    @media only screen and (max-width: 768px) {
        padding: 10px 20px;
    }
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    
`;
const Logo = styled.img`
  height: 50px;
`
const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    @media only screen and (max-width: 768px) {
        display: none;
    }
`
const ListItem = styled.li`
    cursor: pointer;
`
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: rgba(79, 49, 214, 0.63);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    {/*)<Logo src ="./img/logo.png"/>*/}
                    <List>
                      <ListItem>Home</ListItem>
                      <ListItem>Works</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src={"./search.png"}/>
                    <Button>Contact</Button>
                </Icons>
            </Container>
        </Section>
    )
}
export default Navbar
