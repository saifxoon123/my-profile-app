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
      return NextResponse.json({ message: "No token" });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const { name } = await req.json();

    console.log("USER ID:", decoded.id);
    console.log("NEW NAME:", name);

    const user = await User.findById(decoded.id);

    if (!user) {
      return NextResponse.json({ message: "User not found" });
    }

    user.name = name;
    await user.save();

    return NextResponse.json({ message: "Updated", user });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error" });
  }
}