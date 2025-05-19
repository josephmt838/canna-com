export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    categoryId: string;
    stock: number;
    createdAt: string;
    updatedAt: string;
}

export interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
    products: Product[];
    createdAt: string;
    updatedAt: string;
}
