import {ThumbnailImages as Component} from './ThumbnailImages';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Thumbnail/Images',
  component: Component,
};

export const ThumbnailImages: Story = {
  // ...
};

export default meta;
