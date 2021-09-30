import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask';
import { Header } from './components/Header';
import Login from './components/Login';
import Tasklist from './components/tasklist';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
      <Route exact path="/" component={Tasklist}/>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/add" component={AddTask}/>
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
