import React from 'react';
import Timer from '../TimerSetter';

const Layout = () => {

    // const PrintChangeToConsole = (e) => {
    //     console.log('Value changed to ' + e.target.value)
    // }

    return (
        <div className='Layout'>
            <div>
                <h1 clasName='Title'>
                    Timer
                </h1>
            </div>

            <div>
                <Timer />
            </div>
        </div>
    )
}

export default Layout;