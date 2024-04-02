import { TaskItem } from "./task-item";
import { getAllTasks } from "../../api/api";

let taskList = await getAllTasks();

// let taskList = [
//   {
//     id: "1",
//     title: "task1",
//     priority: "High",
//     status: "Done",
//     deadline: "2023-12-03",
//   },
//   {
//     id: "2",
//     title: "task2",
//     priority: "Low",
//     status: "Doing",
//     deadline: "2023-11-03",
//   },
//   {
//     id: "3",
//     title: "task3",
//     priority: "Low",
//     status: "To Do",
//     deadline: "2023-11-09",
//   },
// ];
export const Tasks = () => {
  const div = document.createElement("div");
  div.classList.add("table", "w-full");
  const table = document.createElement("table");
  table.setAttribute("id", "taskTable");
  table.classList.add(
    "font-serif",
    "border-collapse",
    "border",
    "border-slate-300",
    "w-full"
  );

  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  const taskNameCol = document.createElement("th");
  taskNameCol.classList.add("border", "border-slate-300", "h-16");
  taskNameCol.innerText = "Task Name";
  const priorityCol = document.createElement("th");
  priorityCol.classList.add("border", "border-slate-300", "h-16");
  priorityCol.innerText = "Priority";
  const statusCol = document.createElement("th");
  statusCol.classList.add("border", "border-slate-300", "h-16");
  statusCol.innerText = "Staus";
  const deadlineCol = document.createElement("th");
  deadlineCol.classList.add("border", "border-slate-300", "h-16");
  deadlineCol.innerText = "Deadline";
  const actionsCol = document.createElement("th");
  actionsCol.classList.add("border", "border-slate-300", "h-16");
  actionsCol.innerText = "Actions";
  trHead.append(taskNameCol, priorityCol, statusCol, deadlineCol, actionsCol);
  thead.append(trHead);
  table.append(thead);
  for (const task of taskList) {
    table.append(
      TaskItem(task.id, task.title, task.priority, task.status, task.deadline)
    );
  }

  div.append(table);
  return div;
};
