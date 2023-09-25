import React from 'react';
import { useState, useEffect } from 'react';

//import Countdown from 'react-countdown';

const CountdownTimer = () => {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    return (
        <div>
            00:00
        </div>
    )

}

export default CountdownTimer;