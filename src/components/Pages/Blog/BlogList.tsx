import { BlogFormData } from "@/app/dashboard/add-blog/page";
import Image from "next/image";
import Link from "next/link";
import DeleteProject from "../Projects/DeleteProject";
import DeleteBlog from "./DeleteBlog";

const BlogList = ({ blogs }: { blogs: BlogFormData[] }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border">
          <thead>
            <tr className="text-sm text-black">
              <th>Sl No</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, i) => (
              <tr key={blog.id}>
                <th>
                  <p className="font-semibold"> {i + 1}</p>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          width={48}
                          height={48}
                          src={blog?.image}
                          alt="Blog Image"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{blog?.blogTitle}</div>
                    </div>
                  </div>
                </td>
                <td dangerouslySetInnerHTML={{ __html: blog?.content }}></td>
                {blog.id && (
                  <td>
                    <DeleteBlog blogId={blog.id} />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
