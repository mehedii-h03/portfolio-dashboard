import EditProject from "@/components/Pages/Projects/EditProject";
import ProjectDetails from "@/components/Pages/Projects/ProjectDetails";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDelete } from "react-icons/ai";

const ProjectPage = async () => {
  const res = await fetch("http://localhost:3002/projects");
  const projects = await res.json();
  console.log(projects);

  return (
    <Container>
      <h1 className="text-center text-4xl font-semibold mb-8">Projects</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table border">
            {/* head */}
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
                            width={12}
                            height={12}
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
                      href={project.liveLink}
                      className="font-semibold text-blue-600 block"
                    >
                      Live
                    </Link>
                    <Link
                      href={project.githubLink}
                      className="font-semibold text-blue-600 block"
                    >
                      Github
                    </Link>
                  </td>
                  <th className="space-y-2">
                    <ProjectDetails project={project}/>
                    <EditProject />
                    <button className="bg-white border hover:bg-red-600 text-black hover:text-white text-xl px-2 py-2 rounded-lg transition-all duration-300">
                      <AiOutlineDelete />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default ProjectPage;
