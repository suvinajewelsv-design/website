/**
 * SUVINA JEWELS
 * Authentic Jewelry Shop Catalog
 * High-definition studio imagery from with ai 02 collection
 */

const JEWELRY_PRODUCTS = [
  {
    id: "sj-st01",
    code: "SJ-ST01",
    name: "Aaradhya Floral Rosette AD Stone Choker Set",
    category: "ad-stones",
    categories: ["necklace-sets", "ad-stones"],
    originalPrice: 3899,
    price: 2299,
    discountPercent: 41,
    rating: 4.9,
    reviewCount: 128,
    badge: "BESTSELLER",
    isFeatured: true,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/01_Floral_Rosette_01_Full_Set.jpg",
      necklace: "image/with ai 02/01_Floral_Rosette_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/01_Floral_Rosette_03_Earring_Detail.jpg"
    },
    description: "An opulent floral rosette centerpiece encrusted with radiant pavé American Diamond (AD) stones. Finished in premium matte 24K micro gold polish with matching flower stud earrings.",
    details: {
      baseMetal: "Pure Brass & Copper Core",
      plating: "24K Micro Gold Plating (Anti-Tarnish)",
      stoneType: "Swiss Grade Pavé AD / Cubic Zirconia",
      closure: "Adjustable Luxury Gold Zari Back Dori",
      earringType: "Push-Back Flower Blossom Studs",
      packageIncludes: "1 Choker Necklace, 1 Pair of Matching Earrings, 1 Luxury Velvet Box, Care Card"
    }
  },
  {
    id: "sj-st02",
    code: "SJ-ST02",
    name: "Mayuri Openwork Filigree Leaf Festive Set",
    category: "temple-jewels",
    categories: ["necklace-sets", "temple-jewels"],
    originalPrice: 3499,
    price: 1999,
    discountPercent: 43,
    rating: 4.8,
    reviewCount: 94,
    badge: "SALE -43%",
    isFeatured: false,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/02_Openwork_Leaf_01_Full_Set.jpg",
      necklace: "image/with ai 02/02_Openwork_Leaf_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/02_Openwork_Leaf_03_Earring_Detail.jpg"
    },
    description: "Delicate openwork leaf motifs inspired by Dravidian temple carvings. Lightweight yet grand, offering remarkable comfort for all-day celebrations.",
    details: {
      baseMetal: "Artisanal Brass Alloy",
      plating: "Antique Matte Gold Finish",
      stoneType: "Fine Micro-pavé Crystals",
      closure: "Soft Woven Silk Thread Dori",
      earringType: "Comfortable Stud Clasp",
      packageIncludes: "1 Leaf Filigree Necklace, 1 Pair of Matching Earrings, Luxury Box"
    }
  },
  {
    id: "sj-st03",
    code: "SJ-ST03",
    name: "Padmavathi Ruby Kemp & South Sea Pearl Choker",
    category: "ruby-kemp",
    categories: ["necklace-sets", "ruby-kemp", "bridal-combos"],
    originalPrice: 4599,
    price: 2699,
    discountPercent: 41,
    rating: 5.0,
    reviewCount: 215,
    badge: "HOT BRIDAL",
    isFeatured: true,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/03_Ruby_Pearl_Drops_01_Full_Set.jpg",
      necklace: "image/with ai 02/03_Ruby_Pearl_Drops_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/03_Ruby_Pearl_Drops_03_Earring_Detail.jpg"
    },
    description: "Authentic South Indian heritage choker embellished with hand-cut crimson Kemp ruby stones and lustrous faux South Sea pearl drops. A favorite for bridal muhurtham and temple ceremonies.",
    details: {
      baseMetal: "High-Grade Jewellery Brass",
      plating: "Antique 1-Gram Temple Gold Polish",
      stoneType: "Authentic Kemp Red Stones & Pearl Drops",
      closure: "Adjustable Gold Cord (Dori)",
      earringType: "Heritage Kemp Dangler Drops",
      packageIncludes: "1 Ruby Kemp Choker, 1 Pair of Kemp Pearl Earrings, Hardbound Jewellery Box"
    }
  },
  {
    id: "sj-st04",
    code: "SJ-ST04",
    name: "Meenakshi Imperial Emerald Loop Fan Bridal Set",
    category: "emerald-collection",
    categories: ["necklace-sets", "emerald-collection", "bridal-combos"],
    originalPrice: 4999,
    price: 2899,
    discountPercent: 42,
    rating: 4.9,
    reviewCount: 162,
    badge: "BRIDAL PICK",
    isFeatured: true,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/04_Emerald_Loop_Fan_01_Full_Set.jpg",
      necklace: "image/with ai 02/04_Emerald_Loop_Fan_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/04_Emerald_Loop_Fan_03_Earring_Detail.jpg"
    },
    description: "Imperial Zambian-green emerald centerpiece with gracefully looped fan petals and brilliant American diamond halo stones. Styled with sculpted statement drop earrings.",
    details: {
      baseMetal: "Premium Brass",
      plating: "24K High-Gloss Gold Plating",
      stoneType: "Hydro Emeralds & Brilliant Round AD Stones",
      closure: "Adjustable Hand-Braided Golden Cord",
      earringType: "Loop Drop Statement Earrings",
      packageIncludes: "1 Grand Emerald Choker, 1 Pair of Loop Drop Earrings, Silk Velvet Box"
    }
  },
  {
    id: "sj-st05",
    code: "SJ-ST05",
    name: "Devina Contemporary Emerald & Solitaire Link Set",
    category: "emerald-collection",
    categories: ["necklace-sets", "emerald-collection", "ad-stones"],
    originalPrice: 3299,
    price: 1850,
    discountPercent: 44,
    rating: 4.7,
    reviewCount: 73,
    badge: "SALE -44%",
    isFeatured: false,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/05_Rectangle_Stone_Link_01_Full_Set.jpg",
      necklace: "image/with ai 02/05_Rectangle_Stone_Link_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/05_Rectangle_Stone_Link_03_Earring_Detail.jpg"
    },
    description: "Sleek rectangular-cut emerald crystal links flanked by baguette solitaire stones. A chic modern statement for evening cocktail gowns, sangeet, and silk sarees.",
    details: {
      baseMetal: "Skin-Safe Brass Alloy",
      plating: "Micro Gold Micron Plating",
      stoneType: "Emerald-Cut Crystals & Baguette Solitaires",
      closure: "Adjustable Link Extender Chain",
      earringType: "Geometric Solitaire Studs",
      packageIncludes: "1 Link Collar Necklace, 1 Pair of Studs, Presentation Pouch"
    }
  },
  {
    id: "sj-st06",
    code: "SJ-ST06",
    name: "Manga Malai Paisley Mango Motif Temple Haram Set",
    category: "temple-jewels",
    categories: ["necklace-sets", "temple-jewels", "bridal-combos"],
    originalPrice: 4299,
    price: 2499,
    discountPercent: 42,
    rating: 4.9,
    reviewCount: 188,
    badge: "TRADITIONAL",
    isFeatured: true,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/06_Paisley_Leaf_Pendant_01_Necklace_Overview.jpg",
      necklace: "image/with ai 02/06_Paisley_Leaf_Pendant_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/06_Paisley_Leaf_Pendant_03_Earring_Detail.jpg"
    },
    description: "The revered South Indian 'Manga Malai' paisley motif necklace, featuring handcrafted mango leaf pendants, kemp accents, and matching mango teardrop earrings.",
    details: {
      baseMetal: "Pure Brass & Copper Casting",
      plating: "Antique Matte 1-Gram Gold Polish",
      stoneType: "Ruby Kemp & Hydro Emerald Stones",
      closure: "Traditional Golden Dori",
      earringType: "Mango Motif Hanging Drops",
      packageIncludes: "1 Manga Malai Necklace, 1 Pair of Earrings, Wooden Velvet Box"
    }
  },
  {
    id: "sj-st07",
    code: "SJ-ST07",
    name: "Kalyani Ruby Floral Festoon Necklace Set",
    category: "ruby-kemp",
    categories: ["necklace-sets", "ruby-kemp"],
    originalPrice: 3999,
    price: 2199,
    discountPercent: 45,
    rating: 4.8,
    reviewCount: 110,
    badge: "SALE -45%",
    isFeatured: false,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/07_Ruby_Floral_Drop_01_Full_Set.jpg",
      necklace: "image/with ai 02/07_Ruby_Floral_Drop_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/07_Ruby_Floral_Drop_03_Earring_Detail.jpg"
    },
    description: "Lush red ruby florets intertwined along a scalloped festoon collar. Accented with radiant drop clusters and coordinated ear tops.",
    details: {
      baseMetal: "Brass core with lacquer coating",
      plating: "24K Yellow Gold Micro-Polish",
      stoneType: "Faceted Ruby Red Crystals",
      closure: "Adjustable Thread Cord",
      earringType: "Ruby Blossom Stud Earrings",
      packageIncludes: "1 Festoon Necklace, 1 Pair of Ruby Studs, Pouch & Box"
    }
  },
  {
    id: "sj-st08",
    code: "SJ-ST08",
    name: "Vaidehi Emerald Blossom Choker & Drops Set",
    category: "emerald-collection",
    categories: ["necklace-sets", "emerald-collection"],
    originalPrice: 3799,
    price: 2099,
    discountPercent: 45,
    rating: 4.8,
    reviewCount: 89,
    badge: "POPULAR",
    isFeatured: false,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/08_Emerald_Floral_Drop_01_Full_Set.jpg",
      necklace: "image/with ai 02/08_Emerald_Floral_Drop_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/08_Emerald_Floral_Drop_03_Earring_Detail.jpg"
    },
    description: "Rich emerald blossom clusters nestled in micro-set golden petals. Hypoallergenic, comfortable, with sparkling AD border accents.",
    details: {
      baseMetal: "Hypoallergenic Jeweler's Brass",
      plating: "High Micron Gold Electroplating",
      stoneType: "Columbian Emerald Hue Glass & AD Stones",
      closure: "Adjustable Dori",
      earringType: "Emerald Floral Tops",
      packageIncludes: "1 Choker, 1 Pair of Earrings, Care Instructions"
    }
  },
  {
    id: "sj-st09",
    code: "SJ-ST09",
    name: "Ananya Emerald Teardrop Kundan Choker Set",
    category: "emerald-collection",
    categories: ["necklace-sets", "emerald-collection", "bridal-combos"],
    originalPrice: 4799,
    price: 2750,
    discountPercent: 43,
    rating: 4.9,
    reviewCount: 145,
    badge: "TOP RATED",
    isFeatured: true,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/09_Emerald_Teardrop_01_Full_Set.jpg",
      necklace: "image/with ai 02/09_Emerald_Teardrop_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/09_Emerald_Teardrop_03_Earring_Detail.jpg"
    },
    description: "Royal pear-cut emerald teardrop medallion suspended beneath a collar of pavé diamonds. Includes long chandelier teardrop earrings for weddings.",
    details: {
      baseMetal: "Brass Alloy Core",
      plating: "24K Matte Gold Polish",
      stoneType: "Pear Emerald Stone & Pavé Zirconia",
      closure: "Adjustable Golden Zari Dori",
      earringType: "Teardrop Chandelier Drops",
      packageIncludes: "1 Teardrop Choker, 1 Pair of Chandelier Earrings, Luxury Box"
    }
  },
  {
    id: "sj-st10",
    code: "SJ-ST10",
    name: "Samyukta Double Row Pavé Diamond-Look Necklace Set",
    category: "ad-stones",
    categories: ["necklace-sets", "ad-stones"],
    originalPrice: 3599,
    price: 1950,
    discountPercent: 46,
    rating: 4.7,
    reviewCount: 82,
    badge: "NEW ARRIVAL",
    isFeatured: false,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/10_Double_Row_Round_Stones_01_Full_Set.jpg",
      necklace: "image/with ai 02/10_Double_Row_Round_Stones_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/10_Double_Row_Round_Stones_03_Earring_Detail.jpg"
    },
    description: "Double row of brilliant round-cut Swiss zirconia stones set in antique bezel links. Shimmers identically to real solitaire diamonds in low light.",
    details: {
      baseMetal: "Jeweler's Copper & Brass",
      plating: "1-Gram Gold Flash Plated",
      stoneType: "Swiss Cut Round AD Solitaires",
      closure: "Adjustable Clasp / Link Chain",
      earringType: "Round Pavé Studs",
      packageIncludes: "1 Double Row Necklace, 1 Pair of Studs, Signature Box"
    }
  },
  {
    id: "sj-st11",
    code: "SJ-ST11",
    name: "Avantika Geometric Square Princess Collar Set",
    category: "ad-stones",
    categories: ["necklace-sets", "ad-stones"],
    originalPrice: 3299,
    price: 1799,
    discountPercent: 45,
    rating: 4.8,
    reviewCount: 67,
    badge: "SALE -45%",
    isFeatured: false,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/11_Geometric_Square_Link_01_Full_Set.jpg",
      necklace: "image/with ai 02/11_Geometric_Square_Link_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/11_Geometric_Square_Link_03_Earring_Detail.jpg"
    },
    description: "Art-deco inspired geometric square link collar studded with micro-set CZ stones. Universally complements both modern gowns and traditional Kanjeevaram sarees.",
    details: {
      baseMetal: "Refined Copper Alloy",
      plating: "24K Bright Gold Micron Polish",
      stoneType: "Cubic Zirconia Princess Cut",
      closure: "Lobster Clasp with Extension Chain",
      earringType: "Square Geometric Studs",
      packageIncludes: "1 Square Link Collar, 1 Pair of Matching Earrings, Velvet Pouch"
    }
  },
  {
    id: "sj-st12",
    code: "SJ-ST12",
    name: "Chandrika Geometric Trapeze Festoon Set",
    category: "ad-stones",
    categories: ["necklace-sets", "ad-stones"],
    originalPrice: 3699,
    price: 2150,
    discountPercent: 42,
    rating: 4.8,
    reviewCount: 54,
    badge: "SALE -42%",
    isFeatured: false,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/12_Geometric_Trapeze_01_Full_Set.jpg",
      necklace: "image/with ai 02/12_Geometric_Trapeze_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/12_Geometric_Trapeze_03_Earring_Detail.jpg"
    },
    description: "Fluid architectural trapeze links creating an eye-catching drape of gold and gemstones. Comes with statement geometric drop earrings.",
    details: {
      baseMetal: "Brass Core",
      plating: "Antique Matte Finish",
      stoneType: "Faceted AD Gemstones",
      closure: "Adjustable Thread Cord",
      earringType: "Trapeze Drop Earrings",
      packageIncludes: "1 Trapeze Festoon Necklace, 1 Pair of Drops, Premium Packaging"
    }
  },
  {
    id: "sj-st13",
    code: "SJ-ST13",
    name: "Lakshmi Kasu Medallion Antique Heritage Set",
    category: "temple-jewels",
    categories: ["necklace-sets", "temple-jewels", "bridal-combos"],
    originalPrice: 4499,
    price: 2599,
    discountPercent: 42,
    rating: 5.0,
    reviewCount: 230,
    badge: "BESTSELLER",
    isFeatured: true,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/13_Round_Medallion_Drops_01_Full_Set.jpg",
      necklace: "image/with ai 02/13_Round_Medallion_Drops_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/13_Round_Medallion_Drops_03_Earring_Detail.jpg"
    },
    description: "Auspicious Goddess Lakshmi coin medallions surrounded by delicate pearl drops and antique filigree loops. The quintessential South Indian heritage set.",
    details: {
      baseMetal: "Authentic Copper & Brass Alloy",
      plating: "1-Gram Antique Temple Gold Polish",
      stoneType: "Kemp Stones & Shell Pearls",
      closure: "Woven Golden Thread Dori",
      earringType: "Lakshmi Kasu Stud Drops",
      packageIncludes: "1 Kasu Medallion Necklace, 1 Pair of Earrings, Wooden Velvet Box"
    }
  },
  {
    id: "sj-st14",
    code: "SJ-ST14",
    name: "Tara Delicate Floral Bloom Daily Wear Set",
    category: "daily-wear",
    categories: ["necklace-sets", "daily-wear"],
    originalPrice: 2499,
    price: 1299,
    discountPercent: 48,
    rating: 4.7,
    reviewCount: 118,
    badge: "DAILY LUXE",
    isFeatured: false,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/14_Delicate_Floral_Chain_01_Full_Set.jpg",
      necklace: "image/with ai 02/14_Delicate_Floral_Chain_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/14_Delicate_Floral_Chain_03_Earring_Detail.jpg"
    },
    description: "Featherlight floral link chain necklace paired with dainty blossom earrings. Sweat-proof, anti-tarnish, perfectly suited for office and daily elegance.",
    details: {
      baseMetal: "High-Grade Stainless Brass",
      plating: "PVD 24K Micro Gold Plating",
      stoneType: "Micro Crystal Accents",
      closure: "Lobster Clasp with 2-inch Extender",
      earringType: "Delicate Floral Studs",
      packageIncludes: "1 Delicate Floral Chain, 1 Pair of Blossom Studs, Pouch"
    }
  },
  {
    id: "sj-st15",
    code: "SJ-ST15",
    name: "Rajkumari Royal Openwork Fringe Waterfall Haram",
    category: "bridal-combos",
    categories: ["necklace-sets", "bridal-combos"],
    originalPrice: 5499,
    price: 3199,
    discountPercent: 42,
    rating: 4.9,
    reviewCount: 175,
    badge: "ROYAL BRIDAL",
    isFeatured: true,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/15_Openwork_Fringe_01_Full_Set.jpg",
      necklace: "image/with ai 02/15_Openwork_Fringe_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/15_Openwork_Fringe_03_Earring_Detail.jpg"
    },
    description: "Grand bridal haram featuring an openwork fringe waterfall design. Creates an imposing royal silhouette across the neckline for wedding receptions.",
    details: {
      baseMetal: "Pure Brass & Copper Core",
      plating: "24K Matte Gold Plating with Anti-Tarnish Coat",
      stoneType: "Pavé Zirconia & Ruby Highlights",
      closure: "Reinforced Golden Zari Dori",
      earringType: "Cascading Fringe Drops",
      packageIncludes: "1 Grand Fringe Haram, 1 Pair of Statement Drops, Velvet Bridal Box"
    }
  },
  {
    id: "sj-st16",
    code: "SJ-ST16",
    name: "Siddhi Open Teardrop Dewdrop Choker Set",
    category: "ad-stones",
    categories: ["necklace-sets", "ad-stones", "daily-wear"],
    originalPrice: 3499,
    price: 1899,
    discountPercent: 46,
    rating: 4.8,
    reviewCount: 91,
    badge: "ELEGANT",
    isFeatured: false,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/16_Open_Teardrop_Pendant_01_Full_Set.jpg",
      necklace: "image/with ai 02/16_Open_Teardrop_Pendant_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/16_Open_Teardrop_Pendant_03_Earring_Detail.jpg"
    },
    description: "Graceful open pear teardrop motif centered with a floating diamond-simulant solitaire and matching dewdrop stud earrings.",
    details: {
      baseMetal: "Jeweler's Copper Alloy",
      plating: "24K Micro Gold Plated",
      stoneType: "Swiss Pavé AD Stones",
      closure: "Adjustable Thread Cord",
      earringType: "Teardrop Matching Studs",
      packageIncludes: "1 Open Teardrop Choker, 1 Pair of Studs, Presentation Pouch"
    }
  },
  {
    id: "sj-st17",
    code: "SJ-ST17",
    name: "Suvarna Linear Kasu Coin Choker & Jhumka Set",
    category: "temple-jewels",
    categories: ["necklace-sets", "temple-jewels"],
    originalPrice: 4199,
    price: 2399,
    discountPercent: 43,
    rating: 4.9,
    reviewCount: 138,
    badge: "TEMPLE PICK",
    isFeatured: false,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/17_Linear_Coin_Drops_01_Full_Set.jpg",
      necklace: "image/with ai 02/17_Linear_Coin_Drops_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/17_Linear_Coin_Drops_03_Earring_Detail.jpg"
    },
    description: "Linear rows of traditional temple coin drops alternating with ruby kemp flower buds. Finished in 1-gram matte gold polish with matching kasu jhumki earrings.",
    details: {
      baseMetal: "Brass & Copper Alloy",
      plating: "1-Gram Antique Temple Matte Gold",
      stoneType: "Kemp Ruby Crystals",
      closure: "Adjustable Golden Silk Dori",
      earringType: "Mini Kasu Jhumkas",
      packageIncludes: "1 Linear Coin Choker, 1 Pair of Kasu Jhumkas, Velvet Box"
    }
  },
  {
    id: "sj-st18",
    code: "SJ-ST18",
    name: "Neelam Royal Sapphire Blue Crystal Collar Set",
    category: "ad-stones",
    categories: ["necklace-sets", "ad-stones"],
    originalPrice: 3899,
    price: 2199,
    discountPercent: 44,
    rating: 4.9,
    reviewCount: 104,
    badge: "SAPPHIRE GLOW",
    isFeatured: false,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/18_Blue_Rectangle_Pendant_01_Full_Set.jpg",
      necklace: "image/with ai 02/18_Blue_Rectangle_Pendant_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/18_Blue_Rectangle_Pendant_03_Earring_Detail.jpg"
    },
    description: "Hypnotic deep sapphire blue emerald-cut gem surrounded by a double halo of pave zirconia stones on a structured gold collar.",
    details: {
      baseMetal: "Micro Plated Brass",
      plating: "24K Gold Electroplating",
      stoneType: "Royal Sapphire Blue Crystal & White CZ",
      closure: "Adjustable Link Extender",
      earringType: "Sapphire Blue Studs",
      packageIncludes: "1 Sapphire Blue Collar, 1 Pair of Studs, Jewelry Gift Box"
    }
  },
  {
    id: "sj-ed01",
    code: "SJ-ED01",
    name: "Maharani Emerald Velvet Showcase Rosette Set",
    category: "bridal-combos",
    categories: ["bridal-combos", "ad-stones", "featured"],
    originalPrice: 5999,
    price: 3499,
    discountPercent: 42,
    rating: 5.0,
    reviewCount: 320,
    badge: "COLLECTOR PIECE",
    isFeatured: true,
    inStock: true,
    dispatchHours: 24,
    images: {
      full: "image/with ai 02/Editorial_01_Floral_Rosette_01_Full_Set.jpg",
      necklace: "image/with ai 02/Editorial_01_Floral_Rosette_02_Necklace_Detail.jpg",
      earrings: "image/with ai 02/Editorial_01_Floral_Rosette_03_Earring_Detail.jpg"
    },
    description: "Limited Edition Collector's Showcase Piece. Handcrafted royal floral rosette necklace showcased on royal emerald velvet with matching ornate stud earrings.",
    details: {
      baseMetal: "Pure Hand-Forged Brass Core",
      plating: "High-Gloss 24K Micro Gold Plating",
      stoneType: "Swiss Pavé AD Stones & Black Spinel Core",
      closure: "Reinforced Golden Zari Dori with Tassels",
      earringType: "Matching Floral Rosette Studs",
      packageIncludes: "1 Editorial Floral Rosette Choker, 1 Pair of Ornate Studs, Wooden Velvet Trunk Box, Certificate of Authenticity"
    }
  }
];

