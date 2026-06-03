import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Melendez Law Office",
    tagline: "Your trusted legal partner in Florida.",
    phone: "(407) 932-1650",
    phoneHref: "tel:+14079321650",
    email: "info@melendezlawoffice.com",
    address: "123 Main St",
    city: "Kissimmee",
    serviceAreas: ["Kissimmee", "Orlando", "Central Florida", "Florida", "Puerto Rico"],
    license: "Florida Bar Member",
    since: "2010",
    google_rating: "4.9",
    review_count: "10",
    emergency: true,
    theme: "slate",
    niche: "lawfirm",
  },

  services: [
    { icon: "briefcase", title: "Creditor Rights", desc: "Protecting your financial interests with expert legal representation.", urgent: false },
    { icon: "hammer", title: "Business Law & Litigation", desc: "Comprehensive legal support for your business operations and disputes.", urgent: false },
    { icon: "home", title: "Real Estate Law", desc: "Navigating complex real estate transactions and landlord/tenant issues.", urgent: false },
    { icon: "shield-check", title: "Personal Injury Claims", desc: "Helping you receive rightful compensation after an accident.", urgent: true },
    { icon: "gavel", title: "Criminal Defense", desc: "Aggressive defense for DUI, theft, drug crimes, and other charges.", urgent: true },
    { icon: "award", title: "Expungements & Sealings", desc: "Clearing your record for a fresh start and brighter future.", urgent: false }
  ],

  testimonials: [
    { name: "Marixa Salgado", location: "Orlando, FL", stars: 5, text: "Carlos Melendez responded immediately to a call about an accident. Thanks to his guidance, the outcome was positive, and our family could not be happier. I recommend him to anyone who has an accident and doesn’t know what to do next; he is caring, knowledgeable, and non-judgmental. You will be happy you called him!" },
    { name: "Chris Ramos", location: "Kissimmee, FL", stars: 5, text: "I highly recommend Melendez Law Offices. They assisted me with a traffic citation. Their professional team navigated the legal process efficiently, providing clear communication and expert advice. Grateful for their expertise and positive outcome. They truly made a difference." },
    { name: "Megan Strable", location: "Central Florida", stars: 5, text: "Carlos did an amazing job with my case. He acted with great precision and determination and treated me and my situation with the utmost importance and consideration. I appreciate everything he did for my case and would definitely recommend him to anyone in need of a great lawyer!" }
  ],

  trustBadges: [
    "Florida Bar Member", "24/7 Phone Services", "Personalized Representation", "Client-Focused Approach", "Serving Florida & Puerto Rico"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 10, label: "Years Experience", suffix: "+", decimals: 0 },
    { value: 100, label: "Cases Won", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "phone", title: "24/7 Phone Services", desc: "We are always available to take your call and provide immediate assistance." },
    { icon: "heart", title: "Dedicated to Clients", desc: "We prioritize your well-being and fight tirelessly for your best interests." },
    { icon: "award", title: "Exceptional Representation", desc: "Receive top-tier legal services for all your complex legal matters." },
    { icon: "thumbs-up", title: "Personalized Attention", desc: "More personal than big firms, we build relationships based on trust." },
    { icon: "shield-check", title: "Protecting Your Rights", desc: "We value and support your opinions, rights, interests, and freedoms." },
    { icon: "map-pin", title: "Florida & Puerto Rico", desc: "Expert legal services available across Florida and in Puerto Rico." }
  ],

  formServiceOptions: ["Creditor Rights", "Banking Litigation – Legal Action Recovery", "Business Law and Commercial Litigation", "Real Estate and Commercial Landlord / Tenant Law", "Mortgage Foreclosure", "Personal Injury", "Criminal Defense"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!