import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/api';

interface Category {
    id: string;
    name: string;
    description: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    products: any[]; // You can type this more specifically based on your product type
}

const fetchCategories = async (): Promise<Category[]> => {
    const { data } = await api.get('/categories/');
    return data;
};

export const useCategories = () => {
    return useQuery<Category[]>({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    });
};
