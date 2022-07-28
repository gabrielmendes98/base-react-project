import Routes from 'routes/Routes';
import ThemeProvider from 'common/providers/Theme';
import MainLayout from 'components/Layouts/Main';

const App = () => (
  <ThemeProvider>
    <MainLayout>
      <Routes />
    </MainLayout>
  </ThemeProvider>
);

export default App;
