import { useEffect, type FC } from 'react';
import { styled, ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import { ClosedRoute, OpenRoute } from './components/containers';
import { getIsGlobalThemeDark } from './utils';
import { darkTheme, lightTheme } from './themes';

const Wrapper = styled.div`
  background: ${({ theme }) => theme?.palette?.primary?.background};
  height: 100%;
  min-height: 100vh;
`;

const App: FC = () => {
  const isGlobalThemeDark = getIsGlobalThemeDark();

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(isGlobalThemeDark));
  }, [isGlobalThemeDark]);

  return (
    <ThemeProvider theme={isGlobalThemeDark ? darkTheme : lightTheme}>
      <Wrapper>
        <Routes>
          <Route path='/' Component={OpenRoute} />
          <Route path='*' Component={ClosedRoute} />
        </Routes>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
