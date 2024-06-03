import ProjectList from "@/components/Pages/Projects/ProjectList";
import Container from "@/components/ui/Container";

const ProjectsPage = async () => {
  const res = await fetch("http://localhost:3005/projects", {
    cache: "no-store",
  });
  const projects = await res.json();

  return (
    <Container>
      <h1 className="text-center text-4xl font-semibold mb-8">Projects</h1>
      <ProjectList projects={projects} />
    </Container>
  );
};

export default ProjectsPage;
