import axios from "axios";

export const fetchChats = async (id: String) => {
  const response = await axios.get(`/api/chat/${id}`);
  return response.data;
};

export const fetchMessages = async (id: String) => {
  const response = await axios.get(`/api/message/${id}`);
  return response.data;
};
