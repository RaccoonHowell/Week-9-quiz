import React,  { Component} from "react";

class EvenClicks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const current = this.state.clicked

        this.setState({
            clicked: !current
        })
    }

    render () {
        return (
            <p onClick={ this.handleClick }>
                { !this.state.clicked ? "Even" : "Odd" }
            </p>
        )
    }
}

export default EvenClicks;

// Create a component <EvenClicks> that displays "Even" if it's been clicked an even number of times and "Odd" if it's been clicked an odd number of times.

// 1. Render the HTML on page
// 2. Track data in state and use that state to update our display
// 2.5. Source the data in state from props or wherever
// 3. Add interactivity so that the state is updated when the user does something
// 3.1. Add event listeners to elements and test that they run
// 3.2. Update the state based on an action