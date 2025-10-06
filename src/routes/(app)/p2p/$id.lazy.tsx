import { useParams, createLazyFileRoute } from "@tanstack/react-router";
import { blogs } from "../../../Data/blog-data-p2p-dummy";

export const Route = createLazyFileRoute("/(app)/p2p/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = useParams({ from: "/(app)/p2p/$id" });

  const key = id as keyof typeof blogs;
  console.log("Route id:", key);

  const blog = blogs[key];
  console.log("Blog object:", blog);

  if (!blog) {
    return (
      <div className="max-w-7xl mx-auto p-6 text-center text-red-400 ">
        Blog not found 🚫
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 h-full ">
      {/* header */}
      <h1 className="text-4xl font-semibold text-emerald-600 mb-6 font-sans tracking-tight leading-tight ">
  {blog.title}
</h1>

      <p className=" mb-6 ">{blog.desc}</p>

      <div
        className=" leading-relaxed space-y-6 "
        // If you have tailwind-typography plugin and want its styling, add `prose prose-invert` here as well.
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
