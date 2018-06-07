import React from 'react';
import Table from './List'
import * as fetch from './model.js';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentWillMount () {
        fetch.fetchList({
        }).then(response => {
            this.setState({
                list: response.data
            })
        })
    }
    render() {
        return (
            <div style={{padding: '20px'}}>
            	<Table list={this.state.list} />
      		</div>
        );

    }
}

export default Demo;
