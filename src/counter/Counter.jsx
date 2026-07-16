import React, { useState } from 'react'
import './Counter.css'

export default function Counter() {
    const [theme, setTheme] = useState(true);
    const [count, setCount] = useState(0);
    return (
        <div className={theme ? 'lightMode' : 'darkMode'}>

            <button onClick={() => setTheme(!theme)} className='themeBtn'>{theme ? "Dark Mode" : "Light Mode"}</button>

            <div className='counterDiv'>
                <div className='counts'>
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <p>Count : {count}</p>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
                <button onClick={() => setCount(0)} className='resetBtn'>Reset</button>
            </div>
        </div>
    )
}
