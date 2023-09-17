import { createSlice } from '@reduxjs/toolkit';

import { getInitialTheme } from '../../utils';

export interface InitialState {
  isGlobalThemeDark: boolean;
}

const initialState: InitialState = {
  isGlobalThemeDark: getInitialTheme(),
};

export const globalThemeSlice = createSlice({
  name: 'globalTheme',
  initialState,
  reducers: {
    setIsGlobalThemeDark: (state) => {
      state.isGlobalThemeDark = !state?.isGlobalThemeDark;
      localStorage.setItem('isDarkTheme', state?.isGlobalThemeDark?.toString());
    },
  },
});

export default globalThemeSlice.reducer;
export const { setIsGlobalThemeDark } = globalThemeSlice.actions;
