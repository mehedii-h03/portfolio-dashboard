"use client";
import { FaRegEdit } from "react-icons/fa";
// TODO have remove ts error and add edit design and functionality


const EditProject = () => {
  return (
    <>
      <button
        onClick={() => document.getElementById("edit-project").showModal()}
        className="bg-white border hover:bg-orange-400 text-black hover:text-white text-xl px-2 py-2 rounded-lg transition-all duration-300"
      >
        <FaRegEdit />
      </button>
      <dialog id="edit-project" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
};

export default EditProject;
