import axios from "axios";

export const fetchChats = async () => {
  const response = await axios.get("/api/chat/getChats");
  return response.data;
};

export const fetchMessage = async (id: string) => {
  const response = await axios.get(`/api/message/getMessage/${id}`);
  return response.data;
};

export const fetchMessages = async () => {
  const response = await axios.get(`/api/message/getMessages`);
  return response.data;
};
