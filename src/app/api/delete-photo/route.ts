import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import cloudinary from "@/lib/cloudinary";

export async function POST() {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Not logged in" }, { status: 401 });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await User.findById(decoded.userId);

    if (!user || !user.photo) {
      return NextResponse.json({ error: "No photo" }, { status: 400 });
    }

    // 🔥 public_id বের করা (Cloudinary থেকে delete করার জন্য)
    const url = user.photo;
    const parts = url.split("/");
    const fileName = parts[parts.length - 1].split(".")[0];

    await cloudinary.uploader.destroy(`profile_photos/${fileName}`);

    // 🗑️ DB থেকে remove
    user.photo = "";
    await user.save();

    return NextResponse.json({ message: "Photo deleted" });

  } catch (error) {
    console.log("DELETE ERROR:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}