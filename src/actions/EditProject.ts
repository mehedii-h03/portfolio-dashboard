"use server";

import { Project } from "@/types/type";

export const EditProject = async (
  projectId: string,
  updatedProjectInfo: Project
) => {
  try {
    const res = await fetch(`http://localhost:3005/projects/${projectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProjectInfo),
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
