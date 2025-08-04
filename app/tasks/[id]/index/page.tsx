"use client";

import React, { useEffect, useState } from "react";

type Task = {
  id: string;
  title: string;
  status: string;
  dueDate?: string;
};

type Column = {
  id: string;
  title: string;
  tasks: Task[];
};

const initialColumns: Column[] = [
  {
    id: "col-1",
    title: "To Do",
    tasks: [
      { id: "task-1", title: "Buy groceries", status: "pending" },
      { id: "task-2", title: "Call Mom", status: "pending" },
    ],
  },
  {
    id: "col-2",
    title: "In Progress",
    tasks: [{ id: "task-3", title: "Write report", status: "pending" }],
  },
];

export default function IndexPage() {
  const [createdTitle, setCreatedTitle] = useState("");
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const [newTasks, setNewTasks] = useState<{ [columnId: string]: string }>({});
  const [editingColumnId, setEditingColumnId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState("");

  useEffect(() => {
    const createdTitle = localStorage.getItem("createdTaskTitle");
    const createdId = localStorage.getItem("createdTaskId");

    if (createdTitle && createdId) {
      const newTask: Task = {
        id: createdId,
        title: createdTitle,
        status: "pending",
      };

      setCreatedTitle(createdTitle);

      setColumns((prevCols) =>
        prevCols.map((col) =>
          col.id === "col-1"
            ? { ...col, tasks: [newTask, ...col.tasks] }
            : col
        )
      );

    localStorage.removeItem("createdTaskTitle");
    localStorage.removeItem("createdTaskId");
    }
  }, []);

  const addColumn = () => {
    if (!newColumnTitle.trim()) return;
    const newCol: Column = {
      id: `col-${Date.now()}`,
      title: newColumnTitle,
      tasks: [],
    };
    setColumns((prev) => [...prev, newCol]);
    setNewColumnTitle("");
  };

  const addTaskToColumn = (columnId: string) => {
    const title = newTasks[columnId];
    if (!title?.trim()) return;

    const newTask: Task = {
      id: `task-${Date.now()}`,
      title,
      status: "pending",
    };

    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId ? { ...col, tasks: [...col.tasks, newTask] } : col
      )
    );

    setNewTasks((prev) => ({ ...prev, [columnId]: "" }));
  };

  const deleteColumn = (columnId: string) => {
    setColumns((prev) => prev.filter((col) => col.id !== columnId));
  };

  const startEditingTitle = (columnId: string, currentTitle: string) => {
    setEditingColumnId(columnId);
    setEditedTitle(currentTitle);
  };

  const saveEditedTitle = (columnId: string) => {
    setColumns((prev) =>
      prev.map((col) =>
        col.id === columnId ? { ...col, title: editedTitle } : col
      )
    );
    setEditingColumnId(null);
    setEditedTitle("");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        {createdTitle|| "My Task Board"}
      </h1>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((col) => (
          <div key={col.id} className="bg-white rounded shadow-md p-4 w-72 flex-shrink-0">
            <div className="flex justify-between items-center mb-3">
              {editingColumnId === col.id ? (
                <input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  onBlur={() => saveEditedTitle(col.id)}
                  autoFocus
                  className="border-b border-gray-400 outline-none text-lg font-semibold w-full"
                />
              ) : (
                <h2
                  className="font-semibold text-lg cursor-pointer"
                  onClick={() => startEditingTitle(col.id, col.title)}
                >
                  {col.title}
                </h2>
              )}
              <button
                onClick={() => deleteColumn(col.id)}
                className="text-red-500 hover:text-red-700 ml-2"
                title="Delete list"
              >
                &times;
              </button>
            </div>

            <div className="space-y-2">
              {col.tasks.length === 0 && (
                <p className="text-gray-400 italic">No tasks</p>
              )}
              {col.tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-gray-50 border border-gray-300 rounded p-2"
                >
                  <p className="font-medium">{task.title}</p>
                  <p className="text-xs text-gray-500">Status: {task.status}</p>
                </div>
              ))}
            </div>

            {/* Add new task */}
            <div className="mt-3">
              <input
                type="text"
                placeholder="Add task..."
                value={newTasks[col.id] || ""}
                onChange={(e) =>
                  setNewTasks((prev) => ({ ...prev, [col.id]: e.target.value }))
                }
                className="w-full mt-2 px-2 py-1 border border-gray-300 rounded"
              />
              <button
                onClick={() => addTaskToColumn(col.id)}
                className="mt-2 w-full bg-blue-600 text-white rounded px-3 py-1 hover:bg-blue-700 transition"
              >
                + Add Task
              </button>
            </div>
          </div>
        ))}

        {/* Add new column */}
        <div className="bg-white rounded shadow-md p-4 w-72 flex-shrink-0">
          <input
            type="text"
            placeholder="New list title"
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            className="mb-2 w-full px-3 py-2 rounded border border-gray-300 focus:outline-none"
          />
          <button
            onClick={addColumn}
            className="w-full bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition"
          >
            + Add List
          </button>
        </div>
      </div>
    </div>
  );
}
