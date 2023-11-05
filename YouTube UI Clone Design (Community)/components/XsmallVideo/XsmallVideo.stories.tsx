import {XsmallVideo as Component} from './XsmallVideo';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Xsmall-Video',
  component: Component,
};

export const XsmallVideo: Story = {
  // ...
};

export default meta;
