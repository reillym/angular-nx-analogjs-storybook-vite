import { type Preview } from '@analogjs/storybook-angular';

const preview: Preview = {
  decorators: [],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;
