const getPreferredColorTheme = () => {
  if (!window.matchMedia) return;

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const getInitialTheme = () => {
  const isReturningUser = 'dark' in localStorage;
  const savedTheme = localStorage.getItem('dark');
  const userPrefersDark = getPreferredColorTheme();

  if (isReturningUser && savedTheme !== null) {
    return JSON.parse(savedTheme);
  } else if (userPrefersDark) {
    return true;
  } else {
    return false;
  }
};

export default getInitialTheme;
