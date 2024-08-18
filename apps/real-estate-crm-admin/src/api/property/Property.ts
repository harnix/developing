export type Property = {
  address: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  size: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
