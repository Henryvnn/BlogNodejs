import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './stores/slices/counterSlice';

//useSelector dung lay du lieu tu redux
//useDispatch goi action
function App() {
    const dispatch = useDispatch()
    const number = useSelector(state => state.counter.number)

    console.log('number')
    const handleIncrement = () => {
        dispatch(increment({ number: 10 }))
    }

    return (
        // <RouterProvider router={router} />
        <div>
            <h1>{number}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}

export default App;
