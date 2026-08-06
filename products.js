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

const PRODUCTS = [

  /* ================= SAMPLE PRODUCTS — replace with your own ================= */

  {
    id: "classic-dog-sweater",
    name: "The Classic Dog Sweater",
    category: "dogs",
    price: "from LKR 4,500",
    short: "Chunky ribbed warmth, made to your dog's measurements",
    description: "A chunky ribbed sweater crocheted entirely by hand, sized to your dog's own neck, chest and back measurements. Soft acrylic-cotton blend, gentle on fur, machine-washable on a cold hand-wash cycle.",
    colors: ["Cream", "Dusty Rose", "Sage", "Charcoal"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sizeChart: [
      ["Size", "Breed guide",          "Neck (cm)", "Chest (cm)", "Back (cm)"],
      ["XS",   "Chihuahua",            "18–22",     "28–34",      "18–24"],
      ["S",    "Shih Tzu",             "22–26",     "34–42",      "24–30"],
      ["M",    "Beagle",               "26–32",     "42–54",      "30–38"],
      ["L",    "Labrador Retriever",   "32–40",     "54–68",      "38–50"],
      ["XL",   "Golden Retriever",     "40–48",     "68–80",      "50–60"],
      ["XXL",  "Great Dane",           "48–58",     "80–95",      "60–75"]
    ]
  },

  {
    id: "soft-cat-collar",
    name: "The Soft Cat Collar",
    category: "cats",
    price: "LKR 1,800",
    short: "Featherlight, with a safety-release loop",
    description: "A featherlight crocheted collar finished with a safety-release loop so it slips free if caught. Choose your colour; sized to your cat's neck measurement with growing room.",
    colors: ["Cream", "Dusty Rose", "Butter Yellow"],
    sizes: ["Kitten", "Standard", "Large"],
    sizeChart: [
      ["Size", "Neck (cm)"],
      ["Kitten", "14–18"],
      ["Standard", "18–24"],
      ["Large", "24–30"]
    ]
  },

  {
    id: "shell-stitch-top",
    name: "The Shell Stitch Top",
    category: "tops",
    price: "from LKR 8,900",
    short: "Scalloped shell stitch, fitted silhouette",
    description: "A fitted top worked in a scalloped shell stitch, crocheted to your measurements. Breathable cotton yarn made for Colombo evenings.",
    colors: ["Cream", "Black", "Lavender"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sizeChart: [
      ["Size", "Bust (cm)", "Waist (cm)", "Length (cm)"],
      ["XS", "78–82",  "60–64", "38"],
      ["S",  "84–88",  "66–70", "40"],
      ["M",  "90–94",  "72–76", "42"],
      ["L",  "96–102", "78–84", "44"],
      ["XL", "104–110","86–92", "46"]
    ]
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
