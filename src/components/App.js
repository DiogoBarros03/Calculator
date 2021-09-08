import React from 'react';
import DisplayScreen from './DisplayScreen';
import CalculatorBody from './CalculatorBody';
import { render } from '@testing-library/react';

class App extends React.Component{

    
    state = {
        value: "",
        totalValue: "",
        operations:[{
            value: "",
            operation: ""
        }]
    };

    EqualsTo = () => {
        
        const arr = this.state.operations;
        var result = parseFloat(arr[0].value);
        

        
        for (var i = 0; i < arr.length-1; i++) {
            if(result === "error"){
                break;
            }

            var value = parseFloat(arr[i+1].value);
            
            switch(arr[i].operation){
                case "-":
                    result = (parseFloat(result) - parseFloat(value)).toFixed(10);
                    result = Number(result);
                    break;
                case "*":
                    result = (result * value).toFixed(10);
                    result = Number(result);
                    
                    break;
                case "+":
                   
                    result = (parseFloat(result) + parseFloat(value)).toFixed(10);
                    result = Number(result);
                    break;
                case "/":
                    if(arr.value === 0){
                        result = "error";
                        
                        break; 
                    }
                    result = (result / value).toFixed(10);
                    result = Number(result);
                    break;
            }
            
            
        }
        
        this.setState({
            value: result.toString(),
            totalValue: result.toString(),
            operations:[{
                value: "",
                operation: ""
            }]});
        
    }

    BodyStateToScreen = (valueReceived) =>{
       
        
        this.updateState(valueReceived);
    }

    updateState = (valueReceived) => {
        console.log(valueReceived);
        if(valueReceived === "=" && this.state.value !== ""){
            this.setState({
                value : "",
                totalValue: this.state.totalValue +""+valueReceived,
                operations:[...this.state.operations, {value: this.state.value, operation: valueReceived}]
            }, this.EqualsTo);
            

        }else{
            if(valueReceived ==="+" ||valueReceived ==="*" ||valueReceived ==="/" ||valueReceived === "-"){
                let lastDigit = this.state.value.slice(-1);
                if(this.state.operations[0].value === "" ){
                    
                    if(lastDigit !== "."){
                        this.setState({
                            value: "",
                            totalValue: this.state.totalValue +""+valueReceived,
                            operations:[{value: this.state.value, operation: valueReceived}]
                        });
                    }
                    
                    
                }else{
                   
                    if(this.state.value !== "" || this.state.operations[this.state.operations.length-1].operation === ""){
                        if(lastDigit !== "."){
                            const list = [...this.state.operations, {value: this.state.value, operation: valueReceived}]
                            this.setState({
                                value:"",
                                totalValue: this.state.totalValue +""+valueReceived,
                                operations:list
                            });

                        }
                        
                        
                    }
                    
                    
                }
                
            }else if(valueReceived=== "clear"){
            
                this.setState({
                    value :"",
                    totalValue: "",
                    operations:[{
                        value: "",
                        operation: ""
                    }]
                })
            }else{
                
                let lastDigit = this.state.value.slice(-1);
                
                
                if(lastDigit !== "." && lastDigit !== "-"&&  lastDigit !== "+" &&  lastDigit !== "*" &&  lastDigit !== "/"  && this.state.value !== ""){
                    if(valueReceived === "." && !this.state.value.includes(".")){
                        this.setState({
                            value: this.state.value + valueReceived,
                            totalValue: this.state.totalValue +""+valueReceived});
                    }else if(valueReceived !== "."){
                        this.setState({
                            value: this.state.value + valueReceived,
                            totalValue: this.state.totalValue +""+valueReceived});
                    }
                    
                }else{
                    if(valueReceived !== "=" && valueReceived !== "."){
                        
                        this.setState({
                            value: this.state.value + valueReceived,
                            totalValue: this.state.totalValue +""+valueReceived});
                    }
                }
                
                
                
            }
        }
       
        
        
    }
    render(){
        console.log(this.state)
        return(
            <div className="ui container" style={{height: "100vh"}}>
               <div className="ui one column stackable center aligned page grid" style={{padding: '0',width:'100%',height: "100vh"}}>
                    <div style={{width: '300px',marginTop:'auto',marginBottom:'auto'}}>
                        <div className="column twelve wide" style={{maxWidth: '300px',marginTop:'auto',marginBottom:'auto'}}>
                            <DisplayScreen state={this.state}></DisplayScreen>
                            <CalculatorBody BodyStateToScreen={this.BodyStateToScreen}></CalculatorBody>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;