import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Message from "./models/Message.js";

// Load environment variables
dotenv.config();

console.log("🔍 Checking MongoDB connection...");
console.log("MONGO_URI exists:", !!process.env.MONGO_URI);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
  try {
    console.log("🔗 Connecting to MongoDB...");
    
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });
    
    console.log("✅ MongoDB Connected Successfully!");
    console.log("📊 Database:", mongoose.connection.db.databaseName);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed!");
    console.error("Error:", error.message);
    console.log("\n💡 SOLUTIONS:");
    console.log("1. Check your password in the connection string");
    console.log("2. Make sure your IP is whitelisted in MongoDB Atlas");
    console.log("3. Verify the connection string is correct");
    process.exit(1); // Stop server if MongoDB fails
  }
};

// Connect to MongoDB first, then start server
connectDB().then(() => {
  // Routes
  app.get("/api/health", (req, res) => {
    res.json({ 
      success: true, 
      message: "Server is running with MongoDB!",
      database: "Connected",
      timestamp: new Date().toISOString()
    });
  });

  // Contact form route
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({
          success: false, 
          error: "All fields are required" 
        });
      }

      const newMessage = new Message({ name, email, message });
      await newMessage.save();

      console.log("💾 Message saved to MongoDB:", email);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully!" 
      });
    } catch (error) {
      console.error("Error saving message:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to save message to database" 
      });
    }
  });

  // Get messages route
  app.get("/api/messages", async (req, res) => {
    try {
      const messages = await Message.find().sort({ createdAt: -1 });
      res.json({ 
        success: true, 
        count: messages.length,
        data: messages 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to get messages" 
      });
    }
  });

  // Serve admin page
  app.get("/admin", (req, res) => {
    res.sendFile(process.cwd() + '/admin.html');
  });

  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`✅ Health: http://localhost:${PORT}/api/health`);
    console.log(`📨 Contact: http://localhost:${PORT}/api/contact`); // FIXED: Port -> PORT
    console.log(`👨‍💼 Admin: http://localhost:${PORT}/admin`);
  });
});