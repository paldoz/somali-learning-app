import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.webp';
import { usePlay } from '../PlayProvider';
import { randomWord } from './Words';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
    min-height: 100%;
    width: 100%;
    height: 100vh;
    background: url(${props => props.img}) no-repeat center center fixed;
    background-size: cover;
    
`;

const Plyanftext = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: black;
`;

const Text = styled.div`
    width: 350px;
    text-align: center;
    padding: 20px;

`;

const Button = styled.button`
    background-color: black;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 5px;
    font-size: 1rem;
    letter-spacing: 1px;
    margin: 10 2px;
    box-shadow: 0 6px gray;
`;
const Select = styled.select`
  width: 100%;
  margin: 1rem 0;
  padding: 0.55em 0.7em;
  font-family: "Coming Soon", cursive;
  margin-top: 120px;

`;

function Home() {
    const {  setPlay,group ,setGroup,setAnswer,answer } = usePlay();
    
    const handleChange = (e) => { 
        const {value} = e.target;
        setGroup(value)
        setAnswer(randomWord(value))
        // setNWrong(0)
        // setGuessed(new Set())
    }


    const handleClick = () => {
        setPlay("Play");
    };
    const handlePreview = () => {
        setPlay("Play");
    };

    return (
        <HomeContainer img={background} >
            <Plyanftext>
            <form>
                    <Select name="group" id="group" value={group} onChange={handleChange}  >
                    <option value="SIYAASADA">SIYAASADA</option>
                <option value="RAASHIIN">RAASHIIN</option>
                <option value="CABITAAN">CABITAAN</option>
                <option value="QALABKAWAXBARASHADA">QALABKAWAXBARASHADA</option>
                <option value="DHARKA">DHARKA</option>
                    </Select>
                </form>
                <Text>Discover 'ICT Hangman': Master key ICT concepts through engaging gameplay.!</Text>
                <Button onClick={handleClick}>Play</Button>
              <Button onClick={handlePreview}>  <p > preview </p></Button>


            </Plyanftext>
        </HomeContainer>
    );
}

export default Home;
