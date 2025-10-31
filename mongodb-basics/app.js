const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://deoNode1:trialNode@cluster0.dfgjo.mongodb.net/authDb?retryWrites=true&w=majority")
.then(() => console.log("database connected successfully"))
.catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});
const User = mongoose.model("User",userSchema);

async function runQueryExamples() {
  try {
    //create a new document
    const newUser = await User.create({
      name: "Updated User",
      email: "updated@gmail.com",
      age: "75",
      isActive: true,
      tags: ["developer"],
    });
    
    console.log("Created new user", newUser);
    

    const updateUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      { new: true }
    );
    console.log("updated user", updateUser);
  } catch (e) {
    console.log("Error ->", e);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();