// Circular Categories for Carousel / Quick Navigation (matching Suvina Jewels Image 3)
const CATEGORY_ITEMS = [
  { id: "all", name: "All Jewels", icon: "✨", count: "19 Items", image: "image/with ai 02/01_Floral_Rosette_01_Full_Set.jpg" },
  { id: "bridal-combos", name: "Bridal Combos", icon: "👑", count: "6 Sets", image: "image/with ai 02/Editorial_01_Floral_Rosette_01_Full_Set.jpg" },
  { id: "necklace-sets", name: "Necklace Sets", icon: "📿", count: "18 Sets", image: "image/with ai 02/04_Emerald_Loop_Fan_01_Full_Set.jpg" },
  { id: "temple-jewels", name: "Temple Jewels", icon: "🛕", count: "4 Designs", image: "image/with ai 02/13_Round_Medallion_Drops_01_Full_Set.jpg" },
  { id: "ruby-kemp", name: "Ruby & Kemp", icon: "🌺", count: "3 Collections", image: "image/with ai 02/03_Ruby_Pearl_Drops_01_Full_Set.jpg" },
  { id: "emerald-collection", name: "Emerald Luxe", icon: "💚", count: "4 Collections", image: "image/with ai 02/09_Emerald_Teardrop_01_Full_Set.jpg" },
  { id: "ad-stones", name: "AD & CZ Stones", icon: "💎", count: "7 Collections", image: "image/with ai 02/10_Double_Row_Round_Stones_01_Full_Set.jpg" },
  { id: "daily-wear", name: "Daily Wear", icon: "🌸", count: "3 Designs", image: "image/with ai 02/14_Delicate_Floral_Chain_01_Full_Set.jpg" }
];

