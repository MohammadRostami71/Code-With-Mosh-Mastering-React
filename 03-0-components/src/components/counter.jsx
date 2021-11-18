import React, {Component} from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    styles = {
        fontsize: 10,
        fontWeight: 'bold'
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>no tags!</p>
        return <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
    }

    handleIncrement = (e) => {
        console.log(e);
        console.log('clicked', this.state.count);
        this.setState({count: this.state.count + 1});
    }

    // doHandelIncrement = () => {
    //     this.handleIncrement({id: 1});
    // }

    render() {
        return (
            <React.Fragment>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-sm btn-secondary">Increment
                </button>
                {this.state.tags.length === 0 && 'please create new tags'}
                {this.renderTags()}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary'
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter


