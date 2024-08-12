import React from "react";

export default function TransformationPage({
  params,
}: {
  params: { type: string };
}) {
  return <div>Hello from Add transformations Page : {params.type}</div>;
}
