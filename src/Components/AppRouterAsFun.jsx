import { useState } from 'react';

let AppHooks = () => {

    let [counter, setCounter] = useState(0);

    return (
        <div className='text-center'>
            <input type={"button"} onClick={() => setCounter(counter += 1)} value="+" className="btn btn-outline-success" />
            |
            <input type={"button"} onClick={() => setCounter(counter -= 1)} value="-" className="btn btn-outline-danger" />
            <br />
            <span>You Clicked {counter} Times</span>

        </div>
    )
}

export default AppHooks;