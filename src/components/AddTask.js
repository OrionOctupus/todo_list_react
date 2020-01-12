import React from 'react';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';

class AddTask extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    pushEnter = event => {
        if(event.key === 'Enter') this.taskInput();
    };

    taskInput = () => {
        const {input} = this.state;
        if (input) {
            this.props.taskInput(input);
            this.setState({input: ''});
        }
    };

    inputChange = event => {
        this.setState({input: event.target.value});
    };

    render() {
        const {input} = this.state;

        return(
            <div className="add-task">

                <button onClick={this.taskInput}><Icon path={mdiPlus} size={1} /></button>
                <input className="form-control" type="text" onKeyPress={this.pushEnter} onChange={this.inputChange} value={input} ></input>
                
            </div>
        );
    }
}

export default AddTask;