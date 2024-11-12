
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
  AllProducts: 'All Products'
}
export const plpFilters = [
  {
    title: 'Product Category',
    AccordionType: AccordionType.Label,
    options: [
      { title: 'All Products', count: 1 },
      { title: 'Antioxidants', count: 2 },
      { title: 'Broad Spectrum SPF', count: 3 },
      { title: 'Cleansers & Toners', count: 4 },
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
    title: 'Product Types',
    AccordionType: AccordionType.Checkbox,
    options: [{ title: 'Backbar', count: 1 }, { title: 'Retail', count: 2 }, { title: 'Sample', count: 3 }]
  },
  {
    title: 'Best Seller',
    AccordionType: AccordionType.Checkbox,
    options: [{ title: 'Best Seller', count: 1 }]
  },
  {
    title: 'Skin Concer',
    AccordionType: AccordionType.Checkbox,
    options: [{ title: 'Acne', count: 1 }, { title: 'Discolorations', count: 2 }, { title: 'Sensitive Skin', count: 3 }]
  },

  {
    title: 'Skin Type',
    AccordionType: AccordionType.Checkbox,
    options: [{ title: 'Coombination', count: 1 }, { title: 'Dry', count: 2 }, { title: 'Normal', count: 3 }, { title: 'Oily', count: 4 }, { title: 'Sensitive', count: 5 }]
  },

  {
    title: 'Sort By',
    AccordionType: AccordionType.Radio,
    options: [{ title: 'Alphabetical A - Z' }, { title: 'Alphabetical Z - A' }, { title: 'Price Low to High' }, { title: 'Price High to Low' }]
  }
 
]