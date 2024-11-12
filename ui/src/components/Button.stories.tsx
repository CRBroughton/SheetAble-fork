import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  render: args => (
    <Button {...args}>Hello</Button>
  ),
};

export const Negative: Story = {
  render: args => (
    <Button {...args} intent="negative">Hello</Button>
  ),
};

export const Neutral: Story = {
  render: args => (
    <Button {...args} intent="neutral">Hello</Button>
  ),
};

export const Disabled: Story = {
  render: args => (
    <Button {...args} intent="disabled">Hello</Button>
  ),
};
