import {FooterItemsItem as Component} from './FooterItemsItem';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Footer/Items/Item',
  component: Component,
};

export const FooterItemsItem: Story = {
  // ...
};

export default meta;
