import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import UserInput from './components/UserInput';
import UserDelete from './components/UserDelete';

function App() {
  return (
    <div className="App">
      <h1> React Axios Practise</h1>
      <UserInput/>
      <UserDelete/>
      <UserList/>
    </div>
  );
}

export default App;
