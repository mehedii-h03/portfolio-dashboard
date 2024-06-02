"use server";
// import { Blog } from "@/types";

export const CreateProject = async (data) => {
  const res = await fetch("http://localhost:3005/projects", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const projectInfo = await res.json();
  return projectInfo;
};
