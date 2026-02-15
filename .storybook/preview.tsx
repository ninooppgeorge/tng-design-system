import type { Preview } from '@storybook/react-vite'
import '../theme.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo'
    },
    backgrounds: { disable: true },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Theme mode',
      defaultValue: 'light',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    accent: {
      name: 'Accent',
      description: 'Accent color',
      defaultValue: 'blue',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'blue', title: 'Blue' },
          { value: 'purple', title: 'Purple' },
          { value: 'red', title: 'Red' },
          { value: 'green', title: 'Green' },
          { value: 'orange', title: 'Orange' },
          { value: 'pink', title: 'Pink' },
          { value: 'teal', title: 'Teal' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      const accent = context.globals.accent || 'blue';

      return (
        <div className="tng-root" data-tng-theme={theme} data-tng-accent={accent} style={{ padding: '1rem', minHeight: '100%' }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
