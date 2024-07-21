const PostUser = require("../Model/user");

exports.GetAllusers = async (req, res) => {
  try {
    const alluser = await PostUser.find({});
    res.status(200).json({ success: true, data: alluser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
