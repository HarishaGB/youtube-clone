import {PremiumFill as Component} from './PremiumFill';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'premium-fill',
  component: Component,
};

export const PremiumFill: Story = {
  // ...
};

export default meta;
