
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increament, reset,rangeUpdate } from './redux/counterSlice'
import { useState } from 'react'

function App() {

  const [range, setRange] = useState(0)
  console.log(range);
  

  const count = useSelector((state)=>state.counter.value)
  console.log(count);
  

  const dispatch = useDispatch()

  const handleRange =()=>{
    if(range){
      dispatch(rangeUpdate)(Number(range))
    }
    else{
      alert('Add a range')
    }

  }
  

  return (
    <>
    <div className="p-5 bg-light rounded d-flex justify-content-center align-items-center flex-column" style={{width:'500px'}}>
      <h1>Counter Application</h1>

      <h1 style={{fontsize:'150px'}} className='my-4'>{count}</h1>

      <div className="d-flex justify-content-between w-100">
        <button className='btn btn-warning p-3' onClick={()=>dispatch(decrement())}>Decrement</button>
        <button className='btn btn-danger p-3' onClick={()=>dispatch(reset())}>Reset</button>
        <button className='btn btn-success p-3' onClick={()=>dispatch(increament())}>Increment</button>
      </div>

      <div className="d-flex mt-4">
        <input type="text"  placeholder='Range' className='form-control' onChange={(e)=>setRange(e.target.value)}/>
        <button className='btn btn-primary ms-3' onClick={()=>dispatch(rangeUpdate(Number(range)))}>Increment by range</button>

      </div>

    </div>
      
          
    </>
  )
}

export default App
