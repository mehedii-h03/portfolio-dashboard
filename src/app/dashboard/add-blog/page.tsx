"use client";
import "react-quill/dist/quill.snow.css";
import Container from "@/components/ui/Container";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import { CreateBlog } from "@/actions/CreateBlog";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export type BlogFormData = {
  id?: string;
  blogTitle: string;
  image: string;
  content: string;
};
const AddBlogPage = () => {
  const [value, setValue] = useState("");

  const handleChange = (content: string) => {
    setValue(content);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BlogFormData>();

  const onSubmit: SubmitHandler<BlogFormData> = async (data) => {
    const blogData: BlogFormData = {
      content: value,
      blogTitle: data.blogTitle,
      image: data.image,
    };
    try {
      const res = await CreateBlog(blogData);
      Swal.fire({
        icon: "success",
        title: "Blog Successfully added",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      setValue("");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <h1 className="text-center text-4xl font-semibold mb-8">Add Blog</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* row 1 */}
        <div className="flex justify-center flex-col md:flex-row md:gap-5">
          <div className="flex-1 input-field-container relative flex items-center">
            <HiOutlineMail className="absolute left-4 text-xl font-semibold" />
            <input
              type="text"
              className="input-field pl-12"
              placeholder="Blog name"
              {...register("blogTitle", { required: true })}
            />
            <label className="input-field-label">Blog name</label>
            {errors.blogTitle && (
              <p className="text-red-500">Blog name is required</p>
            )}
          </div>
          <div className="flex-1 input-field-container relative flex items-center">
            <HiOutlineMail className="absolute left-4 text-xl font-semibold" />
            <input
              type="text"
              className="input-field pl-12"
              placeholder="Image link"
              {...register("image", { required: true })}
            />
            <label className="input-field-label">Image Link</label>
            {errors.image && (
              <p className="text-red-500">Image Link is required</p>
            )}
          </div>
        </div>
        {/* Text Editor */}
        <div className="w-full my-8 p-4 bg-white border rounded-lg">
          <ReactQuill
            value={value}
            onChange={handleChange}
            theme="snow"
            className="min-h-60"
          />
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Output:</h2>
            <div
              className="p-4 bg-gray-100 rounded-md"
              dangerouslySetInnerHTML={{ __html: value }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-black w-full py-3 rounded-md mt-5"
        >
          Add Blog
        </button>
      </form>
    </Container>
  );
};

export default AddBlogPage;
