/* Nodalis site data — edited via admin.html on 2026-10-07 */

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
      "bgTop": "#ffffff",
      "bgBottom": "#f5ecf3",
      "ink": "#2d2d2d",
      "inkSoft": "#7a6473",
      "nav": "#3a1f42"
    },
    "pet": {
      "bgTop": "#ffffff",
      "bgBottom": "#f7eedc",
      "ink": "#2d2d2d",
      "inkSoft": "#7a6a62",
      "nav": "#3a2a3e"
    },
    "mens": {
      "bgTop": "#ffffff",
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
    "sans": "Inter",
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
  },
  "shirt": {
    "title": "Shirt",
    "line": "Crocheted Shirt",
    "meta": "Handmade · Made to order",
    "group": "mens"
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
    "description": "The full bee: a black-and-yellow striped dress with a flared yellow skirt, and a matching hat with pompom antennae that ties softly under the chin. Crocheted by hand to your dog's own measurements, made for photos.",
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
    "description": "An open-work vest in soft cream, worked square by square and edged in a speckled yarn that scatters amber, rust, and midnight through the weave like confetti. The sides fasten with hand-braided lace-up ties. Loosen them for an easy drape or pull them close for a fitted shape, so one piece flatters many bodies. Wears beautifully over a bralette or a slip top, with denim or a summer skirt. Crocheted entirely by hand; gentle cold hand-wash, dry flat.",
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
    "sizeStep": 500,
    "images": [
      "the-confetti-lace-up-vest-front.jpg",
      "the-confetti-lace-up-vest-g2.jpg",
      "the-confetti-lace-up-vest-g3.jpg",
      "the-confetti-lace-up-vest-g4.jpg",
      "the-confetti-lace-up-vest-g5.jpg",
      "the-confetti-lace-up-vest-side.jpg",
      "the-confetti-lace-up-vest-size.jpg"
    ]
  },
  {
    "id": "granny-square-crocheted-shirt",
    "name": "The Olive Granny Square Shirt",
    "category": "shirt",
    "price": "from LKR 7,000",
    "short": "Short-sleeve camp-collar shirt in olive and cream granny squares",
    "description": "A relaxed short-sleeve shirt with a camp collar and button front, made of granny squares in olive green framed in cream. Light and breathable, it wears well open over a tee or buttoned on its own. Crocheted entirely by hand to your size. Gentle cold hand wash, dry flat.",
    "colors": [
      "Off White"
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
    "basePrice": 7000,
    "sizeStep": 300,
    "images": [
      "granny-square-crocheted-shirt-front.jpg",
      "granny-square-crocheted-shirt-g2.jpg",
      "granny-square-crocheted-shirt-g3.jpg",
      "granny-square-crocheted-shirt-g4.jpg"
    ]
  },
  {
    "id": "sunburst-tie-front-vest",
    "name": "The Sunburst Tie-Front Vest",
    "category": "tops",
    "price": "from LKR 4,500",
    "short": "Cream granny-square vest with sunburst medallions and a tasselled tie front",
    "description": "A sleeveless vest in soft cream, set with sunburst medallions in terracotta, sage and sand. It closes at the front with braided ties finished in tassels, so you can wear it open over a slip or tied close on its own. Crocheted entirely by hand to your size. Gentle cold hand wash, dry flat.",
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
    "sizeStep": 500,
    "images": [
      "sunburst-tie-front-vest-front.jpg",
      "sunburst-tie-front-vest-g2.jpg",
      "sunburst-tie-front-vest-g3.jpg",
      "sunburst-tie-front-vest-g4.jpg"
    ]
  },
  {
    "id": "cocoa-stripe-mesh-top",
    "name": "The Cocoa Stripe Mesh Top",
    "category": "tops",
    "price": "from LKR 4,500",
    "short": "Open-weave cropped top in cocoa and cream stripes with bell sleeves",
    "description": "A light, open-weave top in bands of cocoa brown and cream, with a wide boat neck and long bell sleeves. Cropped just above the waist, it layers easily over a camisole or a bralette. Crocheted entirely by hand to your size. Gentle cold hand wash, dry flat.",
    "colors": [
      "Cocoa & Cream"
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
    "sizeStep": 500,
    "images": [
      "cocoa-stripe-mesh-top-front.jpg",
      "cocoa-stripe-mesh-top-g2.jpg",
      "cocoa-stripe-mesh-top-g3.jpg",
      "cocoa-stripe-mesh-top-g4.jpg"
    ]
  },
  {
    "id": "pastel-wave-mesh-top",
    "name": "The Pastel Wave Mesh Top",
    "category": "tops",
    "price": "from LKR 4,500",
    "short": "Airy cropped top in soft waves of lilac, lemon and cream",
    "description": "An airy, open-stitch top in gentle waves of lilac, lemon and cream. Relaxed shoulders and full sleeves give it an easy shape, and the cropped hem sits well with high-waisted trousers. Crocheted entirely by hand to your size. Gentle cold hand wash, dry flat.",
    "colors": [
      "Lilac & Lemon"
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
    "sizeStep": 500,
    "images": [
      "pastel-wave-mesh-top-front.jpg",
      "pastel-wave-mesh-top-g2.jpg",
      "pastel-wave-mesh-top-g3.jpg"
    ]
  },
  {
    "id": "rainbow-chevron-top",
    "name": "The Rainbow Chevron Top",
    "category": "tops",
    "price": "from LKR 4,500",
    "short": "Cropped V-neck top in a bright rainbow chevron",
    "description": "A cropped V-neck top worked in a chevron of every colour, with a scalloped hem that follows the zigzag. Bright on its own in summer, or layered over a white tee. Crocheted entirely by hand to your size. Gentle cold hand wash, dry flat.",
    "colors": [
      "Rainbow"
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
    "sizeStep": 500,
    "images": [
      "rainbow-chevron-top-front.jpg",
      "rainbow-chevron-top-g2.jpg"
    ]
  },
  {
    "id": "cloud-mesh-top",
    "name": "The Cloud Mesh Top",
    "category": "tops",
    "price": "from LKR 4,500",
    "short": "Oversized white mesh top with a soft, uneven hem",
    "description": "An oversized top in fine white mesh with a soft, uneven hem. Throw it over a swimsuit, a slip or a vest top for an easy layered look. Crocheted entirely by hand to your size. Gentle cold hand wash, dry flat.",
    "colors": [
      "White"
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
    "sizeStep": 500,
    "images": [
      "cloud-mesh-top-front.jpg"
    ]
  },
  {
    "id": "noir-square-dress",
    "name": "The Noir Square Dress",
    "category": "frocks",
    "price": "from LKR 12,000",
    "short": "Sleeveless mini dress in a bold black and cream square pattern",
    "description": "A sleeveless mini dress with a single granny square framing the bodice and black and cream stripes running down to the hem. Fitted through the body, with a clean boat neck. Crocheted entirely by hand to your size. Gentle cold hand wash, dry flat.",
    "colors": [
      "Black & Cream"
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
    "basePrice": 12000,
    "sizeStep": 500,
    "images": [
      "noir-square-dress-front.jpg",
      "noir-square-dress-g2.jpg",
      "noir-square-dress-g3.jpg"
    ]
  },
  {
    "id": "terracotta-granny-square-dress",
    "name": "The Terracotta Granny Square Dress",
    "category": "frocks",
    "price": "from LKR 12,000",
    "short": "Granny square mini dress in terracotta and cream with a tie waist",
    "description": "A sleeveless mini dress made of granny squares, each with a cream flower framed in terracotta. A braided cord with tassels ties at the waist to shape the fit. Crocheted entirely by hand to your size. Gentle cold hand wash, dry flat.",
    "colors": [
      "Terracotta & Cream"
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
    "basePrice": 12000,
    "sizeStep": 500,
    "images": [
      "terracotta-granny-square-dress-front.jpg",
      "terracotta-granny-square-dress-g2.jpg",
      "terracotta-granny-square-dress-g3.jpg",
      "terracotta-granny-square-dress-g4.jpg"
    ]
  },
  {
    "id": "navy-granny-square-set",
    "name": "The Navy Granny Square Set",
    "category": "shirts",
    "price": "Price on request",
    "short": "Short-sleeve shirt and drawstring shorts in navy and cream",
    "description": "A matching set of a collared short-sleeve shirt and drawstring shorts, both worked in navy and cream granny squares. Wear them together, or style each piece on its own. Crocheted entirely by hand to your size. Gentle cold hand wash, dry flat.",
    "colors": [
      "Navy & Cream"
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
    "images": [
      "navy-granny-square-set-front.jpg",
      "navy-granny-square-set-g2.jpg",
      "navy-granny-square-set-g3.jpg",
      "navy-granny-square-set-g4.jpg"
    ]
  },
  {
    "id": "mocha-granny-square-set",
    "name": "The Mocha Granny Square Set",
    "category": "shirts",
    "price": "Price on request",
    "short": "Cropped shirt and shorts in mocha and cream granny squares",
    "description": "A cropped short-sleeve shirt with a soft collar and matching shorts, worked in mocha and cream granny squares. Easy for warm days and holidays. Crocheted entirely by hand to your size. Gentle cold hand wash, dry flat.",
    "colors": [
      "Mocha & Cream"
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
    "images": [
      "mocha-granny-square-set-front.jpg",
      "mocha-granny-square-set-g2.jpg"
    ]
  },
  {
    "id": "fiesta-granny-square-maxi-skirt",
    "name": "The Fiesta Granny Square Maxi Skirt",
    "category": "skirts",
    "price": "Price on request",
    "short": "Multicolour granny square maxi skirt with a fringed hem",
    "description": "A long, straight skirt made of bright granny squares on a cream ground, finished with a swinging fringe at the hem. Pair it with a simple tank and sandals. Crocheted entirely by hand to your size. Gentle cold hand wash, dry flat.",
    "colors": [
      "Multicolour"
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
    "images": [
      "fiesta-granny-square-maxi-skirt-front.jpg",
      "fiesta-granny-square-maxi-skirt-g2.jpg",
      "fiesta-granny-square-maxi-skirt-g3.jpg"
    ]
  },
  {
    "id": "cocoa-granny-square-shirt",
    "name": "The Cocoa Granny Square Shirt",
    "category": "shirt",
    "price": "from LKR 7,000",
    "short": "Short-sleeve camp-collar shirt in cocoa and cream granny squares",
    "description": "A relaxed short-sleeve shirt with a camp collar and button front, made of cream granny squares with cocoa brown centres. Light and breathable, it wears well open over a tee or buttoned on its own. Crocheted entirely by hand to your size. Gentle cold hand wash, dry flat.",
    "colors": [
      "Cocoa & Cream"
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
    "basePrice": 7000,
    "sizeStep": 300,
    "images": [
      "cocoa-granny-square-shirt-front.jpg",
      "cocoa-granny-square-shirt-g2.jpg",
      "cocoa-granny-square-shirt-g3.jpg",
      "cocoa-granny-square-shirt-g4.jpg"
    ]
  }
];
