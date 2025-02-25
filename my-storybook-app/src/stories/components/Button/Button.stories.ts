import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

// so for a component i have one components (which would be button) but many variants ()
// primary  hover state Focus State diabled state (Boolean)  then Outline same states + Action (same sta) ? 

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/8xlzYN0YouU38pmP0zD6bB/Content-Lion-Design-System?node-id=8-95',
    },
    // zeplinLink: "https://www.figma.com/design/8xlzYN0YouU38pmP0zD6bB/Content-Lion-Design-System?node-id=8-95",
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// All Story Types
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
