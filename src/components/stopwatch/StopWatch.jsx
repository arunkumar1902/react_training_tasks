import React, { useEffect, useState } from 'react'
import './StopWatch.css'

export default function StopWatch() {
    const [timer, setTimer] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [stoppedAt, setStoppedAt] = useState([]);

    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {

                setTimer((prev) => {
                    let { hours, minutes, seconds } = prev;

                    seconds = seconds + 1;

                    if (seconds === 60) {
                        seconds = 0;
                        minutes = minutes + 1;
                    }
                    if (minutes === 60) {
                        minutes = 0;
                        hours = hours + 1;
                    }

                    return { hours, minutes, seconds };

                });
            }, 1000);
        }

        return (() => clearInterval(interval));
    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
    };

    const stop = () => {
        setIsRunning(false);
        setStoppedAt(prev => ([
            ...prev,
            { ...timer }
        ]));
    };

    const reset = () => {
        setIsRunning(false);
        setTimer({
            hours: 0,
            minutes: 0,
            seconds: 0
        });
        setStoppedAt([]);
    };

    return (
        <div className='stopWatchDiv'>

            <div className='timeDisplay'>
                <p>Time</p>
                <h1>{timer.hours} : {timer.minutes} : {timer.seconds}</h1>

                <div className='buttons'>
                    <button onClick={() => start()} disabled={isRunning}>Start</button>
                    <button onClick={() => stop()} disabled={!isRunning}>Stop</button>
                    <button onClick={() => reset()}>Reset</button>
                </div>
            </div>


            {stoppedAt.length > 0 &&
                <div className='stopDisplay'>
                    <h3>Stopped At : </h3>
                    {stoppedAt.map((time, index) => {
                        return (
                            <h4 key={index}>{time.hours} : {time.minutes} : {time.seconds}</h4>
                        )
                    })}
                </div>}
        </div>
    )
}
