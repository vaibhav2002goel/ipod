import styled from 'styled-components'

const CircularOptions = styled.div`
   height:250px;
   width:250px;
   background-color:#fcfcff;
   border-radius:250px;
   margin: auto;
   margin-top:30px;
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   align-items:center;
   padding:22px;
`

const MenuButton = styled.div`
    font-size:25px;
`

const BackButtonImage = styled.img`
    height:50px;
    width:50px;
`

const MenuThreeButtons = styled.div`
    width:101%;
    display:flex;
    color: #82868B;
    align-items:center; 
    justify-content:space-between;
    margin-top:5%;
    
` 

const CenterButton = styled.div`
    height:100px;
    width:100px;
    background-color:#d7d7d4;
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset';
    border-radius:100px;
    
`

const ForwardButtonImage = styled.img`
    height:41px;
    width:42px;
`

const PlayPauseButttonImage = styled.img`
    height:65px;
    width:65px;
`

export {CircularOptions,MenuButton,MenuThreeButtons,BackButtonImage,CenterButton,ForwardButtonImage,PlayPauseButttonImage}