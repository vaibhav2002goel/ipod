import React from "react";
import ZingTouch from 'zingtouch'
import { CircularOptions,MenuButton,MenuThreeButtons,BackButtonImage,CenterButton,ForwardButtonImage,PlayPauseButttonImage } from "./CircularMenu.styled";
class CircularMenu extends React.Component{

    constructor(){
        super();
        this.circularButtonRef = React.createRef();
    }

    componentDidMount(){
        const myElement = this.circularButtonRef.current

        if(myElement){
            const myRegion = new ZingTouch.Region(document.body);
            const myRotateGesture = new ZingTouch.Rotate();
            const identifier = this.props.index;
            myRegion.bind(myElement,myRotateGesture,function(e){

                let list = document.getElementsByClassName('listItem');
                if(list.length===0){
                    list = document.getElementsByClassName('musicList')
                }
                console.log('list',list);
                console.log('identifier',identifier)
                let index = 0;
                if(e.detail.distanceFromOrigin>0 && list.length){
                    let x = parseFloat(e.detail.distanceFromOrigin/15);
                    let y = parseInt(e.detail.distanceFromOrigin/15);
                    
                    
                    if(x - parseFloat(y) <= 0.05 && e.detail.distanceFromOrigin>14  ){
                        
                        // console.log('**Inside**')
                        for(let i=0;i<list.length;i++){
                            if(list[i].classList.contains('active')){
                                index = i;
                                break;
                            }
                        }
                        list[index].classList.remove('active');    
                        list[ (index + 1)%(list.length)  ].classList.add('active');
                    }
                    // console.log('----------------------------------------------------------------');
                }

                else if(list.length && e.detail.distanceFromOrigin<=0){

                    let distance = -1 * e.detail.distanceFromOrigin;
                    let x = parseFloat(distance/15);
                    let y = parseInt(distance/15);
                    
                    if(x - parseFloat(y) <= 0.05 && distance>14  ){
                        
                        for(let i=0;i<list.length;i++){
                            if(list[i].classList.contains('active')){
                                index = i;
                                break;
                            }
                        }
                        
                        if(index === 0){
                            list[index].classList.remove('active');
                            list[list.length-1].classList.add('active');
                        }
                        else{
                            list[index].classList.remove('active');
                            list[ (index - 1)  ].classList.add('active');
                        }
                    }
                }

            })
        }
    }

    componentDidUpdate(){
        console.log('Update**********************circularMenu renderd')

    }

    render(){

        console.log('**********************circularMenu renderd')

        return(
            <>
                <CircularOptions ref={this.circularButtonRef} >

                    <MenuButton onClick={this.props.handleMenuButton}>
                        <b>Menu</b>
                    </MenuButton>

                    <MenuThreeButtons>

                        <div>
                            <BackButtonImage alt="Back Button" src="https://cdn-icons-png.flaticon.com/128/3983/3983991.png" />
                        </div>
                        <CenterButton onClick={this.props.handleScreenOutput} ></CenterButton>
                        <div>
                            <ForwardButtonImage alt="Forward Button"  src="https://cdn-icons-png.flaticon.com/128/1/1824.png" />
                        </div>

                    </MenuThreeButtons>

                    <div>
                        <PlayPauseButttonImage alt="Play-Pause" src="https://cdn-icons-png.flaticon.com/128/8191/8191650.png" />
                    </div>

                </CircularOptions>
            </>
        )
    }

}

export default CircularMenu