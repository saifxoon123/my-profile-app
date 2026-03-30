import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {

    await connectDB();

    const { name } = await req.json();

    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Not logged in" });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    await User.findByIdAndUpdate(decoded.userId, {
      name: name,
    });

    return NextResponse.json({ message: "Name updated" });

  } catch (error) {
    return NextResponse.json({ error: "Update failed" });
  }
}