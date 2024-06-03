"use server";

import { Project } from "@/types/type";

export const CreateProject = async (data: Project) => {
  const res = await fetch("https://server-five-inky-48.vercel.app/add-project", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  const projectInfo = await res.json();
  return projectInfo;
};
