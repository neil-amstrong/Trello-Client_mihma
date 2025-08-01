"use client";

import React, { useState } from "react";

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

const index = () => {
  const [boardTitle, setBoardTitle] = useState("My Task Board");
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [newColumnTitle, setNewColumnTitle] = useState("");

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

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Board Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{boardTitle}</h1>
      </div>

      {/* Columns Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {columns.map((col) => (
          <div
            key={col.id}
            className="bg-white rounded shadow-md p-4 w-full"
          >
            <h2 className="font-semibold mb-3 border-b pb-1">{col.title}</h2>
            <div className="space-y-2">
              {col.tasks.length === 0 && (
                <p className="text-gray-400 italic">No tasks here</p>
              )}

              {col.tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-gray-50 border border-gray-300 rounded p-2 cursor-pointer hover:bg-gray-100"
                >
                  <p className="font-medium">{task.title}</p>
                  <p className="text-xs text-gray-500">Status: {task.status}</p>
                  {task.dueDate && (
                    <p className="text-xs text-gray-400">Due: {task.dueDate}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Add New Column */}
        <div className="flex flex-col justify-center bg-white rounded shadow-md p-4 w-full">
          <input
            type="text"
            placeholder="New column title"
            value={newColumnTitle}
            onChange={(e) => setNewColumnTitle(e.target.value)}
            className="mb-2 w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addColumn}
            className="w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
          >
            + Add List
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
