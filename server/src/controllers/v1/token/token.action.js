import dotenv from "dotenv";
import uuid from "uuid/v4";
import { StreamChat } from "stream-chat";

dotenv.config();

exports.token = async (req, res) => {
  try {
    const data = req.body;

    const client = new StreamChat(
      process.env.STREAM_API_KEY,
      process.env.STREAM_API_SECRET
    );

    const user = Object.assign({}, data, {
      id: uuid(),
      role: "admin",
      image: `https://robohash.org/${data.email}?gravatar=yes`
    });
    const token = client.createToken(user.id);

    await client.setUser({ ...user }, token);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
