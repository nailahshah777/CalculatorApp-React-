import React,{Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/calculator.css'
class Calculator extends Component{
    constructor(props)
    {
        super(props)
        {
            this.state={
                btn:'',
                calculation:''
            }
        }
    }
    
    
    getDigit=(e)=>
{
console.log("target=",e.target.value)
console.log("get digit fun1",typeof(this.state.btn))
let y=this.state.btn.toString().concat(e.target.value)
console.log("y=",y)
this.setState({btn:y});

        
}
result=(e)=>{
    
    let cal=eval(this.state.btn)
    
    this.setState({btn:cal});
}

clearDisplay=(e)=>
{e.preventDefault()
this.setState({btn:''})
}
    render()
    {
    return(<div className='main'>
            <h1>Calculator app</h1>
            <div className='myapp'>
             <div className='row display'>
            <span className='col-md-6'>{this.state.btn}</span>
             </div> 
             
             <div className='row operators'>
            
             <button className='col-md-2' value="+" onClick={this.getDigit}>+</button> 
             <button className='col-md-2' value="-" onClick={this.getDigit}>-</button>
             <button className='col-md-2' value="*" onClick={this.getDigit}>*</button>
             <button className='col-md-2' value="/" onClick={this.getDigit}>/</button>
             <button className='col-md-4' value="clear" onClick={this.clearDisplay}>CLEAR</button>   
                 
                 </div>
            <div className='container'>
             <div className='row digits'>
             
            <button className='col-md-3' value="1"  onClick={this.getDigit}>1</button>  
            <button className='col-md-3' value="2" onClick={this.getDigit}>2</button> 
            <button className='col-md-3' value="3" onClick={this.getDigit}>3</button>    
                 </div>
            
             
             <div className='row'>
             
            <button className='col-md-3' value="4" onClick={this.getDigit}>4</button>  
            <button className='col-md-3' value="5" onClick={this.getDigit}>5</button> 
            <button className='col-md-3' value="6" onClick={this.getDigit}>6</button>    
                
            
             </div> 
             
             <div className='row'>
            <button className='col-md-2' value="7" onClick={this.getDigit}>7</button>  
            <button className='col-md-2' value="8" onClick={this.getDigit}>8</button> 
            <button className='col-md-2' value="9" onClick={this.getDigit}>9</button>    
                 </div>
            
             
             <div className='row'>
             
<button className='col-md-2' value="0" onClick={this.getDigit}>0</button>  
<button className='col-md-2' value="." onClick={this.getDigit}>.</button>
<button className='col-md-2' onClick={this.result}>=</button>
                
            </div>
             </div> 
            </div>
            </div>
        )
    }
}
export default Calculator