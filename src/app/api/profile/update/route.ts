import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    await connectDB();

    const token = cookies().get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Not logged in" });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const body = await req.json();

    const user = await User.findByIdAndUpdate(
      decoded.id,
      { name: body.name },
      { new: true }
    );

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: "Error updating profile" });
  }
}