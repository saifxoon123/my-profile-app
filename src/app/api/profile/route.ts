import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET() {
  try {
    await connectDB();

    const token = cookies().get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    let user = null;

    // 🔥 TRY 1: userId
    if (decoded.userId) {
      user = await User.findById(decoded.userId);
    }

    // 🔥 TRY 2: email fallback
    if (!user && decoded.email) {
      user = await User.findOne({ email: decoded.email });
    }

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      name: user.name,
      email: user.email,
      photo: user.photo || null,
    });

  } catch (error) {
    console.log("PROFILE ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}