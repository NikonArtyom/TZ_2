import React, { useEffect, useState } from "react";
import EvenOrOdd from "./EvenOrOdd";

const FunctionLifecycleComponent = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    useEffect(() => {
        async function getRequest() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                const result = await response.json()
                console.log('componentDidMountFn ', result);
            } catch (err) {
                console.log(err);
            }
        }
        getRequest()
    }, [])

    useEffect(() => console.log('componentDidUpdateFn ', count), [count])

    useEffect(() => {
        return () => console.log('componentWillUnmountFn');
    }, [])

    return (
        <div>
            <EvenOrOdd count={count} />
            <button onClick={increment}>Увеличить на 1</button>
        </div>
    )
}


export default FunctionLifecycleComponent;