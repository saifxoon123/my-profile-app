const token = jwt.sign(
  { email: user.email }, // 🔥 MUST
  process.env.JWT_SECRET!,
  { expiresIn: "7d" }
);