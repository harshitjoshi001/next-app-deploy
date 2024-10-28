import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request, response) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (secret !== "SECRET_TOKEN") {
    return response.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    revalidatePath("/");
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error("Revalidation error:", err);
    return response.json({ message: "Error revalidating" }, { status: 500 });
  }
}
