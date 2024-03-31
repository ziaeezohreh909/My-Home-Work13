export const Footer = () => {
  const divFooter = document.createElement("div");
  divFooter.classList.add(
    "text-black",
    "text-xs",
    "mt-5",
    "px-3",
    "font-serif",
    "flex",
    "justify-end",
    "gap-3",
    "items-center"
  );
  const textFooter = document.createElement("h6");
  textFooter.innerText = "Rows per page:";
  const selectPage = document.createElement("select");
  selectPage.classList.add(
    "text-gray-700",
    "bg-white",
    "border",
    "rounded-md",
    "p-1",
    "hover:bg-slate-100"
  );
  const optionAll = document.createElement("option");
  optionAll.value = "All";
  optionAll.textContent = "All";
  const optionFive = document.createElement("option");
  optionFive.value = "5";
  optionFive.textContent = "5";
  const optionTen = document.createElement("option");
  optionTen.value = "10";
  optionTen.textContent = "10";
  const optionFifteen = document.createElement("option");
  optionFifteen.value = "15";
  optionFifteen.textContent = "15";
  selectPage.append(optionAll, optionFive, optionTen, optionFifteen);

  const ShowItemsCounte = document.createElement("h6");
  ShowItemsCounte.innerText = "1-5 of 15";

  const btnLast = document.createElement("button");
  const imgLast = document.createElement("img");
  imgLast.src = "./image/material-symbols-light--navigate-before.svg";
  btnLast.append(imgLast);

  const btnNext = document.createElement("button");
  const imgNext = document.createElement("img");
  imgNext.src = "./image/material-symbols-light--navigate-next.svg";
  btnNext.append(imgNext);

  divFooter.append(textFooter, selectPage, ShowItemsCounte, btnLast, btnNext);
  return divFooter;
};
