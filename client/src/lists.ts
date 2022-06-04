import { BrandProps } from "redux/types/brand";
import { ListProps, ListTypeProps } from "redux/types/type";

export const ListBook: ListProps[] = [
  {
    label: "Все книги",
    key: 1,
    way: "books",
  },
  {
    label: "Книги на иностранных языках",
    key: 2,
    way: "bilinguals",
  },
  {
    label: "Нехудожественнная литература",
    key: 3,
    way: "non-fiction",
  },
  {
    label: "Периодические издания",
    key: 4,
    way: "periodicals",
  },
  {
    label: "Религия",
    key: 5,
    way: "religion",
  },
  {
    label: "Учебная, методическая литература и словари",
    key: 6,
    way: "methodical-literature",
  },
  {
    label: "Художественная литература",
    key: 7,
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
export const GamesList: ListProps[] = [
  {
    label: "Всё игрушки",
    key: 1,
    way: "all-toys",
  },
  {
    label: "Детское творчество",
    key: 2,
    way: "сhildrens-сreativity",
  },
  {
    label: "Игры и Игрушки",
    key: 3,
    way: "games-and-toys",
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
    key: 4,
    way: "covers-for-documents",
  },
  {
    label: "Офисная канцелярия",
    key: 5,
    way: "office-stationery",
  },
  {
    label: "Папки, скоросшиватели, разделители",
    key: 6,
    way: "folders",
  },
  {
    label: "Письменные принадлежности",
    key: 7,
    way: "writing-utensils",
  },
  {
    label: "Принадлежности для черчения",
    key: 8,
    way: "sketching-supplies",
  },
];

export const Remain: ListProps[] = [
  {
    label: "CD/DVD",
    key: 1,
    way: "dvd",
  },
  {
    label: "Сувениры",
    key: 2,
    way: "souvenirs",
  },
  {
    label: "Журналы",
    key: 3,
    way: "magazines",
  },
  {
    label: "Товары для дома",
    key: 4,
    way: "household-products",
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
    label: "Игрушки",
    key: 3,
    list: GamesList,
  },
  {
    label: "Концелярия",
    key: 4,
    list: Сhancellery,
  },
  {
    label: "Ещё...",
    key: 5,
    list: Remain,
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
    name: "games",
    list: GamesList,
  },
  {
    name: "chancellery",
    list: Сhancellery,
  },
  {
    name: "remain",
    list: Remain,
  },
];
