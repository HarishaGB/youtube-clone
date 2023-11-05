import {SidebarMenuTitle as Component} from './SidebarMenuTitle';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Sidebar/Menu-Title',
  component: Component,
};

export const SidebarMenuTitle: Story = {
  // ...
};

export default meta;
