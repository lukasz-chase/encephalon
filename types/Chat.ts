export type Message = {
  id?: string;
  text: string;
  author: string;
  avatar: string;
  chatId: string;
  createdAt?: string;
};

export type Chat = {
  id: string;
  userId: string;
  messages: Message[];
  createdAt: string;
};
