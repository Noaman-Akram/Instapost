import React, { Component, useState } from 'react'



class Playground extends Component{

    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    uCounter = (x) => () => {
       this.setState({
            count : this.state.count +x
        })
    }

    render(){
        return( 
            <>
                <h1>playground</h1>
                <div>
                <h2>Counter : {this.state.count}</h2>
                <button onClick={this.uCounter(-1)}>-</button>
                <button onClick={this.uCounter(1)}>+</button>
                </div>
            </>
        )
    }
}

export default Playground