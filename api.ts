import axios from "axios";

export const fetchChats = async (id: String) => {
  const response = await axios.get(`/api/chat/${id}`);
  return response.data;
};

export const fetchMessages = async (id: String) => {
  const response = await axios.get(`/api/message/${id}`);
  return response.data;
};

export const fetchModels = async () => {
  const response = await axios.get(`/api/chat/getModels`);
  return response.data;
};

export const fetchImage = async (id: string) => {
  const response = await axios.get(`/api/image/${id}`);
  return response.data;
};
