import React from "react";
import { Screen,MenuList } from "../ipodScreen.styled";
export default class Music extends React.Component{


    

    render(){
        return(
            <>
                <Screen>

                <MenuList>
                    <h1 style={{ marginBlockStart: '0' }}  >Music</h1>        
                    <h3 className='musicList active' >All Songs</h3>
                    <h3 className="musicList" >Artists</h3>
                    <h3 className="musicList" >Albums</h3>
                </MenuList>

                    
                </Screen>
            </>

        )
    }

}