export const Header = () => {
  const header = document.createElement("header");
  header.classList.add(
    "flex",
    "justify-between",
    "font-serif",
    "text-white",
    "p-2",
    "items-center",
    "bg-violet-700",
    "w-full",
    "h-12"
  );
  const div = document.createElement("div");
  div.classList.add("flex");
  const imgList = document.createElement("img");
  imgList.src = "./image/Menu Cheesesburger.svg";
  const h6 = document.createElement("h6");
  h6.innerText = "My To-Do Tasks";
  div.append(imgList, h6);

  const divRight = document.createElement("div");
  divRight.classList.add("flex", "justify-center", "gap-3", "items-center");
  const divSearch = document.createElement("div");
  divSearch.classList.add(
    "items-center",
    "px-2",
    "mt-1",
    "rounded-md",
    "bg-violet-600",
    "h-7",
    "flex",
    "justify-between",
    "w-60"
  );
  const imgSearch = document.createElement("img");
  imgSearch.src = "./image/ri--search-line.svg";
  const inputSearch = document.createElement("input");
  inputSearch.setAttribute("type", "text");
  inputSearch.setAttribute("id", "inputSearch");
  inputSearch.setAttribute("placeholder", "Search");
  inputSearch.classList.add("rounded-md", "bg-violet-600");
  divSearch.append(imgSearch, inputSearch);

  const divFilter = document.createElement("div");
  divFilter.classList.add("items-center", "mt-2");
  const imgFilter = document.createElement("img");
  imgFilter.src = "./image/Filter 3.svg";
  divFilter.append(imgFilter);

  const addToTask = document.createElement("button");
  addToTask.classList.add("bg-violet-700", "items-center");
  const imgAddToTask = document.createElement("img");
  imgAddToTask.src = "./image/Add.svg";
  addToTask.append(imgAddToTask);

  divRight.append(divSearch, divFilter, addToTask);

  header.append(div, divRight);
  return header;
};
