import { IImage } from '@/lib/database/models/image.model';

export type TransformationFormProps = {
  action: 'Add' | 'Update';
  userId: string;
  type: TransformationTypeKey;
  creditBalance: number;
  data?: IImage | null;
  config?: Transformations | null;
};
