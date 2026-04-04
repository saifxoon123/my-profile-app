import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" });
    }

    if (user.password !== password) {
      return NextResponse.json({ message: "Wrong password" });
    }

    // 🔥 এখানে MAIN FIX
    const token = jwt.sign(
      { id: user._id }, // 👈 MUST use _id
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({ message: "Login success" });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error" });
  }
}