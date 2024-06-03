"use server";

import { BlogFormData } from "@/app/dashboard/add-blog/page";

export const CreateBlog = async (blogData: BlogFormData) => {
  const response = await fetch("http://localhost:3005/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
