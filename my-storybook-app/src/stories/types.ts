// blueprint for how the data should look like
export type TaskData = {
    id: string;  // will always be a string
    title: string;
    state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED'; // state can only be one of these options.
  };