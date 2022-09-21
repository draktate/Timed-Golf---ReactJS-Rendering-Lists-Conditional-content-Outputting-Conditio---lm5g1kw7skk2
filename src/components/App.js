import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {

  

  constructor(props) {
    
    super(props);
    
    this.state = { time: 0, x: 0, y: 0 , display:false, incrMovement:5 };

    this.handleClick = this.handleClick.bind(this);
    this.myFunction = this.myFunction.bind(this);


  }
  
  componentDidMount() 
  {
    console.log("this will get executed only once.")
    
  }

  componentWillUnmount() {
    clearInterval();
    console.log("this will get executed at end.");
    
  }

  handleClick(e) {
    this.setState({display:true});
    let timeInterval = setInterval(()=>{ this.setState({time:this.state.time+1}); }, 1000);
    this.setState({timer:timeInterval});
    document.addEventListener("keydown", this.myFunction);
  };

  myFunction(event) 
  {
    let incrMovement=this.state.incrMovement;
    let xLeft=this.state.x;
    let xTop=this.state.y;
    let key="";    
    if(this.state.display)
    {
      if(event.keyCode==37)
      {
        key="left key";
        xLeft=xLeft-incrMovement;
      }
      else if(event.keyCode==38)
      {
        key="up key";
        xTop=xTop-incrMovement;
      }
      else if(event.keyCode==39)
      {
        key="right key";
        xLeft=xLeft+incrMovement;
      }
      else if(event.keyCode==40)
      {
        key="down key";
        xTop=xTop+incrMovement;
      }
      if(xTop<0) xTop=0;
      if(xLeft<0) xLeft=0;
          
      //setBallPosition({left:xLeft , top:xTop});
      //console.log("x:",xLeft, "y:", xTop );
      

      //document.getElementById("Ball").style.top = xTop;
      //document.getElementById("Ball").style.left =xLeft;
      this.setState({x:xLeft, y:xTop});
      if(xLeft==250 && xTop==250)
      {
        this.setState({x:0, y:0});
        this.setState({time:0});
        this.setState({display:false});
       
        
        if(this.state.timer)
        {
          console.log('clear interval',this.state.timer); 
          clearInterval(this.state.timer);
        }
      }
    }
  }


  render(){
    return(
      <>
      { <button className='ballProvider' onClick={this.handleClick} > Start </button>}
      { <div className='hole'> </div>}
      { <div id="Ball" className="ball" style={{  left : this.state.x, top: this.state.y }}  >   </div> }
      { <div id="Timer" className="heading-timer">  Time:{this.state.time}  </div> }  

     </>);
  }

}

export default Timer;

