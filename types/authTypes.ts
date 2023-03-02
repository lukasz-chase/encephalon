export type Session = {
  user: {
    name: String;
    email: String;
    image: String;
    id: String;
  };
  expires: String;
};

export type User = {
  id: String;
  name: String;
  email: String;
  emailVerified: null;
  image: String;
};
