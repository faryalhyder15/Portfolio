import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple health check route
app.get("/api/health", (req, res) => {
  res.json({ 
    success: true, 
    message: "Server is running without database",
    timestamp: new Date().toISOString()
  });
});

// Test contact route (stores data in memory)
let testMessages = [];

app.post("/api/contact", (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required"
      });
    }

    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      createdAt: new Date().toISOString()
    };
    
    testMessages.push(newMessage);
    console.log("📨 Message stored in memory:", { name, email });

    res.json({ 
      success: true, 
      message: "Message sent successfully! (Stored in memory)"
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: "Server error" 
    });
  }
});

// Get test messages
app.get("/api/messages", (req, res) => {
  res.json({ 
    success: true, 
    count: testMessages.length,
    data: testMessages 
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 TEST Server running on http://localhost:${PORT}`);
  console.log(`✅ Health check: http://localhost:${PORT}/api/health`);
  console.log(`📨 Contact endpoint: http://localhost:${PORT}/api/contact`);
});