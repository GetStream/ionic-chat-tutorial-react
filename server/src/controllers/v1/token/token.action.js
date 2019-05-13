import dotenv from 'dotenv';
import md5 from 'md5';
import { StreamChat } from 'stream-chat';

dotenv.config();

exports.token = async (req, res) => {
    try {
        const data = req.body;

        const client = new StreamChat(
            process.env.STREAM_API_KEY,
            process.env.STREAM_API_SECRET
        );

        const user = Object.assign({}, data, {
            id: md5(data.email),
            role: 'admin',
            image: `https://robohash.org/${data.email}`,
        });
        const token = client.createToken(user.id);
        await client.updateUsers([user]);

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
