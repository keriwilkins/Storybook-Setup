import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    // design: {
    //   type: 'figma',
    //   url: 'https://www.figma.com/design/8xlzYN0YouU38pmP0zD6bB/Content-Lion-Design-System?node-id=8-95',
    // },
    // zeplinLink: "https://www.figma.com/design/8xlzYN0YouU38pmP0zD6bB/Content-Lion-Design-System?node-id=8-95",
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'focused', 'selected', 'disabled'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    label: { control: 'text' },
    variant: {
      table: {
        disable: true,
      },
    },
    icon: {table: {disable: true,}}
  },
} 

export default meta;
type Story = StoryObj<typeof Button>;

export const Interactive: Story = {};

export const CTA: Story = {
  args: {
    label: 'Button',
    variant: 'cta',
    state: 'default',
    size: 'medium',
  },
};
export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    state: 'default',
    size: 'medium',
  },
};
export const Outline: Story = {
  args: {
    label: 'Button',
    variant: 'outline',
    state: 'default',
    size: 'medium',
  },
};
export const Borderless: Story = {
  args: {
    label: 'Button',
    variant: 'borderless',
    state: 'default',
    size: 'medium',
  },
};
export const Destructive: Story = {
  args: {
    label: 'Button',
    variant: 'destructive',
    state: 'default',
    size: 'medium',
  },
};