import IAbstractUser from './IAbstractUser';

interface IReview {
  comment: string;
  date: string;
  id: string;
  rating: number;
  user: IAbstractUser;
}

export default IReview;
