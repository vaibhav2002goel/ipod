import React from "react";
import { Screen } from "../ipodScreen.styled";
export default class Settings extends React.Component{

    render(){
        return(
            <>
                <Screen style={{
                    background:'white',
                    textAlign:'center'
                }}>
                    <img style={{marginTop:'20px'}} alt="settings" src="https://cdn-icons-png.flaticon.com/128/900/900797.png" />
                    <h1 style={{
                        fontSize:'40px',
                        textAlign:'center'
                    }} >Settings</h1>
                </Screen>
            </>

        )
    }

}