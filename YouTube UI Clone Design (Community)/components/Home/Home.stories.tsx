import {Home as Component} from './Home';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'home',
  component: Component,
};

export const Home: Story = {
  // ...
};

export default meta;
