import { getCurrentUser } from "@/services/authService";
import Image from "next/image";

interface ProjectPageProps {
  params: Promise<{ id: string }>; // Updated type
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { id } = await params; // Await the params to get the id
  const currentUser = await getCurrentUser();

  const res = await fetch(`${process.env.BACKEND_URL}/projects/${id}`, {
    cache: "no-store",
  });
  const project = await res.json();
  console.log(project.data.technologies);

  // Check if your API returns { data: {...} } or just the project object
  const p = project.data || project;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-10">{p.name}</h1>
      <div className="relative w-full h-96 inline-block ">
        <Image
          src={project.data.images[0]}
          alt={p.name}
          fill
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <p className=" text-gray-700 mt-10 mb-3 text-lg ">
        <span className="font-bold">Short Description:</span> {p.description}
      </p>
      <div className="flex mb-3 text-lg">
        <span className="font-bold">Technologies: </span>

        {project.data?.technologies && project.data.technologies.length > 0 && (
          <ul className="flex gap-2 ml-3">
            {project.data.technologies.map((tec: string, index: number) => (
              <li key={index}>{tec}, </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {project.data?.multipleDescriptions &&
          project.data.multipleDescriptions.length > 0 && (
            <ul>
              {project.data.multipleDescriptions.map(
                (desc: string, index: number) => (
                  <li key={index}>✅{desc}</li>
                )
              )}
            </ul>
          )}
      </div>
      <div className="mt-6 flex gap-3">
        <a
          href={p.liveLink}
          target="_blank"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Live Link
        </a>
        <a
          href={p.githubLink}
          target="_blank"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
        >
          GitHub
        </a>
        {currentUser?.role === "ADMIN" && (
          <a
            href={`/admin/updateProject/${p.id}`}
            target="_blank"
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          >
            Update
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
