import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.scss';
import {Footer, Header} from './components/all.components'
import {MintingPage, MainPage, LianaPage} from './pages/all.pages'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  return <>
    <Header />
    <main>
      <Router>
        <Switch>
          <Route exact path={'/'} component={MainPage} />
          <Route path={'/minting'} component={MintingPage} />
          <Route path={'/liana'} component={LianaPage} />
        </Switch>
      </Router>
      <Footer />
    </main>
  </>
}

export default App;
