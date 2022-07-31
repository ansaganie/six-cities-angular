import IAbstractUser from './IAbstractUser';
import ICity from './ICity';
import ILocation from './ILocation';

export type OfferId = string;

interface IOffer {
  id: OfferId;
  bedrooms: number;
  description: string;
  goods: string[];
  images: string[];
  is_favorite: boolean;
  is_premium: boolean;
  max_adults: number;
  preview_image: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  city: ICity;
  host: IAbstractUser;
  location: ILocation;
}

export default IOffer;
