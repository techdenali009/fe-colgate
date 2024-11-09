
export const SortOptions = {
  ALPHABETICAL_AZ: 'Alphabetical A - Z',
  ALPHABETICAL_ZA: 'Alphabetical Z - A',
  PRICE_LOW_HIGH: 'Price Low to High',
  PRICE_HIGH_LOW: 'Price High to Low',
};

export enum AccordionType {
  Radio = 'Radio',
  Checkbox = 'Checkbox',
  Label = 'Label'
}


export const Plp_Constants = {
  bestSeller: 'Best-Seller',
  viewAll: 'View-All',
  AllProducts: 'All Products',
  Oily:'Oily'
}
export const plpFilters = [
  {
    title: 'Product Category',
    AccordionType: AccordionType.Label,
    value:'product-catagory',
    options: [
      { title: 'All Products', count: 1 },
      { title: 'Antioxidants', count: 2 },
      { title: 'Broad spectrum SPF', count: 3 },
      { title: 'Cleansers & toners', count: 4 },
      { title: 'Eye, neck, lip', count: 5 },
      { title: 'Masks', count: 6 },
      { title: 'Moisturizers', count: 7 },
      { title: 'Retinols', count: 8 },
      { title: 'Serums', count: 9 },
      { title: 'Peels', count: 10 },
      { title: 'Peel Alternative', count: 11 },
      { title: 'Retinoid Treatments', count: 12 },
      { title: 'Therapeutic Masks', count: 13 },
      { title: 'Treatment Enhancements', count: 14 },
      { title: 'Backbar Sizes', count: 15 },
      { title: 'Backbar Tools', count: 16 },
      { title: 'Body Treatments', count: 17 },
      { title: 'Exfoliants', count: 18 },
    ]
  },

  {
    title: 'Best Seller',
    value:'best-seller',
    AccordionType: AccordionType.Checkbox,
    options: [{ title: 'Best Seller', count: 1 }]
  },
  {
    title: 'Product Types',
    value:'product-type',
    AccordionType: AccordionType.Checkbox,
    options: [{ title: 'Backbar', count: 1 }, { title: 'Retail', count: 2 }, { title: 'Sample', count: 3 }]
  },

  {
    title: 'Skin Concern',
    AccordionType: AccordionType.Checkbox,
    value:'skin-concern',
    options: [{ title: 'Brightening', count: 1 }, { title: 'Acne', count: 2 }, { title: 'Aging', count: 3 }, { title: 'Discolorations', count: 5 }, { title: 'Preventative', count: 6 }, { title: 'Sensitive Skin', count: 7 }]
  },

  {
    title: 'Skin Type',
    value:'skin-type',
    AccordionType: AccordionType.Checkbox,
    options: [{ title: 'Coombination', count: 1 }, { title: 'Dry', count: 2 }, { title: 'Normal', count: 3 }, { title: 'Oily', count: 4 }, { title: 'Sensitive', count: 5 }]
  },

  {
    title: 'Sort By',
    value:'Sort-by',
    AccordionType: AccordionType.Radio,
    options: [{ title: 'Alphabetical A - Z' }, { title: 'Alphabetical Z - A' }, { title: 'Price Low to High' }, { title: 'Price High to Low' }]
  }

]