import React, { useState } from 'react'


function Home() {

    const [count, setCount] = useState(0)
    return (
        <div className='main'>
            <div className="card">
                <div>
                    Count : {count}
                </div>
                <br />
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <br />
                <button onClick={()=> setCount(count-1)}>Decrease</button>
            </div>
        </div>
    )
}

export default Home