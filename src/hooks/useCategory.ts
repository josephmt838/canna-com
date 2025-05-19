import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/api';
import type { Category } from '../types/category';

export const useCategory = (categoryName: string) => {
    return useQuery<Category | null>({
        queryKey: ['category', categoryName],
        queryFn: async () => {
            const { data } = await api.get(`/categories/${categoryName}`);
            return data;
        },
        enabled: !!categoryName,
    });
};