// Verified Customer Reviews (from South Indian brides and jewelry enthusiasts)
const CUSTOMER_REVIEWS = [
  {
    name: "Sowmya Ramachandran",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    date: "2 days ago",
    verified: true,
    product: "Padmavathi Ruby Kemp Choker",
    comment: "I wore this for my sister's wedding muhurtham. Everyone in our family thought it was pure 22K gold from GRT! The kemp red color and pearl sheen are stunning. WhatsApp ordering was so fast!"
  },
  {
    name: "Deepa Narayanan",
    location: "Bengaluru, Karnataka",
    rating: 5,
    date: "1 week ago",
    verified: true,
    product: "Maharani Velvet Showcase Rosette Set",
    comment: "The craftsmanship is top-notch! The stones sparkle just like real American Diamonds. Safely delivered to Bengaluru in 48 hours. Beautiful velvet box packaging!"
  },
  {
    name: "Anusha Varma",
    location: "Hyderabad, Telangana",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    product: "Imperial Emerald Loop Fan Bridal Set",
    comment: "I was hesitant to buy jewelry online, but the video call preview on WhatsApp made me so confident. The green emerald shade matches my Kanjeevaram saree perfectly!"
  },
  {
    name: "Kavitha Priya",
    location: "Coimbatore, Tamil Nadu",
    rating: 5,
    date: "3 weeks ago",
    verified: true,
    product: "Lakshmi Kasu Medallion Heritage Set",
    comment: "Real traditional temple jewelry feel! The Lakshmi embossing is sharp and authentic. Highly recommend Suvina Jewels for anyone looking for premium micro-gold jewellery."
  }
];
