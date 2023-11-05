import {HistoryFill as Component} from './HistoryFill';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'history-fill',
  component: Component,
};

export const HistoryFill: Story = {
  // ...
};

export default meta;
