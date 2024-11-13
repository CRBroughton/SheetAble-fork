import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import React, { useEffect } from 'react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      parentSelector: 'body',
    }),

    (Story, context) => {
      const themeClass = context.globals?.theme || 'light';
      const backgroundClass = themeClass === 'dark' ? 'dark:bg-dark-background' : 'bg-light-background';

      const body = document.body;
      const storyRoot = document.getElementById('storybook-root');

      body.style.height = '100vh';
      body.style.margin = '0';
      body.style.width = '100vw';

      if (storyRoot) {
        storyRoot.style.height = '100vh';
        storyRoot.style.width = '100vw';
      }

      return (
        <div
          className={backgroundClass}
          style={{ height: '100%', width: '100%', margin: '0' }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
