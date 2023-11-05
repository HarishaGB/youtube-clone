import {UserAvatar as Component} from './UserAvatar';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'User-Avatar',
  component: Component,
};

export const UserAvatar: Story = {
  // ...
};

export default meta;
