const url = import.meta.env.VITE_SCROLL__PCA_VTEXASSETS;

export const products = [
  {
    id: 1,
    name: 'Sensi Peel®',
    image:
      `${url}/ids/156900-608-auto/sensi-peel.jpg?v=638579579116970000&width=608&height=auto&aspect=true`,
    rating: 5.0,
    isBestSeller: true,
    discription: 'Sensi Peel® is a unique chemical peel option for all patients, including those with sensitive skin. This universal 6% TCA solution will improve surface texture and brighten the skin while helping promote an even skin tone. This multi-faceted and skin-brightening treatment is an excellent option for sensitive skin and higher Fitzpatrick skin types.'
  },
  {
    id: 2,
    name: 'Collagen Hydrator',
    image:
      `${url}/ids/156792-608-auto/collagen-hydrator.jpg?v=638578871156130000&width=608&height=auto&aspect=true`,
    rating: 4.8,
    isBestSeller: false,
    discription: 'A rich moisturizer that hydrates and firms dry and mature skin.'
  },
  {
    id: 3,
    name: 'ExLinea® Pro Peptide Serum',
    image:
      `${url}/ids/156810-608-auto/exlinea-pro.jpg?v=638578896004000000&width=608&height=auto&aspect=true`,
    rating: 5.0,
    isBestSeller: false,
    discription: 'Dramatically minimize the appearance of fine lines and wrinkles with this advanced neuropeptide spot treatment. Formulated with our proprietary technology, Peptide-Pro Complex, this powerful blend contains four unique ingredients that work synergistically to help relax facial muscle contractions and reduce the appearance of visible expression lines.'
  },
  {
    id: 4,
    name: 'Hyaluronic Acid Boosting Serum',
    image: `${url}/ids/157014-608-auto/HABS-elle-shape-newbeauty-1oz.jpg?v=638633086347900000&width=608&height=auto&aspect=true`,
    rating: 4.6,
    isBestSeller: true,
    discription: 'A professional peel designed specifically for moderate-to-sever inflamed acne. Acne Peel Plus combats active breakouts, prevents, recurrence, and targets congested pores to improve the appearance of acne-prone skin in just one peeling session. This peel blend, also containing soothing antioxidants that help calm the skin, reduces visible redness, and evens skin tone. '
  },
  {
    id: 5,
    name: 'Brighten: Therapeutic Blackberry Mask',
    image:
      `${url}/ids/156918-608-auto/Brighten-Therapeutic-Blackberry-Mask.jpg?v=638579600468300000&width=608&height=auto&aspect=true`,
    rating: 2.8,
    isBestSeller: false,
    discription: 'xperience a dual-action professional treatment that exfoliates and detoxifies while infusing the skin with potent antioxidants to help nourish, refresh, and protect. Brighten: Therapeutic Blackberry Mask offers a unique treatment experience for patients of all skin types who want a smoother, more luminous complexion.'
  },

  {
    id: 6,
    name: 'ExLinea® Peptide Smoothing Serum',
    image:
      `${url}/ids/156998-608-auto/exlinea-peptide-serum-1oz-N.jpg?v=638610792735570000&width=608&height=auto&aspect=true`,
    rating: 4.6,
    isBestSeller: true,
    discription: 'his peptide spot treatment serum minimizes the appearance of expression lines and hydrates, smooths and firms aging skin.'
  },
  {
    id: 7,
    name: 'Nutrient Toner',
    image:
      `${url}/ids/156767-608-auto/Nutrient_Toner_21104_4.4oz.jpg?v=638578766353170000&width=608&height=auto&aspect=true`,
    rating: 4.5,
    isBestSeller: true,
    discription: 'A pumpkin wine-based toner designed to refine the appearance of pores, gently exfoliate and provide added nutritional benefit to the skin.'
  },
  {
    id: 8,
    name: 'Advanced Treatment Booster',
    image:
      `${url}/ids/156889-608-auto/advancted-treatment-booster.jpg?v=638579570407470000&width=608&height=auto&aspect=true`,
    rating: 5.0,
    isBestSeller: true,
    discription: 'Increase exfoliation, restore keratinization and barrier function While reducing redness and soothing with this retinoid booster for all skin types'
  },
];

