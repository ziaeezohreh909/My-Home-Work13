
export const Modal = (task, action, callback) => {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add(
    "w-full",
    "h-full",
    "fixed",
    "inset-0",
    "z-50",
    "flex",
    "justify-center",
    "items-center"
  );

  const modal = document.createElement("div");
  modal.innerHTML = "";
  modal.classList.add("fixed", "w-96", "bg-blue-200");
  modalContainer.append(modal);

  const closeModalDiv = document.createElement("div");
  closeModalDiv.classList.add("flex", "justify-end", "px-3", "py-2");
  modal.append(closeModalDiv);
  const closeIcon = document.createElement("img");
  closeIcon.src = `./img/gg--close-r.svg`;
  closeIcon.addEventListener("click", () => closeModal());
  closeModalDiv.append(closeIcon);

  const modalContent = document.createElement("div");
  modalContent.classList.add("font-serif", "flex", "flex-col", "p-3");
  modal.append(modalContent);

  const form = document.createElement("form");
  modalContent.append(form);

  const divTask = document.createElement("div");
  const taskLable = document.createElement("label");
  taskLable.innerText = "Task Name: ";
  divTask.append(taskLable);
  const taskName = document.createElement("input");
  taskName.setAttribute("type", "text");
  taskName.setAttribute("id", "taskName");
  taskName.setAttribute("placeholder", "Name Task");
  taskName.classList.add(
    "px-4",
    "py-2",
    "mt-2",
    "text-gray-700",
    "border",
    "border-gray-300",
    "rounded-md"
  );
  if (task !== undefined) {
    taskName.value = task.title;
  }
  divTask.append(taskName);

  const priorityDiv = document.createElement("div");
  const priorityLable = document.createElement("label");
  priorityLable.innerText = "Priority: ";
  const prioritySelector = document.createElement("select");
  priorityDiv.append(priorityLable, prioritySelector);
  prioritySelector.classList.add(
    "px-4",
    "py-3",
    "mt-2",
    "mx-6",
    "text-gray-700",
    "bg-white",
    "border",
    "border-gray-300",
    "rounded-md"
  );
  const optionSelect = document.createElement("option");
  optionSelect.value = "Select";
  optionSelect.textContent = "Select";
  const optionHigh = document.createElement("option");
  optionHigh.value = "High";
  optionHigh.textContent = "High";
  const optionMedium = document.createElement("option");
  optionMedium.value = "Medium";
  optionMedium.textContent = "Medium";
  const optionLow = document.createElement("option");
  optionLow.value = "Low";
  optionLow.textContent = "Low";
  prioritySelector.append(optionSelect, optionHigh, optionMedium, optionLow);
  if (task !== undefined) {
    prioritySelector.value = task.priority;
  }
  const statusDiv = document.createElement("div");
  const statusLable = document.createElement("label");
  statusLable.innerText = "Status: ";
  const statusSelector = document.createElement("select");
  statusSelector.classList.add(
    "px-4",
    "py-2",
    "mt-2",
    "mx-8",
    "text-gray-700",
    "bg-white",
    "border",
    "border-gray-300",
    "rounded-md",
    "shadow-sm",
    "focus:outline-none",
    "focus:ring-indigo-500",
    "focus:border-indigo-500"
  );
  const optionSelectStatus = document.createElement("option");
  optionSelectStatus.value = "Select";
  optionSelectStatus.textContent = "Select";
  const optionToDo = document.createElement("option");
  optionToDo.value = "To Do";
  optionToDo.textContent = "To Do";
  const optionDoing = document.createElement("option");
  optionDoing.value = "Doing";
  optionDoing.textContent = "Doing";
  const optionDone = document.createElement("option");
  optionDone.value = "Done";
  optionDone.textContent = "Done";
  statusSelector.append(
    optionSelectStatus,
    optionToDo,
    optionDoing,
    optionDone
  );
  statusDiv.append(statusLable, statusSelector);
  if (task !== undefined) {
    statusSelector.value = task.status;
  }

  const deadlineDiv = document.createElement("div");
  const deadlineLable = document.createElement("label");
  deadlineLable.innerText = "Deadline: ";
  const deadline = document.createElement("input");
  deadline.setAttribute("type", "date");
  deadline.setAttribute("id", "deadline");
  deadline.setAttribute("placeholder", "Deadline");
  deadline.classList.add(
    "px-4",
    "py-2",
    "mt-2",
    "mx-3",
    "text-gray-300",
    "bg-white",
    "border",
    "border-gray-300",
    "rounded-md"
  );
  deadlineDiv.append(deadlineLable, deadline);
  if (task !== undefined) {
    deadline.value = task.deadline;
  }

  const btnDiv = document.createElement("div");
  const button = document.createElement("button");
  button.classList.add(
    "bg-blue-400",
    "w-full",
    "p-1",
    "shadow-md",
    "rounded-md",
    "mt-3"
  );
  //   if (state === "ADD") {
  button.setAttribute("type", "submit");
  button.textContent = `Add To List`;
  //   } else if (task === "Edit") {
  //     button.setAttribute("type", "button");
  //     button.textContent = `Edit`;
  //     button.addEventListener("click", () => callback());
  //   }else{
  //     button.setAttribute("type", "submit");
  //     button.textContent = `Confirm`;
  //   }
  btnDiv.append(button);
  form.appendChild(divTask);
  form.appendChild(priorityDiv);
  form.appendChild(statusDiv);
  form.appendChild(deadlineDiv);
  form.appendChild(btnDiv);
  return modalContainer;
};

function closeModal() {
  const modal = document.getElementById("modal");
  modal.innerHTML = "";
  modal.style.position = "";
  modal.style.zIndex = "-10";
}
