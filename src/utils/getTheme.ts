import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const getTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export default getTheme;
