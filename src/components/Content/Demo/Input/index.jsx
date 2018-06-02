import React from 'react';

import { connect } from 'react-redux';


class Input extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            config: props.config
        }
    }
    // key = () => {} 解决this为undefined的问题
    inputChange = (event) => {
        this.setState({
            config: {
                value: event.target.value
            }
        })
    }
    render() {
        return (
            <input style={{outline: 'none', borderWidth: '1px', padding: '1px 3px'}} type={this.state.config.type} name={this.state.config.name} value={this.state.config.value} onChange={this.inputChange} />
        )

    }
}

function mapStateToProps(state, ownProps) {
    return {
        // value: ownProps.value
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);
