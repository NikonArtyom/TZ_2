import React, { useEffect, useState } from "react";

const FunctionLifecycleComponent = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        async function getRequest() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                const result = await response.json()
                console.log(result);
            } catch (err) {
                console.log(err);
            }
        }
        getRequest()
    }, [])

    useEffect(() => console.log(count), [count])

    useEffect(() => {
        return () => console.log('componentWillUnmountFn');
    }, [])


    const increment = () => setCount(count + 1);

    return (
        <div>
            <p>Счетчик: {count}</p>
            <button onClick={increment}>Увеличить на 1</button>
        </div>
    )
}

export default FunctionLifecycleComponent;