import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { id: number };
  }
) {
  const id = params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const product = await res.json();

  return NextResponse.json(product);
}
