import { IImage } from '@/lib/database/models/image.model';

export type CollectionProps = {
  images: IImage[];
  totalPages?: number;
  page: number;
  hasSearch?: boolean;
};
