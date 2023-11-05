import {PlayLIst as Component} from './PlayLIst';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Play-Lİst',
  component: Component,
};

export const PlayLIst: Story = {
  // ...
};

export default meta;
