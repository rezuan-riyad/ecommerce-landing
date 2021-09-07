import './app.css'
import LandingPage from './containers/LandingPage';
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
