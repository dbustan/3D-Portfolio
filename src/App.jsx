import Dreams from "./components/Dreams.jsx";
import Who from "./components/Who.jsx";

import Contact from "./components/Contact.jsx";
import styled from "styled-components";
import Navbar from "./components/Navbar.jsx";
import  {BrowserRouter as Router,  Routes,   Route } from "react-router-dom";
import Projects from "./components/Projects.jsx";


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
      <Router basename="/3D-Portfolio/">
          <Navbar />
          <Routes>
              {/* Route for the main page with all components */}
              <Route path="/" element={
                  <Container>
                      <Who/>
                      {/*<Dreams/>*/}
                  </Container>
              } />

              {/* Routes for the new pages */}
              <Route path="/projects/" element={<Projects />} />
              <Route path="/contact/" element={<Contact />} />
          </Routes>
      </Router>
  );
}

export default App;
