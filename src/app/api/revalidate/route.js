import { NextResponse } from "next/server";

export async function GET(request, res) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (secret !== "SECRET_TOKEN") {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    await res.revalidate("/");
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
