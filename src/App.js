import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/index.js';
import SignInPage from './pages/signin.js';
import SignUpPage from './pages/signup.js';
import axios from 'axios';
import DashPage from './pages/dashboard.js';
import AccountInfoPage from './pages/accountinfo.js';
import TransactionsPage from './pages/transactions';
import AnalyticsPage from './pages/analytics';
import SubcriptionsPage from './pages/subcriptions';
import IncomesPage from './pages/incomes';

axios.defaults.withCredentials = true;

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path='/signin' element={<SignInPage/>}></Route>
        <Route exact path='/signup' element={<SignUpPage/>}></Route>
        <Route exact path='/accNo' element={<AccountInfoPage/>}></Route>
        <Route exact path='/dashboard' element={<DashPage/>}></Route>
        <Route exact path='/transactions' element={<TransactionsPage/>}></Route>
        <Route exact path='/analytics' element={<AnalyticsPage/>}></Route>
        <Route exact path='/subcriptions' element={<SubcriptionsPage/>}></Route>
        <Route exact path='/incomes' element={<IncomesPage/>}></Route>
      </Routes>
    </Router>
  );
};
export default App;


