import React from "react";

type ProjectProps = {
  params: {
    projectId: string;
  };
};

export default async function Project({ params }: ProjectProps) {
  const id = await params.projectId;
  return <div>project {id}</div>;
}
