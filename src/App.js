import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderDashboard from './components/OrderDashboard/OrderDashboard';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <OrderDashboard></OrderDashboard>
    </div>
  );
}

export default App;

