import React, { Component} from "react";

class HideMe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: true
        })
    }

    render() {
        const { children } = this.props;

        return (
            <p onClick={ this.handleClick} >
                { this.state.clicked ?  "" : children }
            </p>
        )
    }
}

export default HideMe;
// Create a component <HideMe>Blah blah blah</HideMe> that uses children to accept some content. When the component is clicked the content should be hidden.