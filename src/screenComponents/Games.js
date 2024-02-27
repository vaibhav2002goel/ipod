import React from "react";
import { Screen } from "../ipodScreen.styled";
export default class Games extends React.Component{

    render(){
        return(
            <>
                <Screen style={{
                    background:'white',
                    textAlign:'center'
                }}>
                <img style={{marginTop:'20px'}} alt="Dice" src="https://cdn-icons-png.flaticon.com/128/9677/9677576.png" />
                <h1 style={{
                    fontSize:'40px',
                    textAlign:'center'
                }} >Games</h1>
                </Screen>
            </>

        )
    }

}