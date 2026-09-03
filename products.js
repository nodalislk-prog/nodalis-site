/* Nodalis site data — edited via admin.html on 2026-09-03 */

const SITE = {
  "payment": {
    "bankName": "commercial bank",
    "branch": "bhbhjbm",
    "accountName": "k.vadivel",
    "accountNumber": "hfguhhjkjkhjkh",
    "paypal": "",
    "note": "After paying, please send us the receipt on WhatsApp with your order reference."
  },
  "theme": {
    "v": 5,
    "gold": "#b98a4b",
    "apparel": {
      "bgTop": "#fdfbf7",
      "bgBottom": "#f5ecf3",
      "ink": "#2d2d2d",
      "inkSoft": "#7a6473",
      "nav": "#3a1f42"
    },
    "pet": {
      "bgTop": "#fdfbf7",
      "bgBottom": "#f7eedc",
      "ink": "#2d2d2d",
      "inkSoft": "#7a6a62",
      "nav": "#3a2a3e"
    },
    "mens": {
      "bgTop": "#fbf9f4",
      "bgBottom": "#eeeaf1",
      "ink": "#2d2d2d",
      "inkSoft": "#645c74",
      "nav": "#241c33"
    },
    "home": {
      "g0": "#fdfbf7",
      "g1": "#f4ede4",
      "g2": "#d8c3d8",
      "g3": "#7a4b81",
      "g4": "#2e1b33",
      "ink": "#2d2d2d",
      "inkSoft": "#6b6459",
      "nav": "#2e1b33"
    }
  },
  "type": {
    "serif": "Prata",
    "sans": "Karla",
    "base": 16,
    "hscale": 90
  }
};

const CATEGORIES = {
  "tops": {
    "title": "Tops",
    "line": "Handmade crochet tops, made to order",
    "group": "apparel",
    "meta": "Handmade · Made to order"
  },
  "skirts": {
    "title": "Skirts",
    "line": "Handmade crochet skirts, made to order",
    "group": "apparel",
    "meta": "Handmade · Made to order"
  },
  "bags": {
    "title": "Bags",
    "line": "Handmade crochet bags, made to order",
    "group": "apparel",
    "meta": "Handmade · Made to order"
  },
  "hats": {
    "title": "Hats",
    "line": "Handmade crochet hats, made to order",
    "group": "apparel",
    "meta": "Handmade · Made to order"
  },
  "accessories": {
    "title": "Accessories",
    "line": "Handmade crochet accessories, made to order",
    "group": "apparel",
    "meta": "Handmade · Made to order"
  },
  "shirts": {
    "title": "Shirts & T-Shirts",
    "line": "Handmade crochet shirts and tees, made to order",
    "group": "apparel",
    "meta": "Handmade · Made to order"
  },
  "dogs": {
    "title": "For Dogs",
    "line": "Made to your dog's own measurements",
    "group": "pet",
    "image": "images/pet-dogs.jpg",
    "meta": "Handmade · Made to measure"
  },
  "dog-sweaters": {
    "title": "Sweaters",
    "line": "Handmade crochet dog sweaters, made to measure",
    "group": "pet",
    "parent": "dogs",
    "meta": "Handmade · Made to measure"
  },
  "dog-dresses": {
    "title": "Dresses & Sets",
    "line": "Handmade crochet dog dresses and sets, made to measure",
    "group": "pet",
    "parent": "dogs",
    "meta": "Handmade · Made to measure"
  },
  "dog-bandanas": {
    "title": "Bandanas",
    "line": "Handmade crochet dog bandanas, made to measure",
    "group": "pet",
    "parent": "dogs",
    "meta": "Handmade · Made to measure"
  },
  "dog-collars": {
    "title": "Collars & Leads",
    "line": "Handmade crochet dog collars and leads, made to measure",
    "group": "pet",
    "parent": "dogs",
    "meta": "Handmade · Made to measure"
  },
  "cats": {
    "title": "For Cats",
    "line": "Soft, safe, and endlessly chaseable",
    "group": "pet",
    "image": "images/pet-cats.jpg",
    "meta": "Handmade · Made to order"
  },
  "cat-toys": {
    "title": "Toys",
    "line": "Handmade crochet cat toys, made to order",
    "group": "pet",
    "parent": "cats",
    "meta": "Handmade · Made to order"
  },
  "cat-beds": {
    "title": "Beds & Caves",
    "line": "Handmade crochet cat beds and caves, made to order",
    "group": "pet",
    "parent": "cats",
    "meta": "Handmade · Made to order"
  },
  "cat-collars": {
    "title": "Collars",
    "line": "Handmade crochet cat collars, made to measure",
    "group": "pet",
    "parent": "cats",
    "meta": "Handmade · Made to measure"
  },
  "other": {
    "title": "For Every Companion",
    "line": "Pieces for any pet, and the homes they share",
    "group": "pet",
    "image": "images/pet-other.jpg",
    "meta": "Blankets · Baskets · Toys"
  },
  "pet-blankets": {
    "title": "Blankets",
    "line": "Handmade crochet pet blankets, made to order",
    "group": "pet",
    "parent": "other",
    "meta": "Handmade · Made to order"
  },
  "pet-baskets": {
    "title": "Baskets",
    "line": "Handmade crochet pet baskets, made to order",
    "group": "pet",
    "parent": "other",
    "meta": "Handmade · Made to order"
  },
  "pet-accessories": {
    "title": "Toys & Accessories",
    "line": "Handmade crochet pet toys and accessories, made to order",
    "group": "pet",
    "parent": "other",
    "meta": "Handmade · Made to order"
  },
  "frocks": {
    "title": "Frocks",
    "line": "Frocks",
    "meta": "Handmade · Made to order",
    "group": "apparel"
  }
};

