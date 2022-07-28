import { Link } from 'react-router-dom';
import Routes from 'routes/Routes';

const App = () => (
  <div id="app">
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <Routes />
    </main>

    <footer>my footer</footer>
  </div>
);

export default App;
