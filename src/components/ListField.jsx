import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components"

const UlFiel = styled.ul`
  padding-top: 40px;
  max-width: 84%;
`
const List = styled.li`
  display: block;
  color: white;
  padding: 10px 0px;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  
`
const CheackBoxInput = styled.input`
  margin-right: 26px;
  height: 50px;
  width: 50px;
`
const TextPart = styled.p`
  font-family: 'Shizuru',cursive;
  font-weight: bold;
  border: 1px solid AQUA;
  width: 65.3%;
  align-self: center;
  padding: 13px;
`
const DeleteButton = styled.button`
  padding: 12px;
  font-size: 20px;
  background-color: #2e4170;
  font-family: 'Shizuru',cursive;
  border: none;
  text-align: center;
  margin-left: 40px;
  color: white;
}
`
const ListBox = styled.div`

  display: flex;
  justify-content: space-between;

`

const ListField = (props) => {
    const {value,foo} = props

    const [bool , setBool] = useState(true)
    const dataBase = useSelector(state => state.dataBase)
    const dispatch = useDispatch()
    const toggleChecked = () =>{
        setBool(!bool)
        foo(bool)
        // console.log(value)
    }
    const handleDelete = (id) =>{
        dispatch({
            type: "DELETE_ITEM",
            payload: id
        })
    }
    return (
        <UlFiel>
            {dataBase.map((item) => {
                return (
                    <List key={item.id}>
                        <ListBox>
                        <TextPart>{item.text}</TextPart>
                        <CheackBoxInput type="checkbox" onClick={()=>toggleChecked()}></CheackBoxInput>
                        <DeleteButton onClick={()=>handleDelete(item.id)}>Удалить</DeleteButton>
                        </ListBox>
                    </List>
                )
            })}
        </UlFiel>

    );
};

export default ListField;