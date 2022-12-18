import './App.css';
import Header from "./components/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div className="main-content">
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  );
}

export default App;
