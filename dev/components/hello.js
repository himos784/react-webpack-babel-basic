import React, { Component } from 'react';

export default class Hello extends Component {
    render() {
        return (
            <div>Hello, {this.props.name}!</div>
        );
    }
}