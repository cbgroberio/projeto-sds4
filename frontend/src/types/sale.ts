import { Seller } from "./seller"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = {
    first: boolean;
    last: boolean;
    number: number;
    totalElements: number;
    totalPages: number;
    numberOfElements?: number;
    size?: number;
    empty?: boolean;
    content?: Sale[];
}

export type SaleSum = {
    sellerName: string;
    saleSum: number;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}