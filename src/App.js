import React from 'react'
import CircularMenu from './CircularMenu';
import IpodScreen from './IpodScreen';
import CoverFlow from './screenComponents/CoverFlow';
import Music from './screenComponents/Music';
import Games from './screenComponents/Games';
import Settings from './screenComponents/Settings';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      arr:[<IpodScreen/>,<CoverFlow/>,<Music/>,<Games/>,<Settings/>],
      index:0
    }

  }

  handleScreenOutput = ()=>{
      let list = document.getElementsByClassName('listItem');
      let index=this.state.index;

      if(list){
        for(let i=0;i<list.length;i++){
          if(list[i].classList.contains('active')){
            index = i;
            index++;
            break;
          }
        }
      }
      console.log('index',index);
      this.setState({
        index:index
      })
      console.log('this.state.index  after',this.state.index)
  }

  handleMenuButton = ()=>{
    this.setState({
      index:0
    })
  }

  render(){
    return(
      <>
        <div style={{
          backgroundColor:'#d7d7d4',
          height:'600px',
          width:'350px',
          margin: '0 auto',
          borderRadius:'70px',
          padding:'30px',
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'
        }}>
          {this.state.arr[this.state.index]}
          <CircularMenu handleScreenOutput={this.handleScreenOutput} handleMenuButton={this.handleMenuButton} index={this.state.index} />
        </div>
      </>
    )
  }

}

export default App;