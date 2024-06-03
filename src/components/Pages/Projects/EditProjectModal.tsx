import { useEffect } from "react";
import { RefObject } from "react";
import { FaRegEdit } from "react-icons/fa";
import EditProjectFormContainer from "./EditProjectFormContainer";
import { Project } from "@/types/type";

interface EditProjectModalProps {
  project: Project;
  modalRef: RefObject<HTMLDialogElement>;
  onClose: () => void;
}

const EditProjectModal = ({
  project,
  modalRef,
  onClose,
}: EditProjectModalProps) => {
  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, [modalRef]);

  return (
    <dialog ref={modalRef} id="edit-project" className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <form method="dialog">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        <div className="font-normal">
          <h3 className="text-center text-3xl font-semibold mb-8">
            Edit Project
          </h3>
          {project?._id && (
            <EditProjectFormContainer
              projectId={project._id}
              project={project}
              modalRef={modalRef}
            />
          )}
        </div>
      </div>
    </dialog>
  );
};

export default EditProjectModal;
