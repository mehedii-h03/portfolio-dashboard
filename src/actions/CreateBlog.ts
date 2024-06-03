"use server";

import { BlogFormData } from "@/app/dashboard/add-blog/page";

export const CreateBlog = async (blogData: BlogFormData) => {
  const response = await fetch("https://server-five-inky-48.vercel.app/add-blog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
