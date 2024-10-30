const url=import.meta.env.VITE_SCROLL__PCA_VTEXASSETS;

export const products = [
  {
    id: 1,
    name: 'Sensi Peel®',
    image:
      `${url}/ids/156900-608-auto/sensi-peel.jpg?v=638579579116970000&width=608&height=auto&aspect=true`,
    rating: 5.0,
    isBestSeller: true,
    discription:'Sensi Peel® is a unique chemical peel option for all patients, including those with sensitive skin. This universal 6% TCA solution will improve surface texture and brighten the skin while helping promote an even skin tone. This multi-faceted and skin-brightening treatment is an excellent option for sensitive skin and higher Fitzpatrick skin types.'
  },
  {
    id: 2,
    name: 'Collagen Hydrator',
    image:
      `${url}/ids/156792-608-auto/collagen-hydrator.jpg?v=638578871156130000&width=608&height=auto&aspect=true`,
    rating: 4.8,
    isBestSeller: false,
    discription:'A rich moisturizer that hydrates and firms dry and mature skin.'
  },
  {
    id: 3,
    name: 'ExLinea® Pro Peptide Serum',
    image:
      `${url}/ids/156810-608-auto/exlinea-pro.jpg?v=638578896004000000&width=608&height=auto&aspect=true`,
    rating: 5.0,
    isBestSeller: false,
    discription:'Dramatically minimize the appearance of fine lines and wrinkles with this advanced neuropeptide spot treatment. Formulated with our proprietary technology, Peptide-Pro Complex, this powerful blend contains four unique ingredients that work synergistically to help relax facial muscle contractions and reduce the appearance of visible expression lines.'
  },
  {
    id: 4,
    name: 'Hyaluronic Acid Boosting Serum',
    image:`${url}/ids/157014-608-auto/HABS-elle-shape-newbeauty-1oz.jpg?v=638633086347900000&width=608&height=auto&aspect=true`,
    rating: 4.6,
    isBestSeller: true,
    discription:'A professional peel designed specifically for moderate-to-sever inflamed acne. Acne Peel Plus combats active breakouts, prevents, recurrence, and targets congested pores to improve the appearance of acne-prone skin in just one peeling session. This peel blend, also containing soothing antioxidants that help calm the skin, reduces visible redness, and evens skin tone. '
  },
  {
    id: 5,
    name: 'Brighten: Therapeutic Blackberry Mask',
    image:
      `${url}/ids/156918-608-auto/Brighten-Therapeutic-Blackberry-Mask.jpg?v=638579600468300000&width=608&height=auto&aspect=true`,
    rating: 2.8,
    isBestSeller: false,
    discription:'xperience a dual-action professional treatment that exfoliates and detoxifies while infusing the skin with potent antioxidants to help nourish, refresh, and protect. Brighten: Therapeutic Blackberry Mask offers a unique treatment experience for patients of all skin types who want a smoother, more luminous complexion.'
  },

  {
    id: 6,
    name: 'ExLinea® Peptide Smoothing Serum',
    image:
      `${url}/ids/156998-608-auto/exlinea-peptide-serum-1oz-N.jpg?v=638610792735570000&width=608&height=auto&aspect=true`,
    rating: 4.6,
    isBestSeller: true,
    discription:'his peptide spot treatment serum minimizes the appearance of expression lines and hydrates, smooths and firms aging skin.'
  },
  {
    id: 7,
    name: 'Nutrient Toner',
    image:
      `${url}/ids/156767-608-auto/Nutrient_Toner_21104_4.4oz.jpg?v=638578766353170000&width=608&height=auto&aspect=true`,
    rating: 4.5,
    isBestSeller: true,
    discription:'A pumpkin wine-based toner designed to refine the appearance of pores, gently exfoliate and provide added nutritional benefit to the skin.'
  },
  {
    id: 8,
    name: 'Advanced Treatment Booster',
    image:
      `${url}/ids/156889-608-auto/advancted-treatment-booster.jpg?v=638579570407470000&width=608&height=auto&aspect=true`,
    rating: 5.0,
    isBestSeller: true,
    discription:'Increase exfoliation, restore keratinization and barrier function While reducing redness and soothing with this retinoid booster for all skin types'
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
    reviewCount: 9,
    votesCount: 3,
    ageGroup: '17 or under',
    rating: 5.0,
    reviewTitle: 'Works like a charm!',
    reviewerName: 'Kim W',
    timeAgo: '2024-10-22',
    reviewContent: 'Absolutely love this product. I\'ve tested skincare it on clients as well as myself and it definitely calms down the red!',
    like: 0,
    dislike: 0,
    report: false,
    PCA_Responses: {
      id: 1,
      date: '2024-10-20',
      response: 'Thank you for your feedback! We strive to improve our products and appreciate your input. Please reach out if you have any further questions.'
    },
    productName:'Collagen Hydrator'
  },
  {
    id: 2,
    name: 'Remmy',
    location: 'Denton texas',
    reviewCount: 2,
    votesCount: 0,
    ageGroup: '18 to 24',
    rating: 1.0,
    reviewTitle: 'It gives me reaction on my face',
    reviewerName: 'Remmy',
    timeAgo: '2024-03-15',
    reviewContent: 'It not working for me it’s gives me reaction on my face with skincare.',
    like: 0,
    dislike: 0,
    report: false,
    productName:'Sensi Peel®'
  },
  {
    id: 3,
    name: 'Rem',
    location: 'Denton ',
    reviewCount: 10,
    votesCount: 0,
    ageGroup: '25 to 34',
    rating: 2.0,
    reviewTitle: 'It gives me reaction on my face',
    reviewerName: 'Remmy',
    timeAgo: '2024-10-15',
    reviewContent: 'It not working for me skincare gives  me reaction on my face.',
    like: 0,
    dislike: 0,
    report: false,
    PCA_Responses: {
      id: 3,
      date: '2024-10-23',
      response: 'We are so sorry our Dual Action Redness Relief was not a good fit for you and your skin. Please feel free to contact us at customer_care@pcaskin.com regarding your experience and for assistance with finding a product possibly better suited for you. Thanks!'
    },
    productName:'Sensi Peel®'
  },
  {
    id:4 ,
    name: 'my',
    location: ' texas',
    reviewCount: 2,
    votesCount: 0,
    ageGroup: '35 to 44',
    rating: 3.0,
    reviewTitle: 'It gives me reaction on my face',
    reviewerName: 'Remmy',
    timeAgo: '2023-03-15',
    reviewContent: 'skincare not working for me it’s gives me reaction on my face.',
    like: 0,
    dislike: 0,
    report: false,
    productName:'Sensi Peel®'
  },
  {
    id: 5,
    name: 'Remm',
    location: 'Denton texas',
    reviewCount: 22,
    votesCount: 0,
    ageGroup: '35 to 44',
    rating: 4.0,
    reviewTitle: 'It gives me reaction on my face',
    reviewerName: 'Remmy',
    timeAgo: '2023-03-15',
    reviewContent: 'It not working for me it’s gives me reaction on my face.',
    like: 0,
    dislike: 0,
    report: false,
    productName:'Sensi Peel®'
  },
  {
    id: 6,
    name: 'Reee',
    location: 'Denton texas',
    reviewCount: 2,
    votesCount: 0,
    ageGroup: '35 to 44',
    rating: 5.0,
    reviewTitle: 'It gives me reaction on my face',
    reviewerName: 'Remmy',
    timeAgo: '2023-03-15',
    reviewContent: 'It not working for me it’s gives me reaction on my face.',
    like: 0,
    dislike: 0,
    report: false,
    productName:'Sensi Peel®'
  },
  {
    id: 7,
    name: 'Reyy',
    location: 'Denton texas',
    reviewCount: 10,
    votesCount: 0,
    ageGroup: '35 to 44',
    rating: 2.0,
    reviewTitle: 'It gives me reaction on my face',
    reviewerName: 'Remmy',
    timeAgo: '2022-03-15',
    reviewContent: 'It not working for me it’s gives me reaction on my face.',
    like: 0,
    dislike: 0,
    report: false,
    PCA_Responses: {
      id: 7,
      date: '2024-10-23',
      response: 'Thank you for your feedback! We strive to improve our products and appreciate your input. Please reach out if you have any further questions.'
    },
    productName:'Sensi Peel®'
  },
  {
    id: 8,
    name: 'Tracy',
    location: 'Exeter NH',
    reviewCount: 27,
    votesCount: 0,
    ageGroup: '45 to 54',
    rating: 3.0,
    reviewTitle: 'LOVE THIS PRODUCT',
    reviewerName: 'Tracy',
    timeAgo: '2019-09-15',
    reviewContent: 'Best product skincare EVER Just placed an order for another one to have as back up.',
    like: 0,
    dislike: 0,
    report: false,
    PCA_Responses: {
      id: 1,
      date: '2024-10-01',
      response: 'We are so sorry for your experience with our Dual Action Redness Relief. If you purchased from pcaskin.com please contact us with your order information and a description of your experience. If you purchased from another authorized retailer, please contact them regarding their return/refund policies. '
    },
    productName:'Advanced Treatment Booster'
  },
  {
    id: 9,
    name: 'Tay',
    location: 'Idaho',
    reviewCount: 11,
    votesCount: 0,
    ageGroup: '25 to 34',
    rating: 5.0,
    reviewTitle: 'My FAVORITE!',
    reviewerName: 'Tay',
    timeAgo: '2021-03-05',
    reviewContent: 'This serum is my absolute favorite. I use it nightly based on my personal preference. I have telengictasias on my cheeks and jaw area and this stuff is the only thing that has truly helped! It treats and prevents redness from happening. This will forever be a staple in my routine.',
    like: 0,
    dislike: 0,
    report: false,
    productName:'Sensi Peel®'
  },
  {
    id: 10,
    name: 'Leanne',
    location: '',
    reviewCount: 0,
    votesCount: 0,
    ageGroup: '65 or over',
    rating: 1.0,
    reviewTitle: 'Didn\'t work for me',
    reviewerName: 'Leanne',
    timeAgo: '2021-03-15',
    reviewContent: 'I was really hoping this would help my redness since some of the reviews sounded promising. Unfortunately, after a few weeks trying the product, I found this made my skin more red.',
    like: 0,
    dislike: 0,
    report: false,
    productName:'Nutrient Toner'
  },
  {
    id: 11,
    name: 'M',
    location: 'CA',
    reviewCount: 2,
    votesCount: 0,
    ageGroup: '35 to 44',
    rating: 5.0,
    reviewTitle: 'Miss',
    reviewerName: 'M',
    timeAgo: '2023-08-15',
    reviewContent: 'I have rosasea and psoriasis on my face. This is the only product that keeps me from looking beet red.',
    like: 0,
    dislike: 0,
    report: false,
    productName:'ExLinea® Pro Peptide Serum'
  },
  {
    id: 12,
    name: 'Kim W',
    location: 'Wexford, PA',
    reviewCount: 1,
    votesCount: 3,
    ageGroup: '35 to 44',
    rating: 5.0,
    reviewTitle: 'Works like a charm!',
    reviewerName: 'Kim W',
    timeAgo: '2023-03-15',
    reviewContent: 'Absolutely love this product. I\'ve tested it on clients as well as myself and it definitely calms down the red!',
    like: 0,
    dislike: 0,
    report: false,
    productName:'Sensi Peel®'
  },
  {
    id: 13,
    name: 'customer',
    location: 'MA',
    reviewCount: 0,
    votesCount: 0,
    ageGroup: '55 to 64',
    rating: 1.0,
    reviewTitle: 'Pump does NOT work',
    reviewerName: 'Kim W',
    timeAgo: '2023-03-04',
    reviewContent: 'I am a PCA skin product fan and usually do not give reviews. However, it has been quite disappointing to get this product. It is very hard to pump it out of the bottle and the product itself is not very effective. I just stopped using it as I do not have the time in the mornings to pump more than 50 times to get the product out. I wish, I had gotten the Anti Redness Serum which is cheaper and has better reviews.',
    like: 0,
    dislike: 0,
    report: false,
    PCA_Responses: {
      id: 13,
      date: '2024-10-23',
      response: 'Thank you for your feedback! We strive to improve our products and appreciate your input. Please reach out if you have any further questions.'
    },
    productName:'Hyaluronic Acid Boosting Serum'
  }
];

export const ratings = ['1','2','3','4','5'];

export const ageGroups = [
  '17 or under',
  '18 to 24',
  '25 to 34',
  '35 to 44', 
  '45 to 54',
  '55 to 64',
  '65 or over',
];

export const reviews = [
  { stars: 5, count: 9 },
  { stars: 4, count: 7 },
  { stars: 3, count: 6 },
  { stars: 2, count: 9 },
  { stars: 1, count: 4 },
];

export const sortByOptions = [
  'Most Relevant',
  'Most Helpful',
  'Highest to Lowest Rating',
  'Lowest to Highest Rating',
  'Most Recent',
]


export const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
};



