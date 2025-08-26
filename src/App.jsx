import Hero from "./components/Hero.jsx";
import Who from "./components/Who.jsx";
import Works from "./components/Works.jsx";
import Contact from "./components/Contact.jsx";
import Test from "./components/Test.jsx";
import styled from "styled-components";

const  Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: thin;
    color: white;
    background-color: #3797ac;

    &::-webkit-scrollbar {
        display: none;
    }
`

function App() {

  return (
    <Container>
        <Hero/>
        <Who/>
        <Works/>
        <Contact/>
        {/*<Test/>*/}
    </Container>
  )
}

export default App
