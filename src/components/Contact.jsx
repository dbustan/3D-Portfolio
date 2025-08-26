import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
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
    const ref = useRef()
    const [success,  setSuccess] = useState(false)

    const handleSend = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_2rwzp5a', 'template_zz3cznq', ref.current, {
                publicKey: '4tiStCg2z6drDLNd2',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSuccess(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setSuccess(false);
                },
            );
    };
    return (
        <Section>
            <Container>
                <Center>
                    <Form ref ={ref} onSubmit={handleSend}>
                        <Title>Reach Me</Title>
                        <Input placeholder = "Name" name="name"/>
                        <Input placeholder = "Email" name= "email"/>
                        <TextArea placeholder = "Write your message" name = "message" rows={10}/>
                        <Button>Send</Button>
                        {success && "Your message has been sent. Will respond soon!"}
                    </Form>
                </Center>
            </Container>
        </Section>
    )
}
export default Contact
