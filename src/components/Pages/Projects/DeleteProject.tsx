"use client";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const DeleteProject = ({ projectId }: { projectId: string }) => {
  const handlerDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`https://server-five-inky-48.vercel.app/projects/${id}`, {
            method: "DELETE",
            cache: "no-store",
          });

          if (!res.ok) {
            throw new Error("Failed to delete project");
          }
        } catch (error) {
          console.error("Error deleting project:", error);
        }
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <button
      onClick={() => handlerDelete(projectId)}
      className="bg-white border hover:bg-red-600 text-black hover:text-white text-xl px-2 py-2 rounded-lg transition-all duration-300 block"
    >
      <AiOutlineDelete />
    </button>
  );
};

export default DeleteProject;
