
import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

import Task from './Task';

// these are fake functions that storybook will use when you interact with the task component
// It allows Storybook to log when you click a button without actually doing anything.
export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

const meta = {
  component: Task,     // tells storybook which component we're documenting. 
  title: 'Components/Task',       // how this component appears in Storybook UI
  tags: ['autodocs'],  // used for automatic documentation 
  excludeStories: /.*Data$/, // Prevents ActionsData from being treated as a "story." (It’s just helper data.)
  args: {                    //  This sets onArchiveTask and onPinTask automatically for all stories.
    ...ActionsData,
  },
} satisfies Meta<typeof Task>; // defines the Story type based on the meta. So every story we create will follow this format. 

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX', // out of the 3 (The task is in the inbox)
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED', // out of the 3 ((The task is pinned )
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED',
    },
  },
};