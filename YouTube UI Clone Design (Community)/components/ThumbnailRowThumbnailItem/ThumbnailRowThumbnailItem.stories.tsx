import {ThumbnailRowThumbnailItem as Component} from './ThumbnailRowThumbnailItem';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'Thumbnail/Row/Thumbnail-Item',
  component: Component,
};

export const ThumbnailRowThumbnailItem: Story = {
  // ...
};

export default meta;
