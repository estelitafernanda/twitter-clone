import './App.css';
import FooterTP from './components/footer-tp';

function App() {
  return (
    <body>
      <div className='container'>
        <div className="container2">
                <svg className='container3' viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path className='logo' d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
              </svg>
            </div>
          <div className='container4'>
            <div className="container5">
              <p className="p-now">Está acontecendo agora</p>
              <p className="p-register">Registre-se</p>
            </div>
            <div className="container6">
              <button className="google">Se conecte através do Google</button>
              <button className="apple">Inscreva-se na Apple</button>
              <div className="traco">
                <p className="or">ou 
                  <div className="traco"></div>
                </p>
              </div>
              <button className="create">Crie uma conta</button>
              </div>
            </div>
       </div>
      <FooterTP></FooterTP>
    </body>
  );
}

export default App;
