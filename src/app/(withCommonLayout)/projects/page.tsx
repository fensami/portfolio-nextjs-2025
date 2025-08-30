import React from "react";

const ProjectPage = async ({ params }: any) => {
  const res = await fetch(`http://localhost:3001/api/projects/${params.id}`, {
    cache: "no-store",
  });
  const project = await res.json();
  console.log(project.data); // check your API structure

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{project.data.name}</h1>
      <p className="mt-4 text-gray-700">{project.data.description}</p>
    </div>
  );
};

export default ProjectPage;
