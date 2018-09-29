import React, { Component } from 'react';

class Inserttodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: ""
        }
    }
    render() {
        return (
            <div className="Inserttodo">
            <input type="text" value />
            </div>
        );
    }
}

export default Inserttodo;