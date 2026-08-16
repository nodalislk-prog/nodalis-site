/* Nodalis site data — edited via admin.html on 2026-08-16 */

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
    "gold": "#b08a2e",
    "apparel": {
      "bgTop": "#000000",
      "bgBottom": "#000000",
      "ink": "#ffffff",
      "inkSoft": "#ffffff",
      "nav": "#563467"
    },
    "pet": {
      "bgTop": "#000000",
      "bgBottom": "#000000",
      "ink": "#ffffff",
      "inkSoft": "#ffffff",
      "nav": "#000000"
    },
    "mens": {
      "bgTop": "#000000",
      "bgBottom": "#000000",
      "ink": "#ffffff",
      "inkSoft": "#ffffff",
      "nav": "#241a29"
    },
    "home": {
      "g0": "#000000",
      "g1": "#000000",
      "g2": "#000000",
      "g3": "#000000",
      "g4": "#25302c",
      "ink": "#ffffff",
      "inkSoft": "#ffffff",
      "nav": "#563467"
    }
  },
  "type": {
    "serif": "Bodoni Moda",
    "sans": "Lora",
    "base": 20,
    "hscale": 85
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
  }
};

const PRODUCTS = [
  {
    "id": "daisy-dog-sweater",
    "name": "The Daisy Dog Sweater",
    "category": "dog-sweaters",
    "price": "from LKR 4,500",
    "short": "Ribbed rose pink, scattered with hand-crocheted daisies",
    "description": "A chunky ribbed sweater in rose pink, finished with hand-crocheted daisy appliqués front and back. Crocheted entirely by hand to your dog's own neck, chest and back measurements. Soft, fur-friendly yarn; gentle cold hand-wash.",
    "colors": [
      "Rose Pink",
      "Yellow"
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
    "description": "A lavender dress worked in a textured bobble stitch, flowing into a full ruffled skirt. Made to your dog's own neck, chest and back measurements, with room to move comfortably.",
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
    "basePrice": 5500,
    "sizeStep": 500,
    "short": "Tiered ruffles in pink, blue and lilac",
    "description": "A three-tone dress with a soft pink ruffled collar and tiered skirt in powder blue and lilac. Crocheted by hand to your dog's own measurements — a piece for the softest occasions.",
    "colors": [
      "Pastel Mix",
      "Pinks",
      "Blues",
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
    "id": "peach-ruffle-dress",
    "name": "The Peach Ruffle Dress",
    "category": "dog-dresses",
    "price": "from LKR 5,500",
    "basePrice": 5500,
    "sizeStep": 500,
    "short": "Lace-edged tiers in soft peach",
    "description": "A peach dress with a ribbed bodice and layered lace-edged ruffles trimmed in white. Light, sweet, and made to your dog's own neck, chest and back measurements.",
    "colors": [
      "Peach",
      "Coral",
      "Cream",
      "Custom colour"
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
  }
];
