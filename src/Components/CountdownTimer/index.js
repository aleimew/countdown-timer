import React from 'react';
import { useState, useEffect } from 'react';

//import Countdown from 'react-countdown';

const CountdownTimer = (props) => {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [isCountingDown, setIsCountingDown] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [hasBeenReset, setHasBeenReset] = useState(false);

    useEffect(() => {
        if (isCountingDown) {
            setTimeout(() => { CountDownBySeconds() }, 1000);
        }
        HasCountdownFinsihed();
    });

    useEffect(() => {
        if (hasBeenReset) {
            setTimeout(() => { setHasBeenReset(false) }, 1000);
        }
    })

    const StartCountdown = () => {
        if (props.minutes !== 0 || props.seconds !== 0) {
            setIsCountingDown(true);
            setIsPaused(false);
            setMinutes(props.minutes);
            setSeconds(props.seconds);

            if (props.seconds > 59) {
                calculateSecondsOverload();
            }
        }
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
        setHasBeenReset(true);
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

    const HasCountdownFinsihed = () => {
        if (minutes === 0 && seconds === 0) {
            setIsCountingDown(false);
        }
    }

    const PrintInitalTimerState = () => {
        return (
            <div>
                <div>
                    {!hasBeenReset ?
                        <div>
                            <div>
                                <button onClick={StartCountdown}>Start</button>
                            </div>

                            <h1 className='Timer'>
                                00:00
                            </h1>
                        </div>
                        :
                        <h1 className='Timer'>
                            00:00
                        </h1>
                    }
                </div>
            </div>
        );
    }

    const PrintProperTimeFormat = () => {
        if (seconds < 10) {
            if (minutes < 10) {
                return ("0" + minutes + ":0" + seconds);
            }
            else {
                return (minutes + ":0" + seconds);
            }
        }
        else {
            if (minutes < 10) {
                return ("0" + minutes + ":" + seconds);
            }
        }
        return (minutes + ":" + seconds);
    }

    const PrintAvalibleOptions = () => {
        return (
            <div>
                {!isPaused ?
                    <button onClick={ChangePauseState}>Pause</button>
                    :
                    <button onClick={ChangePauseState}>Resume</button>
                }
                <button onClick={StopCountdown}>Reset</button>
            </div>
        );
    }

    const calculateSecondsOverload = () => {
        const minutesOverload = Math.floor(props.seconds / 60);
        const secondsOverload = props.seconds % 60;

        setMinutes(Number(props.minutes) + Number(minutesOverload));
        setSeconds(secondsOverload);
    }

    return (
        <div>
            {isCountingDown ?
                <div>
                    {PrintAvalibleOptions()}
                    <h1 className='Timer'>
                        {PrintProperTimeFormat()}
                    </h1>
                </div>
                :
                <div>
                    {PrintInitalTimerState()}
                </div>
            }
        </div>
    )

}

export default CountdownTimer;