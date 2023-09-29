import React from 'react';
import { useState, useEffect } from 'react';

//import Countdown from 'react-countdown';

const CountdownTimer = (props) => {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [isCountingDown, setIsCountingDown] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isCountingDown) {
            setTimeout(() => { CountDownBySeconds() }, 1000);
            console.log(seconds);
        }
    });

    const StartCountdown = () => {
        setIsCountingDown(true);
        setMinutes(props.minutes);
        setSeconds(props.seconds);
    }

    const ChangePauseState = () => {
        switch (isPaused) {
            case false:
                setIsPaused(true);
                break;
            case true:
                setIsPaused(false);
                break;
        }
    }

    const StopCountdown = () => {
        setIsCountingDown(false);
        setMinutes(0);
        setSeconds(0);
    }

    const CountDownBySeconds = () => {
        if (!isPaused) {
            if (seconds === 0) {
                setSeconds(59);
                setMinutes(minutes - 1);
            }
            else {
                setSeconds(seconds - 1);
            }
        }
    }

    // const PrintValuesToConsole = () => {
    //     console.log("Values passed down thorugh props:");
    //     console.log("Minutes: " + props.minutes);
    //     console.log("Seconds: " + props.seconds);

    //     console.log("Checking to see if values have been passed: ");
    //     console.log("Minutes: " + minutes);
    //     console.log("Seconds: " + seconds);
    // }

    return (
        <div>
            <div>
                <button onClick={StartCountdown}>Start</button>
                <button onClick={ChangePauseState}>Pause/Resume</button>
                <button onClick={StopCountdown}>Reset</button>
            </div>

            {isCountingDown ?
                <div>
                    <h1>
                        {minutes}:{seconds}
                    </h1>
                </div>
                :
                <div>
                    <h1>
                        00:00
                    </h1>
                </div>
            }
        </div>
    )

}

export default CountdownTimer;