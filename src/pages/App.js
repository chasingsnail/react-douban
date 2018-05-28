import React, { Component } from 'react';

class App extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;