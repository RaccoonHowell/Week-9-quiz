import React, { Component } from "react";

class CountBy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            counter: this.state.counter + 5
        })
    }
    
    render() {
        return (
            <p onClick={ this.handleClick }>
                { this.state.counter }
            </p>
        )
    }
}

export default CountBy;

// Create a component <CountBy step={ 5 }> that takes a step prop. It should display a number (starting at 0) inside a <p>. Every time it is clicked the number should go up by step.

// 1. Render the HTML on page
// 2. Track data in state and use that state to update our display
// 2.5. Source the data in state from props or wherever
// 3. Add interactivity so that the state is updated when the user does something
// 3.1. Add event listeners to elements and test that they run
// 3.2. Update the state based on an action