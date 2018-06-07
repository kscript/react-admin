import React from 'react';
import { connect } from 'react-redux';

import { List } from 'antd';

class Lists extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            list: props.list
        }
    }
    componentWillReceiveProps = (newProps) => {
        this.setState({
            list: newProps.list
        })
    }
    render() {
        return (
            <div>
                <List
                size="small"
                bordered={false}
                split={false}
                dataSource={this.state.list}
                renderItem={item => (<List.Item>
                    <List.Item.Meta title={<a href={item.id}>{item.title} <small>({item.view})</small></a>} />
                </List.Item>)}
                />
            </div>
        )

    }
}

function mapStateToProps(state, ownProps) {
    return {
        list: ownProps.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
