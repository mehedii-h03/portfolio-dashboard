import { useRef } from "react";
import { FaRegEdit } from "react-icons/fa";
import EditProjectFormContainer from "./EditProjectFormContainer";
import { Project } from "@/types/type";

const EditProjectModal = ({ project, modalRef }: { project: Project; modalRef: React.RefObject<HTMLDialogElement>; }) => {
  const localModalRef = useRef<HTMLDialogElement>(null);

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <button
        onClick={handleOpenModal}
        className="bg-white border hover:bg-orange-400 text-black hover:text-white text-xl px-2 py-2 rounded-lg transition-all duration-300"
      >
        <FaRegEdit />
      </button>
      <dialog ref={modalRef} id="edit-project" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button
              type="button"
              onClick={() => modalRef.current?.close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="font-normal">
            <h3 className="text-center text-3xl font-semibold mb-8">
              Edit Project
            </h3>
            <EditProjectFormContainer project={project} />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditProjectModal;
