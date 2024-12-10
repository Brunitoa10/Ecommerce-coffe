export type ProductType = {
    id: number;
    documentId: string;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeature: boolean;
    taste: string;
    origin: string;
    price: number;
    images: {
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
        formats: {
            thumbnail: {
                name: string;
                hash: string;
                ext: string;
                mime: string;
                path: string | null;
                width: number;
                height: number;
                size: number;
                sizeInBytes: number;
                url: string;
            };
            small: {
                name: string;
                hash: string;
                ext: string;
                mime: string;
                path: string | null;
                width: number;
                height: number;
                size: number;
                sizeInBytes: number;
                url: string;
            };
            // Puedes agregar otros tamaños de imagen si es necesario
        };
    }[];
    category?: {
        data: {
            attributes: {
                slug: string;
                categoryName: string;
            };
        };
    };
};
