import React from 'react';
import { useState, useEffect } from 'react';

//import Countdown from 'react-countdown';

const CountdownTimer = (props) => {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [isCountingDown, setIsCountingDown] = useState(false);

    useEffect(() => {

    });

    const StartCountdown = () => {
        setIsCountingDown(true);
        setMinutes(props.minutes);
        setSeconds(props.seconds);
    }

    const StopCountdown = () => {
        setIsCountingDown(false);
        setMinutes(0);
        setSeconds(0);
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
                <button>Pause/Resume</button>
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