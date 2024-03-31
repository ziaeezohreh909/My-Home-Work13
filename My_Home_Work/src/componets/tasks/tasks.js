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
  thead.append(trHead);

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

  table.append(thead);
  div.append(table);
  return div;
};
