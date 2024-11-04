const url=import.meta.env.VITE_SCROLL__PCA_VTEXASSETS;

export const products = [
  {
    id: 1,
    name: 'Sensi Peel®',
    image:
      `${url}/ids/156900-608-auto/sensi-peel.jpg?v=638579579116970000&width=608&height=auto&aspect=true`,
     images: [
      `${url}/ids/156900-608-auto/sensi-peel.jpg?v=638579579116970000&width=608&height=auto&aspect=true`,
      `${url}/ids/156637-1296-auto/PeelPortfolio_1Skincare_2400x2400.jpg?v=638500909298400000&width=1296&height=auto&aspect=true`,
    ],  
    rating: 5.0,
    
    isBestSeller: true,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
    reviews: [
      { stars: 5, count: 100 },
      { stars: 4, count: 30 },
      { stars: 3, count: 10 },
      { stars: 2, count: 5 },
      { stars: 1, count: 5 },
    ],
  },
  {
    id: 2,
    name: 'Collagen Hydrator',
    image:
      `${url}/ids/156792-608-auto/collagen-hydrator.jpg?v=638578871156130000&width=608&height=auto&aspect=true`,
      images: [
        `${url}/ids/156792-1296-auto/collagen-hydrator.jpg?v=638578871156130000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156436-1296-auto/Collagen-Hydrator-Ingredients.jpg?v=638310155445900000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156437-1296-auto/Collagen-Hydrator-Hydrates-and-FirmsDrySkin.jpg?v=638310155580670000&width=1296&height=auto&aspect=true`,
      `${url}/ids/156438-1296-auto/Product-Swatches-Collagen-Hydrator.jpg?v=638310155738530000&width=1296&height=auto&aspect=true`,
      `${url}/ids/156793-1296-auto/collagen-hydrator-with-backbar.jpg?v=638578871380130000&width=1296&height=auto&aspect=true`
      ],
    rating: 4.8,
    isBestSeller: false,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
    reviews: [
      { stars: 5, count: 100 },
      { stars: 4, count: 30 },
      { stars: 3, count: 10 },
      { stars: 2, count: 5 },
      { stars: 1, count: 5 },
    ],
  },
  {
    id: 3,
    name: 'ExLinea® Pro Peptide Serum',
    image:
      `${url}/ids/156810-608-auto/exlinea-pro.jpg?v=638578896004000000&width=608&height=auto&aspect=true`,
      images: [
        `${url}/ids/156810-1296-auto/exlinea-pro.jpg?v=638578896004000000&width=1296&height=auto&aspect=true`,
        `${url}/ids/155989-1296-auto/21131-ExLinea-Pro-Peptide-Serum--BA1-7.jpg?v=638307171331670000&width=1296&height=auto&aspect=true`,
        `${url}/ids/155992-1296-auto/21131-Exlinea-Pro-Peptide-Serum-AllExpressions-No-lines-4.jpg?v=638307171726670000&width=1296&height=auto&aspect=true`,
      `${url}/ids/156811-1296-auto/pcaskin-number1-skincare-brand.jpg?v=638578896408800000&width=1296&height=auto&aspect=true`,
      `${url}/ids/156793-1296-auto/collagen-hydrator-with-backbar.jpg?v=638578871380130000&width=1296&height=auto&aspect=true`
      ],
    rating: 5.0,
    isBestSeller: false,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
    reviews: [
      { stars: 5, count: 100 },
      { stars: 4, count: 30 },
      { stars: 3, count: 10 },
      { stars: 2, count: 5 },
      { stars: 1, count: 5 },
    ],
  },
  {
    id: 4,
    name: 'Hyaluronic Acid Boosting Serum',
    image:`${url}/ids/157014-608-auto/HABS-elle-shape-newbeauty-1oz.jpg?v=638633086347900000&width=608&height=auto&aspect=true`,
    images: [
      `${url}/ids/157014-1296-auto/HABS-elle-shape-newbeauty-1oz.jpg?v=638633086347900000&width=1296&height=auto&aspect=true`,
      `${url}/ids/157015-1296-auto/new-habs-key-benefits.jpg?v=638633086457700000&width=1296&height=auto&aspect=true`,
      `${url}/ids/157016-1296-auto/new-habs-lifestyle.jpg?v=638633086757700000&width=1296&height=auto&aspect=true`,
	  `${url}/ids/157017-1296-auto/new-habs-how-to-use.jpg?v=638633086867400000&width=1296&height=auto&aspect=true`,
    ],
    rating: 4.6,
    isBestSeller: true,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
    reviews: [
      { stars: 5, count: 100 },
      { stars: 4, count: 30 },
      { stars: 3, count: 10 },
      { stars: 2, count: 5 },
      { stars: 1, count: 5 },
    ],
  },
  {
    id: 5,
    name: 'Brighten: Therapeutic Blackberry Mask',
    image:
      `${url}/ids/156918-608-auto/Brighten-Therapeutic-Blackberry-Mask.jpg?v=638579600468300000&width=608&height=auto&aspect=true`,
      images: [
        `${url}/ids/156918-1296-auto/Brighten-Therapeutic-Blackberry-Mask.jpg?v=638579600468300000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156074-1296-auto/13301-Brighten-Therapeutic-Blackberry-Mask-BA-3.jpg?v=638307182312470000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156919-1296-auto/pcaskin-number1-skincare-brand-2.jpg?v=638579600709230000&width=1296&height=auto&aspect=true`
      ],
    rating: 2.8,
    isBestSeller: false,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
    reviews: [
      { stars: 5, count: 100 },
      { stars: 4, count: 30 },
      { stars: 3, count: 10 },
      { stars: 2, count: 5 },
      { stars: 1, count: 5 },
    ],
  },

  {
    id: 6,
    name: 'ExLinea® Peptide Smoothing Serum',
    image:
      `${url}/ids/156998-608-auto/exlinea-peptide-serum-1oz-N.jpg?v=638610792735570000&width=608&height=auto&aspect=true`,
      images: [
        `${url}/ids/156998-608-auto/exlinea-peptide-serum-1oz-N.jpg?v=638610792735570000&width=608&height=auto&aspect=true`,
        `${url}/ids/156074-1296-auto/13301-Brighten-Therapeutic-Blackberry-Mask-BA-3.jpg?v=638307182312470000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156919-1296-auto/pcaskin-number1-skincare-brand-2.jpg?v=638579600709230000&width=1296&height=auto&aspect=true`
      ],
    rating: 4.6,
    isBestSeller: true,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
    reviews: [
      { stars: 5, count: 100 },
      { stars: 4, count: 30 },
      { stars: 3, count: 10 },
      { stars: 2, count: 5 },
      { stars: 1, count: 5 },
    ],
  },
  {
    id: 7,
    name: 'Nutrient Toner',
    image:
      `${url}/ids/156767-608-auto/Nutrient_Toner_21104_4.4oz.jpg?v=638578766353170000&width=608&height=auto&aspect=true`,
      images: [
        `${url}/ids/156767-608-auto/Nutrient_Toner_21104_4.4oz.jpg?v=638578766353170000&width=608&height=auto&aspect=true`,
        `${url}/ids/156074-1296-auto/13301-Brighten-Therapeutic-Blackberry-Mask-BA-3.jpg?v=638307182312470000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156919-1296-auto/pcaskin-number1-skincare-brand-2.jpg?v=638579600709230000&width=1296&height=auto&aspect=true`
      ],
    rating: 4.5,
    isBestSeller: true,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
    reviews: [
      { stars: 5, count: 100 },
      { stars: 4, count: 30 },
      { stars: 3, count: 10 },
      { stars: 2, count: 5 },
      { stars: 1, count: 5 },
    ],
  },
  {
    id: 8,
    name: 'Advanced Treatment Booster',
    image:
      `${url}/ids/156889-608-auto/advancted-treatment-booster.jpg?v=638579570407470000&width=608&height=auto&aspect=true`,
      images: [
        `${url}/ids/156889-608-auto/advancted-treatment-booster.jpg?v=638579570407470000&width=608&height=auto&aspect=true`,
        `${url}/ids/156074-1296-auto/13301-Brighten-Therapeutic-Blackberry-Mask-BA-3.jpg?v=638307182312470000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156919-1296-auto/pcaskin-number1-skincare-brand-2.jpg?v=638579600709230000&width=1296&height=auto&aspect=true`
      ],
    rating: 5.0,
    isBestSeller: true,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
    reviews: [
      { stars: 5, count: 100 },
      { stars: 4, count: 30 },
      { stars: 3, count: 10 },
      { stars: 2, count: 5 },
      { stars: 1, count: 5 },
    ],
  },
];
export const relatedProducts = [
  {
    id: 1,
    name: 'Sensi Peel®',
    image:
      `${url}/ids/156900-608-auto/sensi-peel.jpg?v=638579579116970000&width=608&height=auto&aspect=true`,
     images: [
      `${url}/ids/156900-608-auto/sensi-peel.jpg?v=638579579116970000&width=608&height=auto&aspect=true`,
      `${url}/ids/156637-1296-auto/PeelPortfolio_1Skincare_2400x2400.jpg?v=638500909298400000&width=1296&height=auto&aspect=true`,
    ],  
    rating: 5.0,
    
    isBestSeller: true,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
   
  },
  {
    id: 2,
    name: 'Collagen Hydrator',
    image:
      `${url}/ids/156792-608-auto/collagen-hydrator.jpg?v=638578871156130000&width=608&height=auto&aspect=true`,
      images: [
        `${url}/ids/156792-1296-auto/collagen-hydrator.jpg?v=638578871156130000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156436-1296-auto/Collagen-Hydrator-Ingredients.jpg?v=638310155445900000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156437-1296-auto/Collagen-Hydrator-Hydrates-and-FirmsDrySkin.jpg?v=638310155580670000&width=1296&height=auto&aspect=true`,
      `${url}/ids/156438-1296-auto/Product-Swatches-Collagen-Hydrator.jpg?v=638310155738530000&width=1296&height=auto&aspect=true`,
      `${url}/ids/156793-1296-auto/collagen-hydrator-with-backbar.jpg?v=638578871380130000&width=1296&height=auto&aspect=true`
      ],
    rating: 4.8,
    isBestSeller: false,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
    
  },
  {
    id: 3,
    name: 'ExLinea® Pro Peptide Serum',
    image:
      `${url}/ids/156810-608-auto/exlinea-pro.jpg?v=638578896004000000&width=608&height=auto&aspect=true`,
      images: [
        `${url}/ids/156810-1296-auto/exlinea-pro.jpg?v=638578896004000000&width=1296&height=auto&aspect=true`,
        `${url}/ids/155989-1296-auto/21131-ExLinea-Pro-Peptide-Serum--BA1-7.jpg?v=638307171331670000&width=1296&height=auto&aspect=true`,
        `${url}/ids/155992-1296-auto/21131-Exlinea-Pro-Peptide-Serum-AllExpressions-No-lines-4.jpg?v=638307171726670000&width=1296&height=auto&aspect=true`,
      `${url}/ids/156811-1296-auto/pcaskin-number1-skincare-brand.jpg?v=638578896408800000&width=1296&height=auto&aspect=true`,
      `${url}/ids/156793-1296-auto/collagen-hydrator-with-backbar.jpg?v=638578871380130000&width=1296&height=auto&aspect=true`
      ],
    rating: 5.0,
    isBestSeller: false,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
   
  },
  {
    id: 4,
    name: 'Hyaluronic Acid Boosting Serum',
    image:`${url}/ids/157014-608-auto/HABS-elle-shape-newbeauty-1oz.jpg?v=638633086347900000&width=608&height=auto&aspect=true`,
    images: [
      `${url}/ids/157014-1296-auto/HABS-elle-shape-newbeauty-1oz.jpg?v=638633086347900000&width=1296&height=auto&aspect=true`,
      `${url}/ids/157015-1296-auto/new-habs-key-benefits.jpg?v=638633086457700000&width=1296&height=auto&aspect=true`,
      `${url}/ids/157016-1296-auto/new-habs-lifestyle.jpg?v=638633086757700000&width=1296&height=auto&aspect=true`,
	  `${url}/ids/157017-1296-auto/new-habs-how-to-use.jpg?v=638633086867400000&width=1296&height=auto&aspect=true`,
    ],
    rating: 4.6,
    isBestSeller: true,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
    
  },
  {
    id: 5,
    name: 'Brighten: Therapeutic Blackberry Mask',
    image:
      `${url}/ids/156918-608-auto/Brighten-Therapeutic-Blackberry-Mask.jpg?v=638579600468300000&width=608&height=auto&aspect=true`,
      images: [
        `${url}/ids/156918-1296-auto/Brighten-Therapeutic-Blackberry-Mask.jpg?v=638579600468300000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156074-1296-auto/13301-Brighten-Therapeutic-Blackberry-Mask-BA-3.jpg?v=638307182312470000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156919-1296-auto/pcaskin-number1-skincare-brand-2.jpg?v=638579600709230000&width=1296&height=auto&aspect=true`
      ],
    rating: 2.8,
    isBestSeller: false,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
    
  },

  {
    id: 6,
    name: 'ExLinea® Peptide Smoothing Serum',
    image:
      `${url}/ids/156998-608-auto/exlinea-peptide-serum-1oz-N.jpg?v=638610792735570000&width=608&height=auto&aspect=true`,
      images: [
        `${url}/ids/156998-608-auto/exlinea-peptide-serum-1oz-N.jpg?v=638610792735570000&width=608&height=auto&aspect=true`,
        `${url}/ids/156074-1296-auto/13301-Brighten-Therapeutic-Blackberry-Mask-BA-3.jpg?v=638307182312470000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156919-1296-auto/pcaskin-number1-skincare-brand-2.jpg?v=638579600709230000&width=1296&height=auto&aspect=true`
      ],
    rating: 4.6,
    isBestSeller: true,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
  },
  {
    id: 7,
    name: 'Nutrient Toner',
    image:
      `${url}/ids/156767-608-auto/Nutrient_Toner_21104_4.4oz.jpg?v=638578766353170000&width=608&height=auto&aspect=true`,
      images: [
        `${url}/ids/156767-608-auto/Nutrient_Toner_21104_4.4oz.jpg?v=638578766353170000&width=608&height=auto&aspect=true`,
        `${url}/ids/156074-1296-auto/13301-Brighten-Therapeutic-Blackberry-Mask-BA-3.jpg?v=638307182312470000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156919-1296-auto/pcaskin-number1-skincare-brand-2.jpg?v=638579600709230000&width=1296&height=auto&aspect=true`
      ],
    rating: 4.5,
    isBestSeller: true,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
   
  },
  {
    id: 8,
    name: 'Advanced Treatment Booster',
    image:
      `${url}/ids/156889-608-auto/advancted-treatment-booster.jpg?v=638579570407470000&width=608&height=auto&aspect=true`,
      images: [
        `${url}/ids/156889-608-auto/advancted-treatment-booster.jpg?v=638579570407470000&width=608&height=auto&aspect=true`,
        `${url}/ids/156074-1296-auto/13301-Brighten-Therapeutic-Blackberry-Mask-BA-3.jpg?v=638307182312470000&width=1296&height=auto&aspect=true`,
        `${url}/ids/156919-1296-auto/pcaskin-number1-skincare-brand-2.jpg?v=638579600709230000&width=1296&height=auto&aspect=true`
      ],
    rating: 5.0,
    isBestSeller: true,
    description: `This product is designed to deeply hydrate and firm your skin, enhancing its elasticity and overall smoothness. It delivers essential moisture and improves the skin’s ability to retain hydration over time.`,
    features: [
      "Deeply hydrates and firms the skin",
      "Increases the skin's ability to retain moisture",
      "Improves skin elasticity",
      "Enhances skin smoothness"
    ],
   
  },
];
