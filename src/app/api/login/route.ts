import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ error: "Wrong password" }, { status: 400 });
    }

    // 🔐 JWT with expiry
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" } // ⏰ 1 hour expiry
    );

    const response = NextResponse.json({ message: "Login success" });

    // 🍪 cookie set with expiry
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60, // 1 hour
    });

    return response;

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}