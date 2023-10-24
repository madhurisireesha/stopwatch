import './stowatch.css'
import {Component} from 'react'
class Stopwatch extends Component{
    constructor(props){
        super(props)
        this.state={left:"00",right:"00",start:false}
    }
    componentDidMount(){
        this.leftID=setInterval(this.left,1000)
        this.rightID=setInterval(this.right,1000)
    }
    componentWillUnmount(){
        clearInterval(this.leftID)
        clearInterval(this.rightID)
    }
    right=()=>{
       const{right,start}=this.state
       if(start===true && right<=59) 
       {
        this.setState((prevState)=>({
            right:parseInt(prevState.right)+1
        })) }
     }
     left=()=>{
        const{right}=this.state
        if(right===59)
        {
            this.setState((prevState)=>({
                left:parseInt(prevState.left)+1,
                right:"00"
            }))
        }
     }
    startButton=()=>{
        const{start}=this.state
        this.setState({
            start:!start
        })
    }
    stopButton=()=>{
        //const{left,right}=this.state
        this.setState((prevState)=>({
            start:false,
            left:prevState.left,
            right:prevState.right
        }))
    }
    resetButton=()=>{
       // const{left,right}=this.state
        this.setState({
            start:false,
            left:"00",
            right:"00"
        })
    }
    
    render(){
        const{left,right}=this.state
        return(
            <div className='maincontainer'>
                <div className='container'>
                    <h1>Stop Watch</h1>
                    <div className="timercontainer">
                        <div className='one'>
                            <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch"/>
                            <h2>Timer</h2>
                        </div>
                        <div className='two'>
                            <h3>{left}:{right}</h3>
                        </div>
                        <div className='three'>
                            <button className='sbut' onClick={this.startButton}>Start</button>
                            <button className='tbut' onClick={this.stopButton}>Stop</button>
                            <button className='rbut' onClick={this.resetButton}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Stopwatch