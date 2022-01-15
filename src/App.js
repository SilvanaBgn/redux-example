import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>Increment +5</button>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
      {isLogged ? <p>Valuable info I shouldn't see</p> : ''}
    </div>
  );
}

export default App;
