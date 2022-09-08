import React, { useEffect, useRef, useState } from "react";
const Home = () => {
    const [inputvalue, setInputvalue] = useState('')
    // using useState
    const [countNum, setCountNum] = useState(0);
    const handle = () => {
        const updatedCount = countNum + 1;
        console.log(`Clicked ${updatedCount} times`);
        setCountNum(updatedCount);
    };
    console.log("I am useState");

    // using useRef
    const count = useRef(10)
    console.log("Welcome to Home Component!")
    const incButton = () => {
        count.current = count.current + 1
        console.log("count.current", count.current)
    }
    console.log("I am useRef");
    // access a DOM element directly
    const elementRef = useRef()
    useEffect(() => {
        const divElement = elementRef.current;
        console.log(divElement);
    }, []);

    return (<>

        <div >
            <h4 ref={elementRef}>it create a mutable veriable which will not re-render components when update </h4>
            <h4>It can be used to access a DOM element directly.</h4>
            <div>
                <input type='text'
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e.target.value)}
                />
            </div>
            <h4>using Ref:{count.current}</h4>

            <button onClick={incButton}>useRef(++)</button>
        </div>

        <div >
            <h4>using useState:{countNum}</h4>
            <button onClick={handle}>useState(++)</button>
        </div>
    </>)
}
export default Home