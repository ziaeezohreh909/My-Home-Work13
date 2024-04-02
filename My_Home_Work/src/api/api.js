import { data } from "autoprefixer";
import axios from "axios";

export async function getAllTasks() {
  const { data } = await axios.get("http://localhost:4321/tasks");
  return data;
}
