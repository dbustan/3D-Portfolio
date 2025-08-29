import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const  Section = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    background-color: darkslategrey;
    justify-content: center;   
    align-items: center;
    z-index: 1000;
    color: white;

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
    @media only screen and (max-width: 768px) {
        padding: 20px;
    }
`

const Navbar = () => {
    const navigate = useNavigate();
    const handleContactClick = () => {
        navigate('/contact', { replace: true });
    };
    return (
        <Section>
            <Container>
                <Links>
                    {/*)<Logo src ="./img/logo.png"/>*/}
                    <List>
                      <ListItem>
                          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                          Home
                          </Link>
                      </ListItem>
                      <ListItem>
                          <Link to="/projects/" style={{ textDecoration: 'none', color: 'inherit' }}>
                              Works
                          </Link>
                      </ListItem>

                    </List>
                </Links>
                <Icons>

                    <Button onClick={handleContactClick}>Contact</Button>
                </Icons>
            </Container>
        </Section>
    )
}
export default Navbar
