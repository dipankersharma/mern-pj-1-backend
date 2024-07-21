const user = require("../Model/user");
const PostUser = require("../Model/user");

exports.user = async (req, res) => {
  try {
    const { name, email, title, department, role } = req.body;
    const newUser = new PostUser({ name, email, title, department, role });
    if (!name || !email || !title || !department || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const user = await newUser.save();

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
