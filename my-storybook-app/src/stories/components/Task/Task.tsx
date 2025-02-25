import type { TaskData } from './types';
  
  type TaskProps = {
    task: TaskData;   // should follow the prop structure of TaskData
    /** Event to change the task to archived */
    onArchiveTask: (id: string) => void;
    /** Event to change the task to pinned */
    onPinTask: (id: string) => void;
  };
  
  export default function Task({
    task: { id, title, state },  // task is an object and these are the properties 
    onArchiveTask,              // these are the functions you'll see when interacting with the task. 
    onPinTask,
  }: TaskProps) {
    return (
      <div className={`list-item ${state}`}>
        {/* Archived */}
        <label
            htmlFor={`archiveTask-${id}`}
            aria-label={`archiveTask-${id}`}
            className="checkbox"
        >
        <input 
            type="checkbox"
            disabled={true}
            name="checked"
            id={`archiveTask-${id}`}
            checked={state === "TASK_ARCHIVED"}
        /> 
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
        </label>


        <label
            htmlFor={`title-${id}`}
            aria-label={`aria-label-${title}`}
            className="title"
        >
        <input 
            type="text"
            value={title}
            readOnly={true}
            name="title"
            id={`title-${id}`}
            placeholder="Input title"
        /> 
        </label>

        {state !== "TASK_ARCHIVED" && (
            <button
                className="pin-button"
                onClick={() => onPinTask(id)}
                id={`pinTask-${id}`}
                aria-label={`pinTask-${id}`}
                key={`pinTask-${id}`}
            >
            <span className={`icon-star`} /> 
            </button>
        )}

      </div>
    );
  }