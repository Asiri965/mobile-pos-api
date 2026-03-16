const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/customers", require("./routes/CustomerRoutes"));
app.use("/api/v1/products", require("./routes/ProductRoutes"));
app.use("/api/v1/orders", require("./routes/OrderRoutes"));
app.use("/api/v1/dashboard", require("./routes/dashboardRoutes"));

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Express MongoDB MVC API",
    version: "1.0.0",
  });
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    success: false,
    message: "Server Error",
  });
});

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
