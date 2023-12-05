import React from 'react';

class ClassLifecycleComponent extends React.Component {

    state = {
        count: 0,
    };

    increment = () => this.setState((state) => ({ count: state.count + 1 }));

    async getRequest() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const result = await response.json()
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getRequest();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.count)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count % 2 === 0) {
            return true
        }
        return false
    }

    componentWillUnmount() {
        console.log("componentWillUnmountClass");
    }

    render() {
        return (
            <div>
                <p>Счетчик: {this.state.count}</p>
                <button onClick={this.increment}>Увеличить на 1</button>
            </div>
        )
    }
}

export default ClassLifecycleComponent;