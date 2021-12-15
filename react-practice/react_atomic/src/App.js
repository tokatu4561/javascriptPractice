import logo from './logo.svg';
import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { Router } from './router/Route';
import { UserProvider } from './providers/UserProvider';



function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
