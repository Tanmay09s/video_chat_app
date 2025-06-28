import { StreamChat } from "stream-chat";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.STREAM_API_KEY; // fixed typo from STEAM_API_KEY
const apiSecret = process.env.STREAM_API_SECRET; // use a separate key for Stream, not JWT secret

if (!apiKey || !apiSecret) {
  console.log("Stream API Key or Secret is missing");
  process.exit(1); // exit early if critical env vars are missing
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.log("Error Upserting Stream User:", error.message);
  }
};

export const generateStreamToken = (userId) => {
  try {
    // ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};
