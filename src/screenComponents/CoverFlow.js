import React from "react";
import { Screen } from "../ipodScreen.styled";
export default class CoverFlow extends React.Component{

    render(){
        return(
            <>
                <Screen style={{
                    background:'white',
                    textAlign:'center'
                }}>
                <img style={{marginTop:'20px'}} alt="coverflow" src="https://cdn-icons-png.flaticon.com/128/11034/11034233.png" />
                    <h1 style={{
                        fontSize:'40px',
                        textAlign:'center'
                    }} >CoverFlow</h1>
                </Screen>
            </>

        )
    }

}