import React, { Component } from 'react'

export default class Corporation extends Component {
    render(props) {
        return (
            <div>
                <h1>CorporationBank is located @ {this.props.location}</h1>
            </div>
        )
    }
}
