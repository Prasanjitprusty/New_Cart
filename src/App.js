import logo from './logo.svg';
import './App.css';
import Users from './Users';

function App() {
  return (
    <div className="App">
    <h1> App Component</h1>
    <Users data={{name:'Prasanjit Prusty' , age: 27 }} />
    </div>
  );
}

export default App;
