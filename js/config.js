/**
 * RAJ PRINTERS - CENTRALIZED BUSINESS CONFIGURATION FILE
 *
 * Edit this single file to update all business details across the entire website.
 * No need to modify HTML or JS code directly.
 */

window.SITE_CONFIG = {
  // --- CORE BUSINESS IDENTITY ---
  BUSINESS_NAME: "Raj Printers",
  TAGLINE: "Quality Printing for Every Need",
  SUBTAGLINE:
    "From visiting cards & flyers to banners, invitations, and business stationery, Raj Printers helps individuals and businesses get professional print work done locally in Samayapuram.",
  WEBSITE_URL: "https://gsk37690-tech.github.io/Raj-Printers/",

  // --- CONTACT INFORMATION (VERIFIED FROM GOOGLE MAPS) ---
  PHONE_PRIMARY: "070105 64303",
  PHONE_PRIMARY_RAW: "+917010564303",
  PHONE_SECONDARY: "93427 09489",
  PHONE_SECONDARY_RAW: "+919342709489",
  WHATSAPP_NUMBER: "917010564303", // Format: 91XXXXXXXXXX (No +, spaces, or dashes)
  EMAIL_ADDRESS: "enquiry.rajprinters@gmail.com", // [EMAIL PLACEHOLDER - Easy to update]

  // --- LOCATION & ADDRESS (VERIFIED FROM GOOGLE MAPS) ---
  ADDRESS_STREET: "94, Kariyamanickam Road, Siva Complex",
  LOCALITY: "Samayapuram",
  CITY: "Tiruchirappalli (Trichy)",
  STATE: "Tamil Nadu",
  POSTCODE: "621112",
  COUNTRY: "India",
  FULL_ADDRESS:
    "94, Kariyamanickam Road, Siva Complex, Samayapuram, Tamil Nadu 621112",
  PLUS_CODE: "WPJP+9C Samayapuram, Tamil Nadu",

  // --- GOOGLE BUSINESS PROFILE & MAPS LINK ---
  GOOGLE_MAPS_URL: "https://maps.app.goo.gl/1FNJHGQRjnb7kzYv6",
  GOOGLE_EMBED_MAP_SRC:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.43346513511!2d78.73600000000001!3d10.930400000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf70000000001%3A0x0!2zMTDCsDU1JzQ5LjQiTiA3OMKwNDQnMDkuNiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // --- VERIFIED GOOGLE RATING & REVIEWS ---
  GOOGLE_RATING: 5.0,
  GOOGLE_REVIEW_COUNT: "5.0 ★ Rating on Google",

  // --- OPERATING HOURS ---
  BUSINESS_HOURS: [
    { days: "Monday - Saturday", time: "8:00 AM – 10:00 PM" },
    { days: "Sunday", time: "Closed / Emergency Call Only" },
  ],

  // --- BRAND IMAGES & ASSETS ---
  BRAND_LOGO: "images/brand_logo_gold.png",
  DEITY_IMAGE: "images/mariamman_deity.png",
  SHOP_EXTERIOR_IMAGE: "images/real_shop_exterior.png",
  MACHINERY_STUDIO_IMAGE: "images/real_machinery_studio.png",
  FLEX_PRINTING_ACTION_IMAGE: "images/real_flex_printing_in_action.png",

  // --- SERVICES LISTING (Each service can be enabled/disabled with `enabled: true/false`) ---
  SERVICES: [
    {
      id: "temple-festival",
      title: "Temple & Cultural Festival Printing",
      category: "personal",
      shortDesc:
        "Devotional flex banners, Car Festival (Therottam) invites, and temple ceremony posters featuring Arulmigu Samayapuram Mariamman artwork.",
      icon: "fa-gopuram",
      image: "images/lakshmi_deity.png",
      enabled: true,
      popular: true,
    },
    {
      id: "visiting-cards",
      title: "Visiting Cards Printing",
      category: "business",
      shortDesc:
        "Premium matte, glossy, textured, and embossed business cards for professionals and businesses.",
      icon: "fa-address-card",
      image: "images/visiting_cards.png",
      enabled: true,
      popular: true,
    },
    {
      id: "flex-poster",
      title: "Flex & Poster Printing",
      category: "commercial",
      shortDesc:
        "Vivid, weather-resistant outdoor flex banners, shop boards, event posters, and vinyl prints.",
      icon: "fa-image",
      image: "images/real_flex_printing_in_action.png",
      enabled: true,
      popular: true,
    },
    {
      id: "invitation-cards",
      title: "Wedding & Invitation Cards",
      category: "personal",
      shortDesc:
        "Traditional Tamil wedding invitations, housewarming cards, birthday invitations, and custom event invites.",
      icon: "fa-envelope-open-text",
      image: "images/invitation_cards.png",
      enabled: true,
      popular: true,
    },
    {
      id: "brochures-flyers",
      title: "Flyers & Pamphlet Printing",
      category: "commercial",
      shortDesc:
        "High-impact single or multi-fold promotional flyers, pamphlets, and catalog printing for business marketing.",
      icon: "fa-paper-plane",
      image: "images/brochures_flyers.png",
      enabled: true,
      popular: true,
    },
    {
      id: "business-stationery",
      title: "Bill Books & Stationery",
      category: "business",
      shortDesc:
        "Custom duplicate/triplicate GST bill books, cash vouchers, letterheads, and rubber stamps.",
      icon: "fa-book-open",
      image: "images/bill_books_stationery.png",
      enabled: true,
      popular: false,
    },
    {
      id: "stickers-labels",
      title: "Stickers & Product Labels",
      category: "commercial",
      shortDesc:
        "Custom die-cut vinyl stickers, waterproof packaging labels, and promotional branding decals.",
      icon: "fa-tags",
      image: "images/stickers_product_labels.png",
      enabled: true,
      popular: false,
    },
    {
      id: "xerox-photocopy",
      title: "High-Speed Xerox & Copying",
      category: "general",
      shortDesc:
        "Black & white and high-quality colour xerox, document scanning, lamination, and project report binding.",
      icon: "fa-copy",
      image: "images/real_machinery_studio.png",
      enabled: true,
      popular: false,
    },
    {
      id: "id-cards",
      title: "ID Cards & Lamination",
      category: "commercial",
      shortDesc:
        "PVC identity cards for schools, institutions, and corporate staff with lanyards and pouches.",
      icon: "fa-id-badge",
      image: "images/id_cards_lamination.png",
      enabled: true,
      popular: false,
    },
  ],

  // --- SOCIAL MEDIA LINKS (Editable Placeholders) ---
  SOCIAL_LINKS: {
    facebook: "", // Add URL if available
    instagram: "", // Add URL if available
    youtube: "",
  },

  // --- WHATSAPP MESSAGE BUILDER FUNCTION ---
  getWhatsAppUrl: function (serviceName) {
    let msg = `Hello Raj Printers, I found your shop on Google and would like to enquire about your printing services.`;
    if (serviceName) {
      msg = `Hello Raj Printers, I found your website on Google and would like to enquire about *${serviceName}*.`;
    }
    return `https://wa.me/${this.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  },
};
