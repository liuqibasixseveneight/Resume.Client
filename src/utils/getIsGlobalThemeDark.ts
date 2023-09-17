import { useAppSelector, RootState } from '../redux';

const getIsGlobalThemeDark = () =>
  useAppSelector((state: RootState) => state?.globalTheme?.isGlobalThemeDark);

export default getIsGlobalThemeDark;
