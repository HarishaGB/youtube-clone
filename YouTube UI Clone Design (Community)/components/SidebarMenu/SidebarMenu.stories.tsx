import {SidebarMenu as Component} from './SidebarMenu';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Sidebar/Menu',
  component: Component,
};

export const SidebarMenu: Story = {
  // ...
};

export default meta;
