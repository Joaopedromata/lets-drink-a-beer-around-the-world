import Page from './components/Page';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles'
import Theme from './styles/Theme'

function App() {
  return (
    <>
      <GlobalStyles />
      <Theme>
        <Page>
          <Routes />
        </Page>
      </Theme>
    </>
  );
}

export default App;
