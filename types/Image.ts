export type generateImage = {
  prompt: string;
  userId: string;
};

export type generatedImage = {
  id: string;
  prompt: string;
  userId: string;
  imageLinks: string[];
  createdAt: Date;
};
