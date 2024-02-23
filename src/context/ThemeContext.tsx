import React from 'react';

type ThemeContextType = {
  /**
   * 'dark' | 'light'.
   */
  theme: 'dark' | 'light';
  /**
   * theme updating handler
   */
  updateTheme?: () => void;
};

const defaultState: { theme: 'dark' | 'light' } = {
  theme: 'dark'
};

const ThemeContext: React.Context<ThemeContextType> = React.createContext(defaultState);
const ThemeProvider = ThemeContext.Provider;
/**
 * Consumer for theme contexts providing.
 * @param {ThemeContextType['theme']} theme 'dark' | 'light'.
 * @param {ThemeContextType['updateTheme']} updateTheme theme updating handler.
 */
const ThemeConsumer = ThemeContext.Consumer;

export { ThemeContext, ThemeProvider, ThemeConsumer, defaultState };
