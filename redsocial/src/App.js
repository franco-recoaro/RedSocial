import './App.css';
import { NavBar } from './components';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
