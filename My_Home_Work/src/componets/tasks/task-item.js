export const TaskItem = (id, title, priority, status, deadline) => {
  const taskRow = document.createElement("tr");

  const titleTd = document.createElement("td");
  titleTd.classList.add("border", "border-slate-300", "h-15", "p-2");
  titleTd.innerText = title;

  let priorityTd = document.createElement("td");
  priorityTd.classList.add("border", "border-slate-300", "h-15", "text-center");
  priorityTd.append(RenderPriority(priority));

  let statusTd = document.createElement("td");
  statusTd.classList.add("border", "border-slate-300", "h-15", "text-center");
  statusTd.append(RenderStatus(status));

  let deadlineTd = document.createElement("td");
  deadlineTd.classList.add("border", "border-slate-300", "h-15", "text-center");
  let btnDeadline = document.createElement("button");
  btnDeadline.classList.add(
    "border",
    "border-blue-300",
    "rounded-full",
    "w-28",
    "lining-nums"
  );
  btnDeadline.innerText = deadline;
  deadlineTd.append(btnDeadline);

  let actionTd = document.createElement("td");
  actionTd.classList.add("border", "border-slate-300", "h-15", "text-center");
  let btnDelete = document.createElement("button");
  btnDelete.classList.add(
    "border",
    "border-red-600",
    "bg-red-600",
    "rounded-md",
    "w-5",
    "h-5",
    "m-2"
  );
  btnDelete.setAttribute("id", "delete");
  let deleteIcon = document.createElement("img");
  deleteIcon.src = "./image/mingcute--delete-fill.svg";
  // btnDelete.addEventListener("click", () => deletItem(item.id));
  btnDelete.append(deleteIcon);
  actionTd.append(btnDelete);

  let btnEdit = document.createElement("button");
  btnEdit.classList.add(
    "border",
    "border-blue-600",
    "bg-blue-600",
    "rounded-md",
    "w-5",
    "h-5",
    "m-2"
  );
  let editIcon = document.createElement("img");
  editIcon.src = "./image/mdi--edit.svg";
  // btnEdit.addEventListener("click", () => viewModals(item));
  btnEdit.append(editIcon);
  actionTd.append(btnEdit);

  let btnView = document.createElement("button");
  btnView.classList.add(
    "border",
    "border-gray-500",
    "bg-gray-500",
    "rounded-md",
    "w-5",
    "h-5",
    "m-2"
  );
  let viewIcon = document.createElement("img");
  viewIcon.src = "./image/carbon--view-filled.svg";
  // btnView.addEventListener("click", () => ViewItem(item.id));
  btnView.append(viewIcon);
  actionTd.append(btnView);

  taskRow.appendChild(titleTd);
  taskRow.appendChild(priorityTd);
  taskRow.appendChild(statusTd);
  taskRow.appendChild(deadlineTd);
  taskRow.appendChild(actionTd);

  return taskRow;
};

export const RenderPriority = (priority) => {
  const btn = document.createElement("button");
  btn.innerHTML = priority;
  btn.classList.add("rounded-full");
  if (priority === "Low") {
    btn.classList.add("bg-gray-300", "w-12");
  } else if (priority === "High") {
    btn.classList.add("bg-red-600", "w-16");
  } else if (priority === "Medium") {
    btn.classList.add("bg-orange-600", "border-collapse", "w-20");
  } else {
    btn.classList.add("bg-white", "border-solid", "w-20");
  }
  return btn;
};

export const RenderStatus = (status) => {
  const btn = document.createElement("button");
  btn.innerHTML = status;
  btn.classList.add("rounded-full");
  if (status === "To Do") {
    btn.classList.add("bg-red-600", "w-14", "text-white");
  } else if (status === "Doing") {
    btn.classList.add("bg-orange-600", "w-16");
  } else if (status === "Done") {
    btn.classList.add("bg-green-600", "w-16", "text-white");
  } else {
    btn.classList.add("bg-white", "w-16");
  }
  return btn;
};
