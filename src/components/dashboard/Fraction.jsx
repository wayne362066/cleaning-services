import React, { useState } from 'react';
import "./order.css";

const Fraction = ({ setCounters, counters, name, order }) => {

    const [count, setCount] = useState(5)//畫面數字變數
    const data = counters//附值

    const handleDecrement = (e) => {
        const num = e.target.getAttribute("order")//事件物件index
        data[num].value - 1 >= 0 ? data[num].value = data[num].value - 1 : data[num].value = 0//值小於0為0
        setCounters(data)//更新評分資料
        setCount(count - 1 >= 0 ? count - 1 : 0)//更新畫面數字
    }

    const handleIncrement = (e) => {
        const num = e.target.getAttribute("order")//事件物件index
        data[num].value + 1 >= 5 ? data[num].value = data[num].value + 1 : data[num].value = 5//值大於5為5
        setCounters(data)//更新評分資料
        setCount(count + 1 <= 5 ? count + 1 : 5)//更新畫面數字
    }

    return (
        <div>
            <span>{name}</span>
            <button
                order={order}
                onClick={handleDecrement}
                className='scorebtn'
            >-</button>
            <span>{count === 0 ? "0" : count}</span>
            <button
                order={order}
                onClick={handleIncrement}
                className='scorebtn'
            >+</button>
        </div>
    )
}
export default Fraction;