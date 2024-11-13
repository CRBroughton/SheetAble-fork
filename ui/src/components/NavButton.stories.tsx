import type { Meta, StoryObj } from '@storybook/react';

import { NavButton } from './NavButton';

const meta = {
  title: 'Components/NavButton',
  component: NavButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof NavButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  render: args => (
    <NavButton {...args}>Hello</NavButton>
  ),
};
