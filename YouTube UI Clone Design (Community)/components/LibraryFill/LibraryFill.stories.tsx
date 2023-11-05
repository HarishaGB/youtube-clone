import {LibraryFill as Component} from './LibraryFill';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'library-fill',
  component: Component,
};

export const LibraryFill: Story = {
  // ...
};

export default meta;
