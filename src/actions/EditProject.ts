"use server";

import { Project } from "@/types/type";

export const EditProject = async (
  projectId: string,
  updatedProjectInfo: Project
) => {
  try {
    const res = await fetch(`https://server-five-inky-48.vercel.app/projects/${projectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProjectInfo),
      cache: "no-store",
    });

    console.log(projectId, updatedProjectInfo);

    if (!res.ok) {
      throw new Error("Failed to update project");
    }

    const updatedProject = await res.json();
    return updatedProject;
  } catch (error) {
    throw error;
  }
};
