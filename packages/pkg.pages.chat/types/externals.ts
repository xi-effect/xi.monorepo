// types that should be imported from models

export type UserT = {
  username: string;
  avatar: AvatarT | null;
};
export type AvatarT = {
  id: string;
  filename: string;
};
