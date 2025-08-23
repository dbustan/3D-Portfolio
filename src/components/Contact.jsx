import React from 'react'
import styled from "styled-components";

const  Section = styled.div`
    height: 100vh;
    
    scroll-snap-align: center;
`
const  Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`
const  Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const  Title = styled.h1`
    font-weight: 200;
`

const  Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`
const  Input = styled.input`
    padding: 20px;
    background-color: lightgray;
    border: none;
    border-radius: 5px;
`

const  TextArea = styled.textarea`
    padding: 20px;
    border: none;
    border-radius: 5px;
    background-color: lightgray;
`

const  Button = styled.button`
    background-color: #7437e6;
    color: white;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    padding: 20px
`
const Contact = () => {
    return (
        <Section>
            <Container>
                <Center>
                    <Form>
                        <Title>Reach Me</Title>
                        <Input placeholder = "Name"/>
                        <Input placeholder = "Email"/>
                        <TextArea placeholder = "Write your message" rows={10}/>
                        <Button>Send</Button>
                    </Form>
                </Center>
            </Container>
        </Section>
    )
}
export default Contact
