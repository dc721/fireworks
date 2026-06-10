// ============================================================
// CHIEF MOUNTAIN FIREWORKS — PRODUCT CATALOGUE DATA
// ============================================================
// To add a product: copy any entry below and fill in the fields.
// To update a price: change the "price" value.
// To mark out of stock: change "stock" to "out-of-stock".
// Stock values: "in-stock" | "limited" | "out-of-stock"
// ============================================================

const products = [

  // ---- KITS & COLLECTIONS ----
  {
    id: "1370",
    sku: "NDC-1370",
    upc: "667249013705",
    name: "Bombs Away",
    price: 9.99,
    category: "Kits & Collections",
    stock: "limited",
    description: "A fun starter collection of ground effects. The perfect introduction to fireworks for families and first-timers."
  },
  {
    id: "1430",
    sku: "NDC-1430",
    upc: "667249014306",
    name: "Touchdown",
    price: 17.50,
    category: "Kits & Collections",
    stock: "limited",
    description: "A curated mix of exciting effects — the perfect celebration kit for the big game or any special event."
  },
  {
    id: "1060",
    sku: "NDC-1060",
    upc: "667249010605",
    name: "Cherry Bomb Box",
    price: 32.50,
    category: "Kits & Collections",
    stock: "limited",
    description: "A classic box packed with cherry bombs for non-stop action and all-ages fun. A crowd favourite every time."
  },
  {
    id: "1071",
    sku: "NDC-1071",
    upc: "667249010711",
    name: "Out of This World Cake Pack",
    price: 42.50,
    category: "Kits & Collections",
    stock: "limited",
    description: "A stellar multi-shot cake pack that lights up the sky with incredible overhead effects. Out of this world, literally."
  },
  {
    id: "1079",
    sku: "NDC-1079",
    upc: "667249010797",
    name: "Amazing Alberta",
    price: 50.00,
    category: "Kits & Collections",
    stock: "limited",
    description: "A provincial pride kit with stunning aerial effects built for wide open Alberta skies. Perfect for Canada Day."
  },
  {
    id: "1650",
    sku: "NDC-1650",
    upc: "667249016508",
    name: "Proud Canadian",
    price: 80.00,
    category: "Kits & Collections",
    stock: "limited",
    description: "Celebrate Canada in style with this premium patriotic fireworks collection. Everything you need for a spectacular show."
  },
  {
    id: "1037",
    sku: "NDC-1037",
    upc: "667249010377",
    name: "Prairie Pride",
    price: 87.50,
    category: "Kits & Collections",
    stock: "limited",
    description: "A showstopping collection built for big moments under big prairie skies. One of our most popular premium kits."
  },
  {
    id: "1730",
    sku: "NDC-1730",
    upc: "667249017307",
    name: "Hole in One",
    price: 100.00,
    category: "Kits & Collections",
    stock: "limited",
    description: "Our most complete fireworks experience — the ultimate celebration package for any big occasion. Hit it out of the park."
  },

  // ---- CANDLES ----
  {
    id: "2600",
    sku: "NDC-2600",
    upc: "667249026002",
    name: "12 Ball Canadian Candle",
    price: 1.50,
    category: "Candles",
    stock: "in-stock",
    description: "A Roman candle with 12 brilliant colour launches one after another. Simple, reliable, and satisfying every time."
  },
  {
    id: "2570",
    sku: "NDC-2570",
    upc: "667249025708",
    name: "20 Ball Canadian Candle",
    price: 2.00,
    category: "Candles",
    stock: "in-stock",
    description: "Twenty explosive colour shots in one compact candle. Double the action — great value for the show."
  },

  // ---- AERIAL & ROCKETS ----
  {
    id: "6112",
    sku: "NDC-6112",
    upc: "667249061126",
    name: "AK-47",
    price: 27.49,
    category: "Aerial & Rockets",
    stock: "limited",
    description: "A high-performance aerial piece delivering rapid-fire explosive effects overhead. Bold, loud, and spectacular."
  },
  {
    id: "4510",
    sku: "NDC-4510",
    upc: "777319999256",
    name: "Not Bottle Rockets",
    price: 3.00,
    category: "Aerial & Rockets",
    stock: "in-stock",
    description: "Classic sky rockets with a twist — bigger, brighter, and better than ever. A backyard staple."
  },
  {
    id: "4511",
    sku: "NDC-4511",
    upc: "777319992714",
    name: "3 Stage Sky Rockets",
    price: 3.50,
    category: "Aerial & Rockets",
    stock: "in-stock",
    description: "Three-stage rockets that build from launch to a brilliant overhead finale. Watch them climb and burst."
  },
  {
    id: "4900",
    sku: "NDC-4900",
    upc: "667249049001",
    name: "Air Bomb Pack",
    price: 5.00,
    category: "Aerial & Rockets",
    stock: "in-stock",
    description: "A pack of air-burst bombs for explosive effects that light up the sky overhead. Great for a quick show."
  },
  {
    id: "4910",
    sku: "NDC-4910",
    upc: "062109616902",
    name: "Atom Bomb Pack",
    price: 5.00,
    category: "Aerial & Rockets",
    stock: "in-stock",
    description: "Powerful air-burst bombs with massive colour breaks. A guaranteed crowd stopper every single time."
  },
  {
    id: "4980",
    sku: "NDC-4980",
    upc: "667249049803",
    name: "Prairie Thunder Pack",
    price: 5.00,
    category: "Aerial & Rockets",
    stock: "in-stock",
    description: "Thunderous booms that echo across the sky. Built for the prairies and feels right at home out here."
  },

  // ---- GROUND EFFECTS & NOVELTY ----
  {
    id: "3003",
    sku: "NDC-3003",
    upc: "777319980957",
    name: "Bamboozled",
    price: 0.69,
    category: "Ground Effects & Novelty",
    stock: "in-stock",
    description: "Tiny but surprising — a shower of white strobing stars at ground level. Pops, crackles, and snaps for all-ages fun."
  },
  {
    id: "3480",
    sku: "NDC-3480",
    upc: "062109617084",
    name: "Silver Shower",
    price: 0.70,
    category: "Ground Effects & Novelty",
    stock: "in-stock",
    description: "A glittering silver ground shower effect. Beautiful, simple, and mesmerizing — great for kids."
  },
  {
    id: "4890",
    sku: "NDC-4890",
    upc: "777319997276",
    name: "Shotgun Shell",
    price: 1.75,
    category: "Ground Effects & Novelty",
    stock: "in-stock",
    description: "Shotgun-style shells that burst with brilliant colour effects at ground level. Fun, fast, and satisfying."
  },
  {
    id: "8070",
    sku: "NDC-8070",
    upc: "777319795142",
    name: "Crackle Jacks",
    price: 1.50,
    category: "Ground Effects & Novelty",
    stock: "in-stock",
    description: "Fun crackling novelties that pop, snap, and crackle. Safe and enjoyable for all ages — a classic choice."
  },
  {
    id: "8060",
    sku: "NDC-8060",
    upc: "777319167341",
    name: "Strobe Lights",
    price: 1.50,
    category: "Ground Effects & Novelty",
    stock: "in-stock",
    description: "Intense strobe effects that pulse brilliantly in the dark. Mesmerizing to watch and a crowd favourite."
  },
  {
    id: "8111",
    sku: "NDC-8111",
    upc: "777319168232",
    name: "Screecher-OO",
    price: 2.99,
    category: "Ground Effects & Novelty",
    stock: "in-stock",
    description: "Screaming aerial effects with a surprising bang at the top — a real crowd teaser. Always gets a reaction."
  },
  {
    id: "7036",
    sku: "NDC-7036",
    upc: "062109617206",
    name: "Sky Dancer",
    price: 2.24,
    category: "Ground Effects & Novelty",
    stock: "limited",
    description: "A spinning aerial that dances through the sky trailing brilliant colour. Graceful, fun, and unique."
  },
  {
    id: "7041",
    sku: "NDC-7041",
    upc: "667249070418",
    name: "Green Fish",
    price: 2.49,
    category: "Ground Effects & Novelty",
    stock: "limited",
    description: "A fish-tailed spinner with a vivid green comet tail that zigzags unpredictably through the air."
  },
  {
    id: "7011",
    sku: "NDC-7011",
    upc: "667249070111",
    name: "Hit Single",
    price: 3.49,
    category: "Ground Effects & Novelty",
    stock: "limited",
    description: "One incredible effect, delivered with precision. Simple, stunning, and satisfying. A hit every time."
  },
  {
    id: "8551",
    sku: "NDC-8551",
    upc: "777319993049",
    name: "Saturn Wheel",
    price: 3.24,
    category: "Ground Effects & Novelty",
    stock: "limited",
    description: "A ground spinner that throws off brilliant sparks in all directions. The classic ground effect — always popular."
  },
  {
    id: "7123",
    sku: "NDC-7123",
    upc: "774893831613",
    name: "Blue Flower",
    price: 3.99,
    category: "Ground Effects & Novelty",
    stock: "limited",
    description: "A beautiful blue peony effect that blooms brilliantly overhead. Truly stunning and elegant."
  },
  {
    id: "8012",
    sku: "NDC-8012",
    upc: "777319991137",
    name: "Crackle Pops!",
    price: 4.00,
    category: "Ground Effects & Novelty",
    stock: "in-stock",
    description: "Crackling pops with rapid-fire action. Fun and festive for every occasion — great for the whole family."
  },
  {
    id: "7046",
    sku: "NDC-7046",
    upc: "667249070463",
    name: "Green Peony",
    price: 4.49,
    category: "Ground Effects & Novelty",
    stock: "limited",
    description: "A lush green peony burst that opens wide overhead. A perennial fan favourite that never disappoints."
  },
  {
    id: "8750",
    sku: "NDC-8750",
    upc: "062109618760",
    name: "Paratrooper",
    price: 4.85,
    category: "Ground Effects & Novelty",
    stock: "limited",
    description: "Floats down slowly with a brilliant trail — a real crowd-pleaser and guaranteed conversation starter."
  },
  {
    id: "4930",
    sku: "NDC-4930",
    upc: "667249049308",
    name: "Cherry Bomb Pack",
    price: 4.99,
    category: "Ground Effects & Novelty",
    stock: "in-stock",
    description: "The classic favourite — snappy cherry bombs bundled together for maximum fun and non-stop action."
  },
  {
    id: "4960",
    sku: "NDC-4960",
    upc: "667249449603",
    name: "Crackling Bomb Pack",
    price: 5.00,
    category: "Ground Effects & Novelty",
    stock: "in-stock",
    description: "Bombs that crackle, pop, and bang for maximum ground-level effect. A pack full of exciting surprises."
  },

  // ---- SPARKLERS ----
  {
    id: "9010",
    sku: "NDC-9010",
    upc: "667249090102",
    name: "Sparklers — Regular (10\")",
    price: 0.85,
    category: "Sparklers",
    stock: "limited",
    description: "Classic 10\" golden sparklers. Perfect for every birthday, wedding, and family celebration. A timeless favourite."
  },
  {
    id: "9060",
    sku: "NDC-9060",
    upc: "667249090706",
    name: "Sparklers — Large (14\")",
    price: 1.50,
    category: "Sparklers",
    stock: "in-stock",
    description: "Longer burn, bigger sparks. Great for photos, Canada Day, and fun family evenings. Always a hit."
  },

  // ---- SMOKE BOMBS ----
  {
    id: "8240",
    sku: "NDC-8240",
    upc: "ENOLA GAYE",
    name: "EG-25 Smoke Bomb — Blue",
    price: 3.99,
    category: "Smoke Bombs",
    stock: "limited",
    description: "Dense blue smoke for dramatic photography, gender reveals, and vibrant outdoor celebrations. Outdoor use only."
  },
  {
    id: "8420",
    sku: "NDC-8420",
    upc: "ENOLA GAYE",
    name: "EG-25 Smoke Bomb — Red",
    price: 3.99,
    category: "Smoke Bombs",
    stock: "limited",
    description: "Brilliant red smoke for dramatic outdoor effects and eye-catching photography. Outdoor use only."
  },
  {
    id: "8340",
    sku: "NDC-8340",
    upc: "5060444731224",
    name: "WP-40 Smoke Bomb — Orange",
    price: 8.49,
    category: "Smoke Bombs",
    stock: "limited",
    description: "Intense orange smoke with a longer burn time. Stunning in outdoor settings and perfect for large events."
  },
  {
    id: "8370",
    sku: "NDC-8370",
    upc: "5060444731231",
    name: "WP-40 Smoke Bomb — Red",
    price: 8.49,
    category: "Smoke Bombs",
    stock: "limited",
    description: "Rich, deep red smoke for the most dramatic outdoor displays and photo shoots. Longer burn, bold colour."
  },

  // ---- CONFETTI & PARTY ----
  {
    id: "8900",
    sku: "NDC-8900",
    upc: "777319994138",
    name: "Confetti Popper — Multicolor",
    price: 2.99,
    category: "Confetti & Party",
    stock: "limited",
    description: "Shoots a burst of multicolour confetti in an instant — perfect for any party moment. No flame needed."
  },
  {
    id: "8910",
    sku: "NDC-8910",
    upc: "777319994121",
    name: "Confetti Blaster — Multicolor",
    price: 4.24,
    category: "Confetti & Party",
    stock: "limited",
    description: "A bigger, bolder confetti blast for the most important moments and biggest celebrations. Instant party."
  }

];
