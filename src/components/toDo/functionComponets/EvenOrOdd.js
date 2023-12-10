import React from "react";

const EvenOrOdd = React.memo(({ count }) => {
    return (
        <div>
            <p>Счетчик: {count}</p>
        </div>
    );
}, (prevCount, nextCount) => {
    if (nextCount.count % 2 !== 0) {
        return true
    }
})

export default EvenOrOdd;