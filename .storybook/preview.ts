import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    parameters: {
      options: {
        storySort: {
          method: "alphabetical",
          order: ["GettingStarted", "*"],
          includeNames: true,
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
