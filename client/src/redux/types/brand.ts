export interface ListProps {
  label: string;
  key: number;
  way: string;
}

export interface BrandProps {
  name: string;
  list: ListProps[];
}

export type DefaultState = {
  brand: BrandProps[];
};

export enum BrandActionType {
  CREATE_BRAND = "CREATE_BRAND",
}
