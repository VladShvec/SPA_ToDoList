import React, {useState} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

const FormArea = styled.div`
  padding-top: 50px;
  color: white;
  font-size: 30px;
  font-family: 'Shizuru', cursive;
`
const InputArea = styled.input`
  padding: 12px 0px;
  font-size: 20px;
  background-color: #2e4170;
  font-family: 'Shizuru', cursive;
  min-width: 63.4%;
  outline: none;
  color: white;
  border: none;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`
const Button = styled.button`
  padding: 12px;
  font-size: 20px;
  background-color: #2e4170;
  font-family: 'Shizuru', cursive;
  border: none;
  text-align: center;
  margin-left: 40px;
  color: white;

  &:hover {
    cursor: pointer;
  }

  &:active {
    opacity: 0.5;
  }
`

const Form = (props) => {
    const {valueBool} = props

    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const dataBase = useSelector(state => state.dataBase)
    const buttonFunction = () => {
        dispatch({...dataBase, type: "ADD_TODO", payload: inputValue , value: valueBool})
        // console.log(Array.isArray(dataBase))
        console.log(dataBase)
    }
    return (
        <FormArea>
            <InputArea
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}/>
            <Button onClick={() => buttonFunction()}>Создать дело</Button>

        </FormArea>
    );
};

export default Form;