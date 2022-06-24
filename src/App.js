
import { Provider } from 'react-redux';
import './App.css';
import { CardStep } from './components/CardStep';
import { store } from './storeRedux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CardStep />
      </div>
    </Provider>
  );
}

export default App;
