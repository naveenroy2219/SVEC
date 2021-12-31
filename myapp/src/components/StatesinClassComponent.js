import React, { Component } from 'react'

export default class StatesinClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:"Naveen",
            count:0
        }
    }
    render() {

        setTimeout(()=>{
            this.setState({
                name:"Naveen C",
            })
        },2000)
        return (
            <div>
                <h1>Welcome {this.state.name}</h1>
                <h1>count {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })

                }}>Increment Count</button>
                 <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })
                    
                }}>Decrement Count</button>
                 <button onClick={()=>{
                    this.setState({
                        count:this.state.count=0
                    })
                    
                }}>reset Count</button>
            </div>
        )
    }
}
