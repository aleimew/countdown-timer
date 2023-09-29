import React from "react";
import { useState, useEffect } from "react";
import CountdownTimer from "../CountdownTimer";

//import Countdown from 'react-countdown';

const Timer = () => {
    const [minuteSetter, setMinuteSetter] = useState(0);
    const [secondSetter, setSecondSetter] = useState(0);

    useEffect(() => {
        // console.log("Current Values:");
        // console.log("Minutes: " + minuteSetter);
        // console.log("Seconds: " + secondSetter);
    }, [minuteSetter, secondSetter]);

    const SetInitialMinute = (e) => {
        setMinuteSetter(e.target.value);
    }

    const SetInitialSecond = (e) => {
        setSecondSetter(e.target.value);
    }

    // const PrintValuesToConsole = () => {
    //     console.log("Current Values:");
    //     console.log("Minutes: " + minuteSetter);
    //     console.log("Seconds: " + secondSetter);
    // }

    return (
        <div>
            <input
                type='number'
                placeholder='0'
                onChange={SetInitialMinute}
            />
            Minutes

            <input
                type='number'
                placeholder='0'
                onChange={SetInitialSecond}
            />
            Seconds

            <div>
                <CountdownTimer
                    minutes={minuteSetter}
                    seconds={secondSetter}
                />
            </div>
        </div>
    )
}

export default Timer;