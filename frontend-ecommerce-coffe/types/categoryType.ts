export type ImageType = {
    id: number;
    url: string;
    alternativeText?: string;
    caption?: string;
};

export type CategoryType = {
    id: number;
    documentId: string;
    categoryName: string;
    slug: string;
    mainImage?: ImageType;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
};

export type PaginationType = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
};

export type CategoryResponseType = {
    data: CategoryType[];
    meta: {
        pagination: PaginationType;
    };
};
