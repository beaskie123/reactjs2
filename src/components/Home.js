import React from 'react'
import {useHistory} from 'react-router-dom'

const Home = () => {

    const History = useHistory()

    const handleOnclick = () => {
        History.push('./todo')
    }

    return (
            <div className='home-main'>
                <h1>Welcome to my HOME</h1>
                <button onClick={handleOnclick}>PUSH</button>
            </div>
    )    
}

export default Home