import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import MainTitle from "./components/MainTitle";
import Form from "./components/Form";
import ListField from "./components/ListField";
import {useState} from "react";

const MainContentBox = styled.div`
  min-height: 100vh;
  padding-bottom: 50px;
  width: 100%;
  height: 100%;
  background-color: #090930;
`
const ContainerBox = styled.div`
  width: 1000px;
  margin: 0 auto;
`

function App(props) {
    const [boolValue , setboolValue] = useState(false)
    console.log(boolValue)
    return (
        <MainContentBox>
            <ContainerBox>
                <MainTitle/>
                <Form valueBool={boolValue}/>
                <ListField value={boolValue} foo={setboolValue}/>
            </ContainerBox>
        </MainContentBox>
    );
}

export default App;
