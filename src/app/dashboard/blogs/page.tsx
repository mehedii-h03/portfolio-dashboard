import BlogList from "@/components/Pages/Blog/BlogList";
import Container from "@/components/ui/Container";

const BlogPage = async () => {
  const res = await fetch("http://localhost:3005/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
  return (
    <Container>
      <h1 className="text-center text-4xl font-semibold mb-8">Blog</h1>
      <BlogList blogs={blogs} />
    </Container>
  );
};

export default BlogPage;
