import React from "react";
import { Screen,MenuList } from "./ipodScreen.styled";
import './list.css'
class IpodScreen extends React.Component{

    constructor(){
        super()
        this.coverFlowRef = React.createRef();
    }

    componentDidUpdate(){
        console.log('Update*ipodScrenn rendered')

    }
    
    render(){
        console.log('************************ipodScrenn rendered')
        return(
            <>
                <Screen>
                    <MenuList>
                        <h1 style={{ marginBlockStart: '0' }}  >iPod.js</h1>
                        <h3 className='listItem active' >Cover Flow</h3>
                        <h3 className="listItem" >Music</h3>
                        <h3 className="listItem" >Games</h3>
                        <h3 className="listItem" >Settings</h3>
                    </MenuList>
                </Screen>
            </>
        )
    }

}

export default IpodScreen