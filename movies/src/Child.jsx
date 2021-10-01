import React from "react";

class Child extends React.Component{

    constructor(props){
           
        super(props)

        this.state = {on:true};
        console.log("constructor was called");

    }

    // state = {};


    componentDidUpdate(){
        console.log("component did update was called");
    }
   

   componentDidMount(){
       console.log("component did mount was called");
   }

    render(){
        console.log("render was called")
        return (
            <div>
                <button onClick = {()=>{
                if(this.state.on)
                {
                    this.setState({on:false});
                }
                else
                {
                    this.setState({on:true});
                }
              }}>click</button>
            </div>
            
        )
    }


    componentWillUnmount(){
        console.log("component will unmount was called");
    }
}

export default Child;