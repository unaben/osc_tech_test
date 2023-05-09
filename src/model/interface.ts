export interface IStoreItems {
  node: {
    id: string;
    title: string;
    description: string;
    featuredImage: IFeaturedImage;
    variants: IVariants;
  };
}

interface IFeaturedImage {
  id: string;
  url: string;
}

interface IVariants {
  edges: [
    {
      node: {
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }
  ];
}

export interface IVariantProduct {
  id: string;
  title: string;
  description: string;
  quantity?: number;
  featuredImage: IFeaturedImage;
  variants: {
    edges: [
      {
        cursor: string;
        node: {
          id: string;
          title: string;
          image: {
            url: string;
          };
          price: {
            amount: string;
            currencyCode: string;
          };
        };
      }
    ];
  };
}
