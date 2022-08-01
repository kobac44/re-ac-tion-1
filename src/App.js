import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <div className="content">
          <h1>Drop and Drag</h1>
        </div>
      </DndProvider>
    </div>
  ); 
}

export default App;
