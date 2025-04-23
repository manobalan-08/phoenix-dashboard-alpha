
import React, { useState } from "react";

const initialTasks = [
  { id: 1, title: "Design UI for app", status: "To Do" },
  { id: 2, title: "API integration", status: "In Progress" },
  { id: 3, title: "Write docs", status: "Done" },
];

const statuses = ["To Do", "In Progress", "Done"];

export function ScrumBoard() {
  const [tasks, setTasks] = useState(initialTasks);

  // Simple drag-and-drop: not implemented for brevity. Tasks can be moved via buttons.
  const moveTask = (id: number, newStatus: string) => {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, status: newStatus } : t)
    );
  };

  return (
    <div className="my-10">
      <h2 className="text-xl font-semibold mb-4">Scrum Board</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {statuses.map(status => (
          <div key={status} className="bg-white border rounded-lg shadow p-3 min-h-[200px] flex flex-col">
            <div className="font-bold mb-3 text-center">{status}</div>
            <div className="flex-1 space-y-3">
              {tasks.filter(t => t.status === status).length === 0 && (
                <div className="text-muted-foreground text-center text-sm">No tasks</div>
              )}
              {tasks
                .filter(t => t.status === status)
                .map(task => (
                  <div key={task.id} className="bg-gray-50 border p-2 rounded flex items-center justify-between shadow-sm">
                    <span>{task.title}</span>
                    <div className="flex gap-1">
                      {statuses.map(
                        s => s !== status && (
                          <button
                            key={s}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded hover:bg-primary/20"
                            onClick={() => moveTask(task.id, s)}
                          >
                            {s}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
