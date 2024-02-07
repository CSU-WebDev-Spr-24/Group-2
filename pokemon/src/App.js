
import './App.css';
import  ReactDOM from 'react-dom';
import Board from './Board';

function App() {
  return (
    ReactDOM.render(
      <Board cardPosition={[7,4]} />,
      document.getElementById('root')
    )
  );
}

export default App;
