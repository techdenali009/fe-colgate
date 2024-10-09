const url=import.meta.env.VITE_SCROLL__PCA_VTEXASSETS;

export const products = [
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
    image:`${url}/ids/157014-608-auto/HABS-elle-shape-newbeauty-1oz.jpg?v=638633086347900000&width=608&height=auto&aspect=true`,
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

  {
    id: 6,
    name: 'ExLinea® Peptide Smoothing Serum',
    image:
      `${url}/ids/156998-608-auto/exlinea-peptide-serum-1oz-N.jpg?v=638610792735570000&width=608&height=auto&aspect=true`,
    rating: 4.6,
    isBestSeller: true,
  },
  {
    id: 7,
    name: 'Nutrient Toner',
    image:
      `${url}/ids/156767-608-auto/Nutrient_Toner_21104_4.4oz.jpg?v=638578766353170000&width=608&height=auto&aspect=true`,
    rating: 4.5,
    isBestSeller: true,
  },
  {
    id: 8,
    name: 'Advanced Treatment Booster',
    image:
      `${url}/ids/156889-608-auto/advancted-treatment-booster.jpg?v=638579570407470000&width=608&height=auto&aspect=true`,
    rating: 5.0,
    isBestSeller: true,
  },
];
export const Reviewproducts = [
  {
    id: 1,
    name: 'Kim W',
    location: 'Wexford, PA',
    reviewCount: 1,
    votesCount: 3,
    ageGroup: '35 to 44',
    rating: 5.0,
    reviewTitle: 'Works like a charm!',
    reviewerName: 'Kim W',
    timeAgo: '7 months ago',
    reviewContent: 'Absolutely love this product. I\'ve tested it on clients as well as myself and it definitely calms down the red!',
    productName:'Sensi Peel'
  },
  {
    id: 2,
    name: 'Remmy',
    location: 'Denton texas',
    reviewCount: 2,
    votesCount: 0,
    ageGroup: '35 to 44',
    rating: 1.0,
    reviewTitle: 'It gives me reaction on my face',
    reviewerName: 'Remmy',
    timeAgo: 'a year ago',
    reviewContent: 'It not working for me it’s gives me reaction on my face.'
  },
  {
    id: 3,
    name: 'Tracy',
    location: 'Exeter NH',
    reviewCount: 27,
    votesCount: 0,
    ageGroup: '45 to 54',
    rating: 5.0,
    reviewTitle: 'LOVE THIS PRODUCT',
    reviewerName: 'Tracy',
    timeAgo: 'a year ago',
    reviewContent: 'Best product EVER Just placed an order for another one to have as back up.',
  },
  {
    id: 4,
    name: 'Tay',
    location: 'Idaho',
    reviewCount: 1,
    votesCount: 0,
    ageGroup: '25 to 34',
    rating: 5.0,
    reviewTitle: 'Idaho',
    reviewerName: 'Tay',
    timeAgo: 'Idaho',
    reviewContent: 'This serum is my absolute favorite. I use it nightly based on my personal preference. I have telengictasias on my cheeks and jaw area and this stuff is the only thing that has truly helped! It treats and prevents redness from happening. This will forever be a staple in my routine.',
  },
  {
    id: 5,
    name: 'Leanne',
    location: '',
    reviewCount: 1,
    votesCount: 0,
    ageGroup: '35 to 44',
    rating: 1.0,
    reviewTitle: 'Didn\'t work for me',
    reviewerName: 'Leanne',
    timeAgo: 'a year ago',
    reviewContent: 'I was really hoping this would help my redness since some of the reviews sounded promising. Unfortunately, after a few weeks trying the product, I found this made my skin more red.',
  },
  {
    id: 6,
    name: 'M',
    location: 'CA',
    reviewCount: 2,
    votesCount: 0,
    ageGroup: '35 to 44',
    rating: 5.0,
    reviewTitle: 'Miss',
    reviewerName: 'M',
    timeAgo: 'a year ago',
    reviewContent: 'I have rosasea and psoriasis on my face. This is the only product that keeps me from looking beet red.',
  },
  {
    id: 7,
    name: 'Kim W',
    location: 'Wexford, PA',
    reviewCount: 1,
    votesCount: 3,
    ageGroup: '35 to 44',
    rating: 5.0,
    reviewTitle: 'Works like a charm!',
    reviewerName: 'Kim W',
    timeAgo: '7 months ago',
    reviewContent: 'Absolutely love this product. I\'ve tested it on clients as well as myself and it definitely calms down the red!',
  },
  {
    id: 8,
    name: 'customer',
    location: 'MA',
    reviewCount: 1,
    votesCount: 0,
    ageGroup: '',
    rating: 1.0,
    reviewTitle: 'Pump does NOT work',
    reviewerName: 'Kim W',
    timeAgo: 'a year ago',
    reviewContent: 'I am a PCA skin product fan and usually do not give reviews. However, it has been quite disappointing to get this product. It is very hard to pump it out of the bottle and the product itself is not very effective. I just stopped using it as I do not have the time in the mornings to pump more than 50 times to get the product out. I wish, I had gotten the Anti Redness Serum which is cheaper and has better reviews.',
  }
]


