import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import theme from 'common/styles/theme';
import globalStyles from 'common/styles/global';

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Props) => (
  <MuiThemeProvider theme={theme}>
    <EmotionThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <CssBaseline />
      <ToastContainer />
      {children}
    </EmotionThemeProvider>
  </MuiThemeProvider>
);

export default ThemeProvider;
