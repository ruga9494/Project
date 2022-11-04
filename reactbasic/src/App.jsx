// import { flushSync } from 'react-dom';
import './App.css';
import { My } from './components/My';
import { SessionProvider } from './hooks/session-context';

function App() {
  // const [count, setCount] = useState(0);
  // const plusCount = () => setCount(count + 1);
  // const minusCount = () => setCount(count - 1);

  // action : {type: 'plus' | 'minus', payload: count}

  return (
    <div className='App'>
      <SessionProvider>
        <My />
      </SessionProvider>

      <hr />
    </div>
  );
}

export default App;
