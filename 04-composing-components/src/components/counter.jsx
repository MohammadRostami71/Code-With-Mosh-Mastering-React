import React, {Component} from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    // };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            //Ajax call and get new data from server
        }
    }

    componentWillUnmount() {
        console.log('counter - unmount');
    }

    styles = {
        fontsize: 10,
        fontWeight: 'bold'
    };

    //
    // handleIncrement = (e) => {
    //     this.setState({value: this.state.value + 1});
    // }

    render() {
        console.log('Counter - render');
        return (
            <div className="row">
                <div className="col-1">
                    <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter)}
                            className="btn btn-sm btn-secondary m-2">+
                    </button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)}
                            className="btn btn-sm btn-secondary m-2"
                            disabled={this.props.counter.value === 0 ? 'disabled':''}
                    >-
                    </button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)}
                            className="btn btn-danger btn-sm m-2">Delete
                    </button>
                </div>

            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary'
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter


