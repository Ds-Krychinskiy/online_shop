export interface ListProps {
  label: string;
  key: number;
  way: string;
}

export interface ListTypeProps {
  label: string;
  key: number;
  list: ListProps[];
}

export type DefaultState = {
  types: ListTypeProps[];
};

export enum TypeActionType {
  CREATE_TYPE = "CREATE_TYPE",
}
