import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({ message: "Database Connected Successfully" });
  } catch (error: any) {
    console.error("DATABASE ERROR:", error); // 🔥 terminal এ দেখাবে
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}