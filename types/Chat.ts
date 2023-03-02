export type Message = {
  id?: String;
  text: String;
  author: String;
  chatId: String;
  createdAt?: string;
};

export type Chat = {
  id: string;
  userId: string;
  messages: Message[];
  createdAt: string;
};
