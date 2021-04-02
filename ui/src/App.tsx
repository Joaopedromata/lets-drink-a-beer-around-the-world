import Page from './components/Page';
import Routes from './routes';
import BeerState from './states/BeerState';
import GlobalStyles from './styles/GlobalStyles'
import Theme from './styles/Theme'

function App() {
  return (
    <>
      <GlobalStyles />
      <Theme>
        <BeerState>
          {() => (
            <Page>
              <Routes />
            </Page>
          )}  
        </BeerState>
      </Theme>
    </>
  );
}

export default App;
