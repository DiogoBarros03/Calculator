import React from 'react';

class CalculatorCell extends React.Component{
    
    
    ifPropsSpecial(){
        return(
        <div style={{
            height:"50px",
            display:"flex", 
            alignItems:"center",
            backgroundColor:"rgb(228, 132, 0)",
            cursor:"pointer"}}>
                <div style={{
                    width: "50%",
                    margin: "0 auto"}}>
                            {this.props.value}
                </div>
            
        </div>);
    }
    ifPropsClear(){
        return(
            <div style={{
                height:"50px",
                display:"flex", 
                alignItems:"center",
                backgroundColor:"rgb(188, 188, 188)",
                cursor:"pointer"}}>
                <div style={{
                    width: "50%",
                    margin: "0 auto"}}>
                            {this.props.value}
                </div>
            
        </div> );
    }

    render(){
        if(this.props.special === true){
            return this.ifPropsSpecial();
        }else if(this.props.clear === true){
            return this.ifPropsClear();
        }
        else{
            return(
                <div style={{
                    height:"50px",
                    display:"flex", 
                    alignItems:"center",
                    backgroundColor:"rgb(230, 230, 230)",
                    cursor:"pointer"}}>
                        <div style={{
                            width: "50%",
                            margin: "0 auto"}}>
                                   {this.props.value}
                        </div>
                    
                </div>
            ); 
        }
        
    }
}


export default CalculatorCell;