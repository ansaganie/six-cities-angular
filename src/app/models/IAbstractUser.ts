export type UserId = string;

interface IAbstractUser {
  id: UserId;
  name: string;
  avatar_url: string;
  is_pro: boolean;
}

export default IAbstractUser;
