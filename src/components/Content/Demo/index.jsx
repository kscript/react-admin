import React from 'react';
import Input from './Input'

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {
                name: 'name',
                type: 'text',
                value: 'unkown'
            }
        }
    }
    render() {
        return (
            <div style={{padding: '20px'}}>
            	<Input config={this.state.input} />
      		</div>
        );

    }
}

export default Demo;
