const mongoose = require('mongoose');

// Try force IPv4
const clientOptions = { 
  serverApi: { version: '1', strict: true, deprecationErrors: true },
  family: 4 // Force IPv4
};

const dbUrl = "mongodb+srv://admin2000:Karan54321@kartik.btjjy4d.mongodb.net/CodeCrest?retryWrites=true&w=majority&appName=Kartik";

console.log("Attempting to connect to:", dbUrl);

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(dbUrl, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    process.exit(0);
  } catch (err) {
    console.error("Connection Failed:", err);
    process.exit(1);
  }
}
run();
