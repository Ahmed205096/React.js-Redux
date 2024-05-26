import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { deposit, withdrow } from './Redux/Actions/BanckActions';

function App() {
  const state = useSelector(state=>state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h3>Avilable Balance Is : {state}</h3>
      <button onClick={()=>dispatch(deposit)}>Deposit</button>
      {(state) ? <button onClick={()=>dispatch(withdrow)}>Withdrow</button> : null}
    </div>
  );
}

export default App;