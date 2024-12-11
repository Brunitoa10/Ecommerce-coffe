import { CategoryType } from "./categoryType";

export type ResponseCategory = {
    result: CategoryType[];
    loading: boolean;
    error: string;
};