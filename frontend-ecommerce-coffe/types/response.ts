import { ProductType } from "./product";

export type ResponseType = {
    result: ProductType[];
    loading: boolean;
    error: string;
};