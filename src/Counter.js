import React, {useEffect, useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    console.log('count on state: ', count);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click to increment counter</button>
        </div>
    )

}

export default Counter