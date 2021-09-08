import React from 'react';
import CalculatorCell from './CalculatorCell';
import "../css/css.css";

class CalculatorBody extends React.Component{
    state = {hasValue: false};
    BodyStateToScreen(value){
        
        if(this.state.hasValue === false){
            if(value !== "*" && value !== "/" && value !== "+" && value !== "=" && value !== "." ){
                this.props.BodyStateToScreen(value);
                this.setState({hasValue:true})
            }
        }else{
            this.props.BodyStateToScreen(value);
        }
        
        
    }

    render(){
        return(
            <div className="ui four column grid" style={{marginRight:"auto",marginLeft:"auto", marginTop:"auto"}}>
                <div className="row" style={{padding:'0px '}}>
                    <div className="column "id="cell-paddingLeft" onClick={()=>{this.BodyStateToScreen("1")}}>
                        <CalculatorCell value="1" ></CalculatorCell>
                    </div>
                    <div className="column " id="cell-padding" onClick={()=>this.BodyStateToScreen("2")}>
                        <CalculatorCell value="2"></CalculatorCell>
                    </div>
                    <div className="column " id="cell-padding" onClick={()=>this.BodyStateToScreen("3")}>
                        <CalculatorCell value="3"></CalculatorCell>
                    </div>
                    <div className="column "  id="cell-paddingRight" onClick={()=>this.BodyStateToScreen("/")}>
                        <CalculatorCell value="/" special={true}></CalculatorCell>
                    </div>
                </div>
                <div className="row" style={{padding:'0px '}}>
                    <div className="column "id="cell-paddingLeft" onClick={()=>{this.BodyStateToScreen("4")}} >
                        <CalculatorCell value="4"></CalculatorCell>
                    </div>
                    <div className="column " id="cell-padding" onClick={()=>{this.BodyStateToScreen("5")}}>
                        <CalculatorCell value="5"></CalculatorCell>
                    </div>
                    <div className="column " id="cell-padding" onClick={()=>{this.BodyStateToScreen("6")}}>
                        <CalculatorCell value="6"></CalculatorCell>
                    </div>
                    <div className="column "  id="cell-paddingRight" onClick={()=>{this.BodyStateToScreen("*")}}>
                        <CalculatorCell value="*" special={true} ></CalculatorCell>
                    </div>
                </div>
                <div className="row" style={{padding:'0px '}}>
                    <div className="column "id="cell-paddingLeft" onClick={()=>{this.BodyStateToScreen("7")}} >
                            <CalculatorCell value="7"></CalculatorCell>
                        </div>
                        <div className="column " id="cell-padding" onClick={()=>{this.BodyStateToScreen("8")}} >
                            <CalculatorCell value="8"></CalculatorCell>
                        </div>
                        <div className="column " id="cell-padding" onClick={()=>{this.BodyStateToScreen("9")}}>
                            <CalculatorCell value="9"></CalculatorCell>
                        </div>
                        <div className="column "  id="cell-paddingRight"  onClick={()=>{this.BodyStateToScreen("+")}}>
                            <CalculatorCell value="+" special={true} ></CalculatorCell>
                    </div>
                </div>
                <div className="row" style={{padding:'0px '}}>
                    <div className="column "id="cell-paddingLeft" onClick={()=>{this.BodyStateToScreen(".")}}>
                            <CalculatorCell value="."></CalculatorCell>
                        </div>
                        <div className="column " id="cell-padding" onClick={()=>{this.BodyStateToScreen("0")}}>
                            <CalculatorCell value="0"></CalculatorCell>
                        </div>
                        <div className="column " id="cell-padding" onClick={()=>{this.BodyStateToScreen("clear")}}>
                            <CalculatorCell value="C" clear={true} ></CalculatorCell>
                        </div>
                        <div className="column "  id="cell-paddingRight" onClick={()=>{this.BodyStateToScreen("-")}} >
                            <CalculatorCell value="-" special={true} ></CalculatorCell>
                    </div>
                </div>
                <div className="row" style={{padding:'0px '}}>
                    <div style={{width:"100%"}} onClick={()=>{this.BodyStateToScreen("=")}}>
                        <CalculatorCell value="=" special={true} ></CalculatorCell>
                    </div>
                   
                </div>
            </div>
        ); 
    }
}

export default CalculatorBody;