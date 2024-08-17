import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  video4,
  video5,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];



export const brainwaveServices = [
  "Video Generation",
  "Georgian language as priorety",
  "Focused On Content Creation",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Georgian Voice Implementation",
    text: "Enable the Ai To geenrate videos with georgian voice on thme.",
    date: "August 2024",
    status: "ongoing",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Video generation",
    text: "Generate Videos form you Media post or from any text for your Youtube's,Tiktok's Content ",
    date: "June 2024",
    status: "Done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "georgian text summarization",
    text: "summariaze any kinds of text includign gerigian text and any languages you feel to use",
    date: "june 2024",
    status: "Done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "June 2023",
    status: "Done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Empower your media team with our AI video generator. Create professional videos faster and more efficiently, allowing your team to focus on what they do best—creating great content";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "Only 3 Animated Videos",
      "Access to a library of royalty-free music tracks to enhance your videos",
      "Option to watermark your videos with your logo for a professional touch.",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "19.99",
    features: [
      "Unlimited Video Genartion 10 video downloads",
      "Georgian Voice Integration In Video ",
      "Limited Castumizations and Models",
    ],
  },
  {
    id: "2",
    title: "Premium Organization",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: "99.9",
    features: [
      "Monthly unlimited Generations and Downloads",
      "Diffrent Types Of Voice Integration",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "3",
    title: "Enterprise+",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "ALL Included From Premium Organization Packet ",
      "Full Costumization On Video,Voice and PreTrained Models For The Brand  ",
      "7 Users From Team",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "",
    text: "",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
   
    imageUrl: benefitImage2,
    
  },
  {
    id: "1",
    title: "",
    text: "",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "",
    text: "",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "",
    text: "",
    backgroundUrl: "/src/assets/benefits/card-4.svg",
    videoUrl:video4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "",
    text: "",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    videoUrl:video5,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "",
    text: "",
    backgroundUrl: "/src/assets/benefits/card-6.svg",
    
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
