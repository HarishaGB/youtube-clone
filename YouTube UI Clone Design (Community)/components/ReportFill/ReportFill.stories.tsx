import {ReportFill as Component} from './ReportFill';
import type {StoryObj, Meta} from '@storybook/react';

type Story = StoryObj<typeof Component>;

const meta: Meta<typeof Component> = {
  title: 'report-fill',
  component: Component,
};

export const ReportFill: Story = {
  // ...
};

export default meta;
