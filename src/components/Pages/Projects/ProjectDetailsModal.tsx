"use client";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/type";
import { RefObject } from "react";
interface ProjectDetailsModalProps {
  project: Project;
  modalRef: RefObject<HTMLDialogElement>;
  onClose: () => void;
}

const ProjectDetailsModal = ({
  project,
  modalRef,
  onClose,
}: ProjectDetailsModalProps) => {
  return (
    <dialog ref={modalRef} id="project-details" className="modal">
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
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="flex-1">
            <Image
              src={project?.image}
              alt=""
              width={500}
              height={500}
              className="max-h-[500px] w-full object-cover object-top"
            />
          </div>
          <div className="flex-1">
            <div className="space-y-2">
              <h3 className="text-3xl font-medium">{project?.name}</h3>
              <p className="text-md text-gray-400 font-normal">
                {project.description}
              </p>
            </div>
            <div>
              <h5 className="text-lg font-medium mt-5 mb-2">Links:</h5>
              <p className="text-md font-normal">
                Github:{" "}
                <Link
                  target="_blank"
                  className="text-blue-500"
                  href={project?.githubLink}
                >
                  {project?.githubLink}
                </Link>
              </p>
              <p className="text-md font-normal">
                Live:{" "}
                <Link
                  target="_blank"
                  className="text-blue-500"
                  href={project?.liveLink}
                >
                  {project?.liveLink}
                </Link>
              </p>
            </div>
            <div>
              <h5 className="text-lg font-medium mt-5 mb-2">Technologies:</h5>
              {project?.techs.map((tech, i) => (
                <p className="font-normal text-md" key={i}>
                  {i + 1}. {tech}
                </p>
              ))}
            </div>
            <div>
              <h5 className="text-lg font-medium mt-5 mb-2">Features:</h5>
              {project?.features.map((feature, i) => (
                <p className="font-normal text-md" key={i}>
                  {i + 1}. {feature}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ProjectDetailsModal;