export const relatedProducts = [
  {
    id: 1,
    name: 'Sensi Peel®',
    image:
      `${url}/ids/156900-608-auto/sensi-peel.jpg?v=638579579116970000&width=608&height=auto&aspect=true`,
    rating: 5.0,
    isBestSeller: true,
  },
  {
    id: 2,
    name: 'Collagen Hydrator',
    image:
      `${url}/ids/156792-608-auto/collagen-hydrator.jpg?v=638578871156130000&width=608&height=auto&aspect=true`,
    rating: 4.8,
    isBestSeller: false,
  },
  {
    id: 3,
    name: 'ExLinea® Pro Peptide Serum',
    image:
      `${url}/ids/156810-608-auto/exlinea-pro.jpg?v=638578896004000000&width=608&height=auto&aspect=true`,
    rating: 5.0,
    isBestSeller: false,
  },
  {
    id: 4,
    name: 'Hyaluronic Acid Boosting Serum',
    image: `${url}/ids/157014-608-auto/HABS-elle-shape-newbeauty-1oz.jpg?v=638633086347900000&width=608&height=auto&aspect=true`,
    rating: 4.6,
    isBestSeller: true,
  },
  {
    id: 5,
    name: 'Brighten: Therapeutic Blackberry Mask',
    image:
      `${url}/ids/156918-608-auto/Brighten-Therapeutic-Blackberry-Mask.jpg?v=638579600468300000&width=608&height=auto&aspect=true`,
    rating: 2.8,
    isBestSeller: false,
  },
]
export const viewAllProducts = [
  {
    id: 100,
    name: 'C&E Strength Max',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156785-1296-auto/CE-max.jpg?v=638578860503430000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: true,
    category: 'Antioxidents', // Add category here
    price: 5000.00

  },

  {
    id: 101,
    name: 'Daily Defense Broad Spectrum SPF 50+',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156798-1296-auto/daily-defense-spf.jpg?v=638578876745900000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Broad+Spectrum', // Add category here
    price: 2000.00
  },
  {
    id: 102,
    name: 'Hydrator Plus Broad Spectrum SPF 30',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156825-1296-auto/hydrator-plus-SPF.jpg?v=638578916468130000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Broad spectrum SPF', // Add category here
    price: 2550.00

  },
  {
    id: 103,
    name: 'BPO 5% Cleanser',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156991-1296-auto/bpo-cleanser-NL.jpg?v=638610751805730000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Cleansers-toners', // Add category here
    price: 1000.00

  },
  {
    id: 104,
    name: 'Hyaluronic Acid Lip Booster',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156740-1296-auto/HyaluronicAcidLipBooster-21191-NL-thumbnail-pro.jpg?v=638578737564870000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Eye, neck, lip', // Add category here
    price: 2000.00

  },
  {
    id: 105,
    name: 'Detoxifying Mask',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156803-1296-auto/detoxifying-mask.jpg?v=638578882428530000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Masks', // Add category here
    price: 2500.00

  },
  {
    id: 106,
    name: 'Après Peel® Hydrating Balm',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156783-1296-auto/apres-peel-hydrating-balm.jpg?v=638578852838430000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Moisturizers', // Add category here
    price: 8400.00

  },
  {
    id: 107,
    name: 'Acne Cream',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156778-1296-auto/AcneCream_21174_white-background.jpg?v=638578845812000000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: true,
    category: 'Acne Treatment', // Add category here
    price: 8000.00

  },
  {
    id: 108,
    name: 'Acne Gel with OmniSome',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156989-1296-auto/AcneGel_23375_1oz_award.jpg?v=638610566864500000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Acne Treatment', // Add category here
    price: 8000.00

  },
  {
    id: 109,
    name: 'Active Broad Spectrum SPF 45',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156780-1296-auto/Active-broad-spectrum-spf.jpg?v=638578847631000000&width=1296&height=auto&aspect=true',
    rating: 4.4,
    isBestSeller: false,
    category: 'Sunscreen', // Add category here
    price: 8530.00

  },
  {
    id: 110,
    name: 'Anti-Redness Serum',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156781-1296-auto/anti-redness-serum.jpg?v=638578850098070000&width=1296&height=auto&aspect=true',
    rating: 3.3,
    isBestSeller: false,
    category: 'Serums', // Add category here
    price: 8130.00
  },
  {
    id: 111,
    name: 'Après Peel Hydrating Balm',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156783-1296-auto/apres-peel-hydrating-balm.jpg?v=638578852838430000&width=1296&height=auto&aspect=true',
    rating: 3.3,
    isBestSeller: false,
    category: 'Balms', // Add category here
    price: 8520.00
  },
  {
    id: 112,
    name: 'BPO 5% Cleanser',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156991-1296-auto/bpo-cleanser-NL.jpg?v=638610751805730000&width=1296&height=auto&aspect=true',
    rating: 3.3,
    isBestSeller: false,
    category: 'Cleansers & toners', // Add category here
    price: 9530.00
  },
  {
    id: 113,
    name: 'C&E Advanced',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156717-1296-auto/CE-advanced-sliver-21188-pro.jpg?v=638578724413970000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Antioxidants', // Add category here
    price: 4050.00
  },
  {
    id: 114,
    name: 'Active Broad Spectrum SPF 45',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156780-1296-auto/Active-broad-spectrum-spf.jpg?v=638578847631000000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Broad-spectrum-SPF', // Add category here
    price: 6050.00
  },
  {
    id: 115,
    name: 'C&E Strength Max',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156806-1296-auto/dual-action-redness-relief.jpg?v=638578885155670000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: true,
    category: 'Best Seller', // Add category here
    price: 75000.00
  },
  {
    id: 116,
    name: 'C&E Strength Max',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156767-1296-auto/Nutrient_Toner_21104_4.4oz.jpg?v=638578766353170000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Backbar', // Add category here
    price: 15000.00
  },
  {
    id: 117,
    name: 'C&E Strength Max',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156989-1296-auto/AcneGel_23375_1oz_award.jpg?v=638610566864500000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Retail', // Add category hereSample
    price: 25000.00
  },
  {
    id: 118,
    name: 'C&E Strength Max',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156767-1296-auto/Nutrient_Toner_21104_4.4oz.jpg?v=638578766353170000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Sample', // Add category here
    price: 35000.00

  },
  {
    id: 120,
    name: 'Hyaluronic Acid Overnight Mask',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156746-1296-auto/HyaluronicOvernightMask_21107_1.8oz.jpg?v=638578743196700000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Brightening',
    price: 55000.00

  },
  {
    id: 119,
    name: 'Acne Cream',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156778-1296-auto/AcneCream_21174_white-background.jpg?v=638578845812000000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Acne', // Add category here
    price: 55000.00

  },
  {
    id: 120,
    name: 'Hyaluronic Acid Boosting Serum',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156810-1296-auto/exlinea-pro.jpg?v=638578896004000000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Discolorations', // Add category here
    price: 50400.00

  }, {
    id: 121,
    name: 'ExLinea® Pro Peptide Serum',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156810-1296-auto/exlinea-pro.jpg?v=638578896004000000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Preventative',
    price: 50400.00

  },
  {
    id: 122,
    name: 'Dual Action Redness Relief',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156806-1296-auto/dual-action-redness-relief.jpg?v=638578885155670000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Sensitive Skin', // Add category here
    price: 50050.00

  },
  {
    id: 123,
    name: 'Acne Cream',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156778-1296-auto/AcneCream_21174_white-background.jpg?v=638578845812000000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Coombination', // Add category hereSensitive SkinCoombination
    price: 50400.00

  },
  {
    id: 124,
    name: '4% Retinol Peel',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156885-1296-auto/4percent-retinol-peel.jpg?v=638579566473630000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Dry', // Add category hereSensitive SkinCoombination
    price: 50000.00

  },
  {
    id: 125,
    name: '4% Retinol Peel',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156785-1296-auto/CE-max.jpg?v=638578860503430000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Normal', // Add category hereSensitive SkinCoombination
    price: 5100.00

  },
  {
    id: 126,
    name: 'Acne Cream',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156778-1296-auto/AcneCream_21174_white-background.jpg?v=638578845812000000&width=1296&height=auto&aspect=true',
    isBestSeller: false,
    category: 'Oily', // Add category hereSensitive SkinCoombination
    price: 1000.00

  },
  {
    id: 126,
    name: 'Active Broad Spectrum SPF 45',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156780-1296-auto/Active-broad-spectrum-spf.jpg?v=638578847631000000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Sensitive', // Add category hereSensitive SkinCoombination
    price: 6000.00

  },
  {
    id: 127,
    name: 'Active Broad Spectrum',
    image: 'https://pcaskin.vtexassets.com/arquivos/ids/156780-1296-auto/Active-broad-spectrum-spf.jpg?v=638578847631000000&width=1296&height=auto&aspect=true',
    rating: 0.0,
    isBestSeller: false,
    category: 'Sensitive', // Add category hereSensitive SkinCoombination
    price: 6000.00

  },
];
