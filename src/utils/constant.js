import janamKundaliImg from "../assets/images/janam-kundali.webp";
import marriageAstrologyImg from "../assets/images/marriage-astrology.webp";
import childAstrologyImg from "../assets/images/child-astrology.webp";
import futureAstrologyImg from "../assets/images/future-astrology1.webp";
import kundaliVishleshanImg from "../assets/images/kundali-vishleshan.webp";
import vastuShastraImg from "../assets/images/vastu-shastra.webp";
import kishoreReview from "../assets/images/kishore-review.webp";
import vinayReview from "../assets/images/vinay-review.webp";

export const layoutContainer = "w-full px-3 md:container m-0 mx-auto lg:max-w-[1200px] lg:w-full";

export const navItems = [
    { path: "/home", label: "Home" },
    { path: "/about-us", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/appointment", label: "Appointment" },
    { path: "/gallery", label: "Gallery" },
    { path: "/gallery/our-video", label: "Our Videos" },
    { path: "/contact-us", label: "Contact Us" },
];

export const ourServicesFooterItem = [
    { path: '/services/janam-kundali', label: "Janam Kundali" },
    { path: '/services/kundali-vishleshan', label: "Kundali Vishleshan" },
    { path: '/services/child-astrology', label: "Child Astrology" },
    { path: '/services/future-astrology', label: "Future Astrology" },
    { path: '/services/marriage-astrology', label: "Marriage Astrology" },
    { path: '/services/vastu-shastra', label: "Vastu Shastra" },
    { path: "/gallery/our-products", label: "Our Products" },
]

export const galleryItems = [
    { path: "/gallery/our-products", label: "Our Products" },
    { path: "/gallery/our-video", label: "Our Videos" },
];

export const headerNavItems = [
    { path: "/home", label: "Home" },
    { path: "/about-us", label: "About Us" },
    {
        path: "/services",
        label: "Services",
        subMenu: [
            { path: '/services/janam-kundali', label: "Janam Kundali" },
            { path: '/services/kundali-vishleshan', label: "Kundali Vishleshan" },
            { path: '/services/child-astrology', label: "Child Astrology" },
            { path: '/services/future-astrology', label: "Future Astrology" },
            { path: '/services/marriage-astrology', label: "Marriage Astrology" },
            { path: '/services/vastu-shastra', label: "Vastu Shastra" }
        ],
    },
    { path: "/appointment", label: "Appointment" },
    {
        path: "/gallery",
        label: "Gallery",
        subMenu: [...galleryItems],
    },
    { path: "/contact-us", label: "Contact Us" },
];

export const homeServicesBoxContent = [
    {
        id: 1,
        // image: "https://placehold.co/287x183",
        image: `${futureAstrologyImg}`,
        name: "Future Astrology",
        description: " Gain insights into upcoming life events and make informed decisions.",
        buttonName: "View Details",
        link: "/services/future-astrology"
    },
    {
        id: 2,
        // image: "https://placehold.co/287x183",
        image: `${marriageAstrologyImg}`,
        name: "Marriage Astrology",
        description: " Ensure compatibility and harmony for a successful married life.",
        buttonName: "View Details",
        link: "/services/marriage-astrology"
    },
    {
        id: 3,
        // image: "https://placehold.co/287x183",
        image: `${janamKundaliImg}`,
        name: "Janam Kundali",
        description: "Get a detailed birth chart analysis to understand your life path.",
        buttonName: "View Details",
        link: "/services/janam-kundali"
    },
]

export const servicesBoxContent = [
    {
        id: 1,
        // image: "https://placehold.co/287x183",
        image: `${janamKundaliImg}`,
        name: "Janam Kundali",
        description: "Get a detailed birth chart analysis to understand your life path.",
        buttonName: "View Details",
        link: "/services/janam-kundali"
    },

    {
        id: 2,
        // image: "https://placehold.co/287x183",
        image: `${kundaliVishleshanImg}`,
        name: "Kundali Vishleshan",
        description: "Analyze planetary positions and their impact on your life journey.",
        buttonName: "View Details",
        link: "/services/kundali-vishleshan"
    },

    {
        id: 3,
        // image: "https://placehold.co/287x183",
        image: `${childAstrologyImg}`,
        name: "Child Astrology",
        description: "Discover your child’s potential, strengths, and future opportunities.",
        buttonName: "View Details",
        link: "/services/child-astrology"
    },

    {
        id: 4,
        // image: "https://placehold.co/287x183",
        image: `${futureAstrologyImg}`,
        name: "Future Astrology",
        description: " Gain insights into upcoming life events and make informed decisions.",
        buttonName: "View Details",
        link: "/services/future-astrology"
    },

    {
        id: 5,
        // image: "https://placehold.co/287x183",
        image: `${marriageAstrologyImg}`,
        name: "Marriage Astrology",
        description: " Ensure compatibility and harmony for a successful married life.",
        buttonName: "View Details",
        link: "/services/marriage-astrology"
    },

    {
        id: 6,
        // image: "https://placehold.co/287x183",
        image: `${vastuShastraImg}`,
        name: "Vastu Shastra",
        description: "Align your home or office with Vastu for positivity and success.",
        buttonName: "View Details",
        link: "/services/vastu-shastra"
    },

]


export const shortDetails = [
    { name: "40+", description: "Years of Experience" },
    { name: "5k+", description: "Kundli Provides" },
    { name: "5+", description: "Countries Served" },
    { name: "10k+", description: "Happy Clients" },
];

export const testimonials = [
    {
        id: 1,
        name: "Vinay kumar ravat",
        feedback: "The consultation was eye-opening! Medinikant Jha Ji provided deep insights into my career path, and his advice truly helped me make the right decisions.",
        image: `${vinayReview}`
        // image: "https://placehold.co/80",
        // image: "https://xsgames.co/randomusers/assets/avatars/male/61.jpg",
    },
    {
        id: 2,
        name: "Pooja Verma",
        feedback: "Amazing experience! The astrologer’s predictions were incredibly accurate, and their advice was both practical and helpful. They take the time to listen and provide clear explanations. Definitely recommend!",
        // image: "https://xsgames.co/randomusers/assets/avatars/female/32.jpg",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjWxfSHBmTw94SkOPfVpLh3Ex2ggRjoGjldEPSZss7IOdXiQhWhj=w45-h45-p-rp-mo-br100",
    },
    {
        id: 3,
        name: "Braj Kishore",
        feedback: "Accurate horoscope analysis! I was amazed at how precisely my life events matched the predictions. Highly recommended for anyone seeking clarity.",
        image: `${kishoreReview}`,
        // image: "https://xsgames.co/randomusers/assets/avatars/female/32.jpg",
    },
    {
        id: 4,
        name: "Amit Khanna",
        feedback: "The remedies suggested were simple yet effective. I have seen a positive shift in my personal and professional life since following them.",
        image: "https://xsgames.co/randomusers/assets/avatars/male/73.jpg",
        // image: "https://placehold.co/80",
    },
    {
        id: 5,
        name: "Neha Agarwal",
        feedback: "I was struggling with my relationship, and their guidance helped me bring stability and peace. A truly life-changing experience!",
        image: "https://xsgames.co/randomusers/assets/avatars/female/60.jpg",
        // image: "https://placehold.co/80",
    },
];


export const bannerData = {
    "/about-us": { heading: "About Us", description: "With 40+ years of expertise, we provide accurate horoscope analysis, personalized guidance, and astrological remedies to help you achieve clarity, balance, and success in life." },
    "/services": { heading: "Our Services", description: "We offer expert astrology services, including horoscope analysis, personalized guidance, and Vastu consultations, helping you find clarity, balance, and success in life." },
    "/appointment": { heading: "Book an Appointment", description: "Schedule a consultation with our expert astrologer for personalized insights and guidance. Get clarity on your life, career, relationships, and more with a one-on-one session." },
    "/contact-us": { heading: "Contact Us", description: "Reach out to us for inquiries, consultations, or assistance. We are here to guide you with expert astrological insights and personalized support." },
    "/gallery": { heading: "Our Gallery", description: "Explore our gallery to see moments from consultations, events, and satisfied clients. Witness the transformative impact of astrology through our journey." },
    "/gallery/our-products": { heading: "Our Products", description: "Discover our range of astrological products designed to bring positivity, balance, and prosperity into your life. Explore remedies, gemstones, yantras, and more.", isSubBannerLink: "/gallery" },
    "/gallery/our-video": { heading: "Our Video", description: "Watch our insightful videos on astrology, horoscope analysis, and expert guidance. Gain deeper knowledge and practical tips for a harmonious life.", isSubBannerLink: "/gallery" },
    "/services/janam-kundali": {
        heading: "Janam Kundali",
        description: "Discover the blueprint of your life with a detailed Janam Kundali analysis. Get insights into your strengths, weaknesses, and future possibilities.",
        isSubBannerLink: "/services"
    },
    "/services/kundali-vishleshan": {
        heading: "Kundali Vishleshan",
        description: "A deep analysis of your birth chart to uncover hidden aspects of your personality, career, relationships, and life path.",
        isSubBannerLink: "/services"
    },
    "/services/child-astrology": {
        heading: "Child Astrology",
        description: "Understand your child’s potential, strengths, and future prospects with a personalized astrological reading designed for their growth and success.",
        isSubBannerLink: "/services"
    },
    "/services/future-astrology": {
        heading: "Future Astrology",
        description: "Gain clarity on upcoming opportunities and challenges in your life. Our expert guidance helps you make informed decisions for a prosperous future.",
        isSubBannerLink: "/services"
    },
    "/services/marriage-astrology": {
        heading: "Marriage Astrology",
        description: "Find out the compatibility between partners and receive astrological guidance for a happy, harmonious, and successful married life.",
        isSubBannerLink: "/services"
    },
    "/services/vastu-shastra": {
        heading: "Vastu Shastra",
        description: "Enhance the energy of your home or workplace with Vastu Shastra principles. Achieve peace, prosperity, and well-being by aligning your space with cosmic energies.",
        isSubBannerLink: "/services"
    },
    "/thank-you": {
        heading: "Thank You!",
        description: "We appreciate your trust in us. Your request has been received, and we will get back to you soon. Stay connected for more insights and guidance.",
    }
};


export const productBoxContent = [
    {
        id: 1,
        // image: "https://placehold.co/287x183",
        image: "https://rukminim2.flixcart.com/image/832/832/xif0q/regionalbooks/v/n/a/puja-pushpanjali-original-imagu4vugdrwzrwn.jpeg?q=70&crop=false",
        name: "Puja Pushpanjali",
        description: '"Puja Pushpanjali" includes detailed procedures for Shiv Pooja Vidhi, Kalash Poojan, Bhagwati Pujan Vidhi, Maha Mrityunjay Jap Vidhi, Lakshmi Poojan Vidhi, Rudrabhishek, Havan Vidhi, Parthiv Shiv Poojan Vidhi, Shree Suktam, Kumbh Vivah, Chhag Balidan, and Mash Bali. This sacred text presents traditional Sanatan Dharma rituals in a simple and authentic manner, enabling devotees to perform pujas correctly and attain maximum spiritual benefits.',
        buttonName: "Buy Now",
        link: "https://dl.flipkart.com/s/ATo9INuuuN"
    },
    {
        id: 1,
        image: "https://placehold.co/287x183",
        name: "ShreeTantra Mishran",
        description: "ShreeTantra Mishran is a powerful blend of 30 Ayurvedic herbs, energized through tantric rituals to eliminate negative energy. Sprinkling it into a sacred fire for 21 days purifies your home, removes evil influences, and attracts peace, prosperity, and positivity. Protect your space and restore harmony with this ancient remedy.",
        buttonName: "Buy Now",
        link: "https://api.whatsapp.com/send?phone=+919431425134&text=Hi,%20I%20was%20looking%20at%20this%20Tantra%20Samagri.%20How%20can%20I%20buy%20it?%20Please%20guide%20me%20through%20the%20process."
    },
]
