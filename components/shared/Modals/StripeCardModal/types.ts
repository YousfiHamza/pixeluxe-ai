export type StripeCardModalProps = {
  plan: {
    _id: number;
    name: string;
    icon: string;
    price: number;
    credits: number;
    inclusions: {
      label: string;
      isIncluded: boolean;
    }[];
    isPopular: boolean;
  };
  buyerId: string;
  handleShowModal?: () => void;
};
