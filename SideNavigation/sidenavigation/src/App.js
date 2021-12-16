import './App.css';
import { ChackraProvider } from '@chackra-ui/react';

function App() {
  return (
  <ChackraProvider>
    <div className="App">
      <header className="App-header">
      Some Content
      </header>
    </div>
    </ChackraProvider>
  );
}

export default App;
