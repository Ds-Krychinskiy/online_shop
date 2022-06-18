import { BrandProps } from "redux/types/brand";
import { ListProps, ListTypeProps } from "redux/types/type";

export const ListBook: ListProps[] = [
  {
    label: "Книги на иностранных языках",
    key: 1,
    way: "bilinguals",
  },
  {
    label: "Нехудожественнная литература",
    key: 2,
    way: "non-fiction",
  },
  {
    label: "Периодические издания",
    key: 3,
    way: "periodicals",
  },
  {
    label: "Религия",
    key: 4,
    way: "religion",
  },
  {
    label: "Учебная, методическая литература и словари",
    key: 5,
    way: "methodical-literature",
  },
  {
    label: "Художественная литература",
    key: 6,
    way: "fiction",
  },
];

export const SchoolList: ListProps[] = [
  {
    label: "Русский язык",
    key: 1,
    way: "russian-language",
  },
  {
    label: "Математика",
    key: 2,
    way: "mathematics",
  },
  {
    label: "Английский язык",
    key: 3,
    way: "english-language",
  },
  {
    label: "История",
    key: 4,
    way: "history",
  },
  {
    label: "Литература",
    key: 5,
    way: "literature",
  },
];

export const Сhancellery: ListProps[] = [
  {
    label: "Все канцтовары",
    key: 1,
    way: "all-stationery",
  },
  {
    label: "Аксессуары для книг",
    key: 2,
    way: "book-accessories",
  },
  {
    label: "Обложки для документов",
    key: 3,
    way: "covers-for-documents",
  },
  {
    label: "Офисная канцелярия",
    key: 4,
    way: "office-stationery",
  },
  {
    label: "Папки, скоросшиватели, разделители",
    key: 5,
    way: "folders",
  },
  {
    label: "Письменные принадлежности",
    key: 6,
    way: "writing-utensils",
  },
  {
    label: "Принадлежности для черчения",
    key: 7,
    way: "sketching-supplies",
  },
];

export const ListType: ListTypeProps[] = [
  {
    label: "Книги",
    key: 1,
    list: ListBook,
  },
  {
    label: "Школа",
    key: 2,
    list: SchoolList,
  },
  {
    label: "Концелярия",
    key: 3,
    list: Сhancellery,
  },
];

export const ListState: BrandProps[] = [
  {
    name: "books",
    list: ListBook,
  },
  {
    name: "scholl",
    list: SchoolList,
  },
  {
    name: "chancellery",
    list: Сhancellery,
  },
];
