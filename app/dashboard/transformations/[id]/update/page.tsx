import React from "react";

export default function UpdateTransformationPage({
  params,
}: {
  params: { id: string };
}) {
  return <div>Hello from Update Transfo Page : {params.id}</div>;
}
