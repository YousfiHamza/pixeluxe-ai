import React from "react";

export default function TransformationPage({
  params,
}: {
  params: { id: string };
}) {
  return <div>Hello from transformations Page : {params.id}</div>;
}
