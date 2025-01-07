import './App.css';
import Chat from './pages/chat/Chat';
import Home from './pages/Home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/chat' element={<Chat/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
