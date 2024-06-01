"use client";
import { TbListDetails } from "react-icons/tb";

const ProjectDetails = ({ project }) => {
  return (
    <>
      <button
        onClick={() => document.getElementById("project-details").showModal()}
        className="bg-white border hover:bg-TPrimary text-black hover:text-white text-xl px-2 py-2 rounded-lg transition-all duration-300"
      >
        <TbListDetails />
      </button>
      <dialog id="project-details" className="modal">
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

export default ProjectDetails;
