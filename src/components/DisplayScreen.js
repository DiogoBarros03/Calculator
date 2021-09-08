import React from 'react';

class DisplayScreen extends React.Component{
    
    render(){
        
        
        return (
            <div style={{
                    backgroundColor:"rgba(0, 0, 0, 0.85)", 
                    height:"60px", display:"flex",
                    alignItems:"center",
                    paddingRight:'4px'}} >
                <label style={{color:"white",marginLeft:'auto', marginRight:'0'}}>
                    {this.props.state.totalValue}
                </label>
            </div>
        )
    }
}

export default DisplayScreen;