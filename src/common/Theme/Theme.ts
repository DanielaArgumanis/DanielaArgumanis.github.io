// @Theme
import { palette } from './Palette';
import { animations } from './Animations';
import { breakpoints } from './Breakpoints';
import { getTypography } from './TypographyVariants';
import { spacing } from './Spacing';
import { sizing } from './Sizing';

// @Types
import { ThemeType } from './Theme.types';

const getTheme = (
  routeOrder: number,
  colorMode: 'dark' | 'light',
): ThemeType => {
  return {
    animations,
    breakpoints,
    colorMode: colorMode,
    typography: getTypography(colorMode),
    palette: {
      ...palette[colorMode],
      accent: palette[colorMode].accents[routeOrder % 4],
    },
    sizing,
    spacing,
  };
};

export default getTheme;
