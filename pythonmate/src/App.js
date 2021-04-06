import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { FormToFill } from './FormToFill'
import { ShowShifts } from './ShowShifts'
 
function App() {
  return (
    <Router>
      <Route path='/shifts' exact>
        <ShowShifts/>
      </Route>
      <Route path='/' exact>
        <div className="App p-5">
          <FormToFill/>
        </div>
      </Route>
    </Router>
  );
}

export default App;