const PRODUCTS = [
  {
    "id": "daisy-dog-sweater",
    "name": "Pink Daisy Puff Sweater",
    "category": "dog-sweaters",
    "price": "from LKR 4,500",
    "short": "Ribbed rose pink, scattered with hand-crocheted daisies",
    "description": "A chunky ribbed sweater in rose pink, finished with hand-crocheted daisy appliqués front and back. Crocheted entirely by hand to your dog's own neck, chest and back measurements. Soft, fur-friendly yarn; gentle cold hand-wash.",
    "colors": [
      "Rose Pink"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeChart": [
      [
        "Size",
        "Breed guide",
        "Neck (cm)",
        "Chest (cm)",
        "Back (cm)"
      ],
      [
        "XS",
        "Chihuahua",
        "18–22",
        "28–34",
        "18–24"
      ],
      [
        "S",
        "Shih Tzu",
        "22–26",
        "34–42",
        "24–30"
      ],
      [
        "M",
        "Beagle",
        "26–32",
        "42–54",
        "30–38"
      ],
      [
        "L",
        "Labrador Retriever",
        "32–40",
        "54–68",
        "38–50"
      ],
      [
        "XL",
        "Golden Retriever",
        "40–48",
        "68–80",
        "50–60"
      ],
      [
        "XXL",
        "Great Dane",
        "48–58",
        "80–95",
        "60–75"
      ]
    ],
    "basePrice": 4500,
    "sizeStep": 500
  },
  {
    "id": "daisy-sundress-set",
    "name": "The Daisy Sundress & Sun Hat",
    "category": "dog-dresses",
    "price": "from LKR 6,500",
    "short": "Sunny yellow dress with matching brimmed hat",
    "description": "A two-piece set: a sunny yellow sundress with a frilled white hem and daisy appliqués, and a matching brimmed sun hat that ties gently under the chin. Both pieces crocheted by hand to your dog's own measurements.",
    "colors": [
      "Sunshine Yellow"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeChart": [
      [
        "Size",
        "Breed guide",
        "Neck (cm)",
        "Chest (cm)",
        "Back (cm)"
      ],
      [
        "XS",
        "Chihuahua",
        "18–22",
        "28–34",
        "18–24"
      ],
      [
        "S",
        "Shih Tzu",
        "22–26",
        "34–42",
        "24–30"
      ],
      [
        "M",
        "Beagle",
        "26–32",
        "42–54",
        "30–38"
      ],
      [
        "L",
        "Labrador Retriever",
        "32–40",
        "54–68",
        "38–50"
      ],
      [
        "XL",
        "Golden Retriever",
        "40–48",
        "68–80",
        "50–60"
      ],
      [
        "XXL",
        "Great Dane",
        "48–58",
        "80–95",
        "60–75"
      ]
    ],
    "basePrice": 6500,
    "sizeStep": 500
  },
  {
    "id": "lavender-ruffle-dress",
    "name": "The Lavender Ruffle Dress",
    "category": "dog-dresses",
    "price": "from LKR 5,500",
    "short": "Bobble-stitch bodice with a full ruffled skirt",
    "description": "A textured puff-stitch dress in dreamy lavender, finished with a full ruffled bustle skirt. Crocheted entirely by hand to your dog's own neck, chest and back measurements. Soft, fur-friendly yarn; gentle cold hand-wash.",
    "colors": [
      "Lavender"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeChart": [
      [
        "Size",
        "Breed guide",
        "Neck (cm)",
        "Chest (cm)",
        "Back (cm)"
      ],
      [
        "XS",
        "Chihuahua",
        "18–22",
        "28–34",
        "18–24"
      ],
      [
        "S",
        "Shih Tzu",
        "22–26",
        "34–42",
        "24–30"
      ],
      [
        "M",
        "Beagle",
        "26–32",
        "42–54",
        "30–38"
      ],
      [
        "L",
        "Labrador Retriever",
        "32–40",
        "54–68",
        "38–50"
      ],
      [
        "XL",
        "Golden Retriever",
        "40–48",
        "68–80",
        "50–60"
      ],
      [
        "XXL",
        "Great Dane",
        "48–58",
        "80–95",
        "60–75"
      ]
    ],
    "basePrice": 5500,
    "sizeStep": 500
  },
  {
    "id": "pastel-ruffle-dress",
    "name": "The Pastel Ruffle Dress",
    "category": "dog-dresses",
    "price": "from LKR 5,500",
    "short": "Tiered ruffles in pink, blue and lilac",
    "description": "A three-tier ruffle dress in blush, lilac and sky blue, topped with a romantic pink ruffle collar. Crocheted entirely by hand to your dog's own neck, chest and back measurements. Soft, fur-friendly yarn; gentle cold hand-wash.",
    "colors": [
      "Pastel Mix"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeChart": [
      [
        "Size",
        "Breed guide",
        "Neck (cm)",
        "Chest (cm)",
        "Back (cm)"
      ],
      [
        "XS",
        "Chihuahua",
        "18–22",
        "28–34",
        "18–24"
      ],
      [
        "S",
        "Shih Tzu",
        "22–26",
        "34–42",
        "24–30"
      ],
      [
        "M",
        "Beagle",
        "26–32",
        "42–54",
        "30–38"
      ],
      [
        "L",
        "Labrador Retriever",
        "32–40",
        "54–68",
        "38–50"
      ],
      [
        "XL",
        "Golden Retriever",
        "40–48",
        "68–80",
        "50–60"
      ],
      [
        "XXL",
        "Great Dane",
        "48–58",
        "80–95",
        "60–75"
      ]
    ],
    "basePrice": 5500,
    "sizeStep": 500
  },
  {
    "id": "peach-blossom-granny-dress",
    "name": "Peach Blossom Granny Dress",
    "category": "dog-dresses",
    "price": "from LKR 5,500",
    "short": "Lace-edged tiers in soft peach",
    "description": "A breezy harness-style dress built around a classic cream-and-peach granny square, with an airy openwork ruffle skirt. Crocheted entirely by hand to your dog's own neck, chest and back measurements. Soft, fur-friendly yarn; gentle cold hand-wash.",
    "colors": [
      "Peach"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeChart": [
      [
        "Size",
        "Breed guide",
        "Neck (cm)",
        "Chest (cm)",
        "Back (cm)"
      ],
      [
        "XS",
        "Chihuahua",
        "18–22",
        "28–34",
        "18–24"
      ],
      [
        "S",
        "Shih Tzu",
        "22–26",
        "34–42",
        "24–30"
      ],
      [
        "M",
        "Beagle",
        "26–32",
        "42–54",
        "30–38"
      ],
      [
        "L",
        "Labrador Retriever",
        "32–40",
        "54–68",
        "38–50"
      ],
      [
        "XL",
        "Golden Retriever",
        "40–48",
        "68–80",
        "50–60"
      ],
      [
        "XXL",
        "Great Dane",
        "48–58",
        "80–95",
        "60–75"
      ]
    ],
    "basePrice": 5500,
    "sizeStep": 500
  },
  {
    "id": "bumblebee-dress-set",
    "name": "The Bumblebee Dress & Hat",
    "category": "dog-dresses",
    "price": "from LKR 6,500",
    "basePrice": 6500,
    "sizeStep": 500,
    "short": "Striped bee dress with antennae hat",
    "description": "The full bee: a black-and-yellow striped dress with a flared yellow skirt, and a matching hat with pompom antennae that ties softly under the chin. Crocheted by hand to your dog's own measurements — made for photos.",
    "colors": [
      "Bee Yellow & Black",
      "Custom colours"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeChart": [
      [
        "Size",
        "Breed guide",
        "Neck (cm)",
        "Chest (cm)",
        "Back (cm)"
      ],
      [
        "XS",
        "Chihuahua",
        "18–22",
        "28–34",
        "18–24"
      ],
      [
        "S",
        "Shih Tzu",
        "22–26",
        "34–42",
        "24–30"
      ],
      [
        "M",
        "Beagle",
        "26–32",
        "42–54",
        "30–38"
      ],
      [
        "L",
        "Labrador Retriever",
        "32–40",
        "54–68",
        "38–50"
      ],
      [
        "XL",
        "Golden Retriever",
        "40–48",
        "68–80",
        "50–60"
      ],
      [
        "XXL",
        "Great Dane",
        "48–58",
        "80–95",
        "60–75"
      ]
    ]
  },
  {
    "id": "the-confetti-lace-up-vest",
    "name": "The Confetti Lace-Up Vest",
    "category": "tops",
    "price": "from LKR 4,500",
    "short": "Cream granny-square vest, threaded with autumn confetti and tied at the sides",
    "description": "An open-work vest in soft cream, worked square by square and edged in a speckled yarn that scatters amber, rust, and midnight through the weave like confetti. The sides fasten with hand-braided lace-up ties — loosen them for an easy drape, pull them close for a fitted shape — so one piece flatters many bodies. Wears beautifully over a bralette or a slip top, with denim or a summer skirt. Crocheted entirely by hand; gentle cold hand-wash, dry flat.",
    "colors": [
      "Cream"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "sizeChart": [],
    "basePrice": 4500,
    "sizeStep": 500
  }
];
