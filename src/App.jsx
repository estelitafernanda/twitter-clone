import './App.css';
import logo from "./twitter.avif";
import FooterTP from './components/footer-tp';

function App() {
  return (
    <body>
      <div className='container'>
       <img src={logo} className='logo' alt="" />
      </div>
      <FooterTP></FooterTP>
    </body>
  );
}

export default App;
