import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import { increment, incrementByAmount } from "./redux/counter";
import { decrement } from "./redux/counter";

function App() {
  const {value} =useSelector(state=>state.counter);
  const dispatch=useDispatch();
  return (
    <>
    <h1> Count {value}</h1>
    <button onClick={()=>dispatch(increment())}>Like</button>
    <button onClick={()=>dispatch(decrement())}>Unlike</button>
    <button onClick={()=>dispatch(incrementByAmount(33))}>Increment by 33</button>
  
      
    </>
  )
}

export default App
