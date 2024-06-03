"use client";
import { useState, useRef, useEffect } from "react";
import DeleteProject from "@/components/Pages/Projects/DeleteProject";
import EditProjectModal from "@/components/Pages/Projects/EditProjectModal";
import ProjectDetailsModal from "@/components/Pages/Projects/ProjectDetailsModal";
import Image from "next/image";
import Link from "next/link";
import { TbListDetails } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { Project } from "@/types/type";

const ProjectList = ({ projects }: { projects: Project[] }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [editProject, setEditProject] = useState<Project | null>(null);
  const detailsModalRef = useRef<HTMLDialogElement>(null);
  const editModalRef = useRef<HTMLDialogElement>(null);

  const handleOpenDetailsModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleOpenEditModal = (project: Project) => {
    setEditProject(project);
    if (editModalRef.current) {
      editModalRef.current.showModal();
    }
  };

  const handleCloseModal = () => {
    if (detailsModalRef.current) detailsModalRef.current.close();
    if (editModalRef.current) editModalRef.current.close();
    setSelectedProject(null);
    setEditProject(null);
  };

  useEffect(() => {
    if (selectedProject && detailsModalRef.current) {
      detailsModalRef.current.showModal();
    }
  }, [selectedProject]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border">
          <thead>
            <tr className="text-sm text-black">
              <th>Sl No</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Technologies</th>
              <th>Links</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, i) => (
              <tr key={i + 1}>
                <th>
                  <p className="font-semibold">{i + 1}</p>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          width={48}
                          height={48}
                          src={project.image}
                          alt="Project Image"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{project.name}</div>
                    </div>
                  </div>
                </td>
                <td>{project.description}</td>
                <td>
                  {project?.techs?.slice(0, 3).map((tech, i) => (
                    <p key={i}>
                      {i + 1} {tech}
                    </p>
                  ))}
                </td>
                <td className="space-y-1">
                  <Link
                    href={project?.liveLink || "/"}
                    className="font-semibold text-blue-600 block"
                  >
                    Live
                  </Link>
                  <Link
                    href={project?.githubLink || "/"}
                    className="font-semibold text-blue-600 block"
                  >
                    Github
                  </Link>
                </td>
                <td className="space-y-2">
                  <button
                    onClick={() => handleOpenDetailsModal(project)}
                    className="bg-white border hover:bg-TPrimary text-black hover:text-white text-xl px-2 py-2 rounded-lg transition-all duration-300 block"
                  >
                    <TbListDetails />
                  </button>
                  <button
                    onClick={() => handleOpenEditModal(project)}
                    className="bg-white border hover:bg-orange-400 text-black hover:text-white text-xl px-2 py-2 rounded-lg transition-all duration-300 block"
                  >
                    <FaRegEdit />
                  </button>
                  {project?._id && <DeleteProject projectId={project._id} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          modalRef={detailsModalRef}
          onClose={handleCloseModal}
        />
      )}
      {editProject && (
        <EditProjectModal
          project={editProject}
          modalRef={editModalRef}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ProjectList;
