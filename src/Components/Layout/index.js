import React from 'react';
import CountdownTimer from '../CountdownTimer';

const Layout = () => {


    return (
        <div className='Layout'>
            <div>
                <h1 clasName='Title'>
                    Timer
                </h1>
            </div>

            <div>
                <input type='number' placeholder='0' />
                Minutes

                <input type='number' placeholder='0' />
                Seconds

                <button>Start</button>
            </div>

            <div>
                <button>Pause/Resume</button>
                <button>Reset</button>
            </div>

            <div>
                <CountdownTimer />
            </div>
        </div>
    )
}

export default Layout;