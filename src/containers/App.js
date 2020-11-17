import './App.css';
import Header from '../components/Header';
import Products from '../components/Products';
import Summary from '../components/Summary';
import GlobalStateProvider from '../store/GlobalStateProvider';

function App() {
  return (
    <GlobalStateProvider>
      <div class="out">
        <div className="wrapper">
          <Header/>
          <div className="container">
            <Products/>
            <Summary/>
          </div>
        </div>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
