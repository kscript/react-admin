import React from 'react';
import Input from './Input'

class Demo extends React.Component {
    constructor(props) {
        super(props);
        console.log(this)
        this.state = {
            src: 'http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif',
            input: {
                name: 'name',
                type: 'text',
                value: 'unkown'
            }
        }
        setTimeout(() => {
            this.setState({
                src: 'http://image.zhangxinxu.com/image/blog/200909/html-body-20090918.png'
            })
        }, 2000)
    }
    render() {
        return (
            <div style={{padding: '20px'}}>
                <img src={this.state.src} alt="" />
            	<Input config={this.state.input} />
      		</div>
        );

    }
}

export default Demo;
