/* =====================================================================
   NODALIS PRODUCT DATABASE
   To add a product: copy a block between { and }, paste it into the
   PRODUCTS list, edit the details, and upload 3 images to
   images/products/ named  <id>-front.jpg  <id>-side.jpg  <id>-size.jpg
   ===================================================================== */

const CATEGORIES = {
  /* ---- apparel (purple palette) ---- */
  tops:        { title:"Tops",                line:"Handmade crochet tops, made to order", group:"apparel" },
  skirts:      { title:"Skirts",              line:"Handmade crochet skirts, made to order", group:"apparel" },
  bags:        { title:"Bags",                line:"Handmade crochet bags, made to order", group:"apparel" },
  hats:        { title:"Hats",                line:"Handmade crochet hats, made to order", group:"apparel" },
  accessories: { title:"Accessories",         line:"Handmade crochet accessories, made to order", group:"apparel" },
  shirts:      { title:"Shirts & T-Shirts",   line:"Handmade crochet shirts and tees, made to order", group:"apparel" },
  /* ---- petstore (rose palette) ---- */
  cats:        { title:"For Cats",            line:"Handmade crochet pieces for cats, made to measure", group:"pet" },
  dogs:        { title:"For Dogs",            line:"Handmade crochet pieces for dogs, made to measure", group:"pet" },
  other:       { title:"For Every Companion", line:"Blankets, baskets and pieces for any pet", group:"pet" }
};

/* Shared dog size chart — breed guide, XS to XXL */
const DOG_CHART = [
  ["Size", "Breed guide",        "Neck (cm)", "Chest (cm)", "Back (cm)"],
  ["XS",   "Chihuahua",          "18–22",     "28–34",      "18–24"],
  ["S",    "Shih Tzu",           "22–26",     "34–42",      "24–30"],
  ["M",    "Beagle",             "26–32",     "42–54",      "30–38"],
  ["L",    "Labrador Retriever", "32–40",     "54–68",      "38–50"],
  ["XL",   "Golden Retriever",   "40–48",     "68–80",      "50–60"],
  ["XXL",  "Great Dane",         "48–58",     "80–95",      "60–75"]
];
const DOG_SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

const PRODUCTS = [

  {
    id: "daisy-dog-sweater",
    name: "The Daisy Dog Sweater",
    category: "dogs",
    price: "from LKR 4,500",
    short: "Ribbed rose pink, scattered with hand-crocheted daisies",
    description: "A chunky ribbed sweater in rose pink, finished with hand-crocheted daisy appliqués front and back. Crocheted entirely by hand to your dog's own neck, chest and back measurements. Soft, fur-friendly yarn; gentle cold hand-wash.",
    colors: ["Rose Pink", "Cream", "Sage", "Custom colour"],
    sizes: DOG_SIZES,
    sizeChart: DOG_CHART
  },

  {
    id: "daisy-sundress-set",
    name: "The Daisy Sundress & Sun Hat",
    category: "dogs",
    price: "from LKR 6,500",
    short: "Sunny yellow dress with matching brimmed hat",
    description: "A two-piece set: a sunny yellow sundress with a frilled white hem and daisy appliqués, and a matching brimmed sun hat that ties gently under the chin. Both pieces crocheted by hand to your dog's own measurements.",
    colors: ["Sunshine Yellow", "Butter & White", "Custom colour"],
    sizes: DOG_SIZES,
    sizeChart: DOG_CHART
  },

  {
    id: "lavender-ruffle-dress",
    name: "The Lavender Ruffle Dress",
    category: "dogs",
    price: "from LKR 5,500",
    short: "Bobble-stitch bodice with a full ruffled skirt",
    description: "A lavender dress worked in a textured bobble stitch, flowing into a full ruffled skirt. Made to your dog's own neck, chest and back measurements, with room to move comfortably.",
    colors: ["Lavender", "Dusty Rose", "Cream", "Custom colour"],
    sizes: DOG_SIZES,
    sizeChart: DOG_CHART
  },

  {
    id: "pastel-ruffle-dress",
    name: "The Pastel Ruffle Dress",
    category: "dogs",
    price: "from LKR 5,500",
    short: "Tiered ruffles in pink, blue and lilac",
    description: "A three-tone dress with a soft pink ruffled collar and tiered skirt in powder blue and lilac. Crocheted by hand to your dog's own measurements — a piece for the softest occasions.",
    colors: ["Pastel Mix", "Pinks", "Blues", "Custom colours"],
    sizes: DOG_SIZES,
    sizeChart: DOG_CHART
  },

  {
    id: "peach-ruffle-dress",
    name: "The Peach Ruffle Dress",
    category: "dogs",
    price: "from LKR 5,500",
    short: "Lace-edged tiers in soft peach",
    description: "A peach dress with a ribbed bodice and layered lace-edged ruffles trimmed in white. Light, sweet, and made to your dog's own neck, chest and back measurements.",
    colors: ["Peach", "Coral", "Cream", "Custom colour"],
    sizes: DOG_SIZES,
    sizeChart: DOG_CHART
  },

  {
    id: "bumblebee-dress-set",
    name: "The Bumblebee Dress & Hat",
    category: "dogs",
    price: "from LKR 6,500",
    short: "Striped bee dress with antennae hat",
    description: "The full bee: a black-and-yellow striped dress with a flared yellow skirt, and a matching hat with pompom antennae that ties softly under the chin. Crocheted by hand to your dog's own measurements — made for photos.",
    colors: ["Bee Yellow & Black", "Custom colours"],
    sizes: DOG_SIZES,
    sizeChart: DOG_CHART
  }

  /* ================= TEMPLATE — copy, paste above, and edit =================
  ,{
    id: "my-new-piece",                 // lowercase, hyphens, unique — also the image filename
    name: "The New Piece",
    category: "tops",                   // tops | skirts | bags | hats | accessories | shirts | cats | dogs | other
    price: "LKR 0,000",
    short: "One line shown on the category page",
    description: "Full description shown on the product page.",
    colors: ["Cream", "Dusty Rose"],
    sizes: ["S", "M", "L"],             // use [] if one-size
    sizeChart: [
      ["Size", "Measurement (cm)"],
      ["S", "00–00"],
      ["M", "00–00"],
      ["L", "00–00"]
    ]
  }
  ============================================================================ */
];
