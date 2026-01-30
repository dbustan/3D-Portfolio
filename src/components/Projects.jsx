import React from 'react'
import styled from "styled-components";


const Section = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column; /* Stacks sections vertically */
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding: 20px;
    padding-top: 70px;
    background-color: #3797ac;
    color: white;
    overflow: auto;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-around; /* Distributes space between sections */
 /* Aligns sections to the top */
    gap: 20px;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column; /* Stacks sections on mobile */
        align-items: center;
    }
`;

const CategorySection = styled.div`
    flex: 1; /* Allows each section to take up an equal amount of space */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

const Title = styled.h2`
    font-size: 2rem;
    color: white;
`;

const ProjectList = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
    width: 90%;
    align-items: center;
    justify-content: center; 
    flex-wrap: wrap; 
`;

const ProjectItem = styled.div`
    width: 150px;
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    cursor: pointer;
    text-align: center; /* Center the text and image */
    display: flex;
    flex-direction: column; /* Stack image and name vertically */
    align-items: center;
    gap: 10px; /* Space between the image and name */
`;
const ProjectImage = styled.img`
    width: 100px; 
    height: 100px; 
    object-fit: cover; 
    border-radius: 5px;
`;
const ProjectName = styled.p`
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
`;
const ProjectLink = styled.a`
    // Copy all the styles from ProjectItem here
    width: 150px;
    padding: 15px;

    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
    // Add link-specific styles
    text-decoration: none; // Removes the underline
    color: inherit; // Inherits text color
`;

const Projects = () => {
    return (
        <Section>
            <Container>
                <CategorySection>
                    <Title>Games</Title>
                    <ProjectList>
                        <ProjectLink  href= "https://store.steampowered.com/app/2928200/Permanence_Break/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProjectItem>
                            <ProjectImage src="/3D-Portfolio/permanenceicon.png" alt="Game 1" />
                            <ProjectName>Permanence Break</ProjectName>
                        </ProjectItem>
                        </ProjectLink>
                        <ProjectLink  href= "https://shadowhandstudios.itch.io/storm-base" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProjectItem>
                            <ProjectImage src="/3D-Portfolio/sb.png" alt="Game 2" />
                            <ProjectName>StormBase</ProjectName>
                        </ProjectItem>
                        </ProjectLink>
                        <ProjectLink  href= "https://coolnushi.itch.io/car-jam" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProjectItem>
                            <ProjectImage src="/3D-Portfolio/bentley.png" alt="Game 3" />
                            <ProjectName>Car Jam</ProjectName>
                        </ProjectItem>
                        </ProjectLink>
                    </ProjectList>
                </CategorySection>

                <CategorySection>
                    <Title>Music</Title>
                    <ProjectList>
                        {/* Example entry for a song */}
                        <ProjectLink  href= "https://www.youtube.com/watch?v=a_KbeeSpZGU&pp=ygUPYWxvbmUgY29vbG51c2hp" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProjectItem>

                            <ProjectImage src="/3D-Portfolio/alone.png" alt="Song 1" />
                            <ProjectName>Alone</ProjectName>
                        </ProjectItem>
                        </ProjectLink>
                        <ProjectLink  href= "https://www.youtube.com/watch?v=j1HqWT4MG08&pp=ygUWbGV2ZWwgIHN0YXJ0IGNvb2xudXNoaQ%3D%3D" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProjectItem>
                            <ProjectImage src="/3D-Portfolio/levelstart.png" alt="Song 2" />
                            <ProjectName>Level Start</ProjectName>
                        </ProjectItem>
                        </ProjectLink>
                        <ProjectLink  href= "https://www.youtube.com/watch?v=ny3h5odL6FI&pp=ygUPd2hvYSAgY29vbG51c2hp" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProjectItem>
                            <ProjectImage src="/3D-Portfolio/whoa.png" alt="Song 2" />
                            <ProjectName>Whoa</ProjectName>
                        </ProjectItem>
                        </ProjectLink>
                        <ProjectLink  href= "https://shadowhandstudios.itch.io/storm-base" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProjectItem>
                            <ProjectImage src="/3D-Portfolio/sb.png" />
                            <ProjectName>StormBase Soundtrack and Sounds</ProjectName>
                        </ProjectItem>
                        </ProjectLink>
                        <ProjectLink  href= "https://store.steampowered.com/app/2928200/Permanence_Break/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ProjectItem>
                            <ProjectImage src="/3D-Portfolio/permanenceicon.png" alt="Song 2" />
                            <ProjectName>Permanence Break Soundtrack and Sounds</ProjectName>
                        </ProjectItem>
                        </ProjectLink>
                        
                    </ProjectList>
                </CategorySection>

                {/*<CategorySection>*/}
                {/*    <Title>Visuals</Title>*/}
                {/*    <ProjectList>*/}
                {/*        /!* Example entry for a visual *!/*/}
                {/*        <ProjectItem>*/}
                {/*            /!*<ProjectImage src="/path/to/visual1.jpg" alt="Visual 1" />*!/*/}
                {/*            <ProjectName>Visual Art One</ProjectName>*/}
                {/*        </ProjectItem>*/}
                {/*        <ProjectItem>*/}
                {/*            /!*<ProjectImage src="/path/to/visual2.jpg" alt="Visual 2" />*!/*/}
                {/*            <ProjectName>Visual Art Two</ProjectName>*/}
                {/*        </ProjectItem>*/}
                {/*    </ProjectList>*/}
                {/*</CategorySection>*/}
            </Container>
        </Section>
    )
}
export default Projects
