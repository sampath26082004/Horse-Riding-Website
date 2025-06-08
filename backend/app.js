import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
const router = express.Router();

config({ path: "./config.env" });

// Middleware first!
app.use(cors({
  origin: [process.env.FRONTEND_URL || "http://localhost:5173"],
  methods: ["POST"],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route
router.post("/send/mail", async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ success: false, message: "No body received." });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all details",
    });
  }

  try {
    await sendEmail({
      email: "sampathgaddamwar2682004@gmail.com",
      subject:"PU HORSE RIDING",
      message,
      userEmail: email,
    });

    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
