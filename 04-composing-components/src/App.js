import React, {Component} from 'react';
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 2},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c
        });
        this.setState({counters});
    };

    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters});
    }

    constructor() {
        super();
        console.log('APP - constructor');
    }

    componentDidMount() {
        //Ajax call
        console.log('APP - Mounted');

    }

    render() {
        console.log('APP - render');
        return (
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                    />
                </main>
            </React.Fragment>

        );
    }

}

export default App;
