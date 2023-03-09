export const fetchChats = async (id: String) => {
  const response = await fetch(`/api/chat/${id}`);
  return response.json();
};

export const fetchMessages = async (id: String) => {
  const response = await fetch(`/api/message/${id}`);
  return response.json();
};

export const fetchModels = async () => {
  const response = await fetch(`/api/chat/getModels`);
  return response.json();
};

export const fetchImage = async (id: string) => {
  const response = await fetch(`/api/image/${id}`);
  return response.json();
};
