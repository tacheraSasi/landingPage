import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#Features" },
  { label: "Workflow", href: "#Workflow" },
  { label: "Pricing", href: "#Pricing" },
  { label: "Testimonials", href: "#Testimonials" },
];


export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence were outstanding. Highly recommended for top-notch service."
  }
  
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Precise Attendance Tracking",
    description:
      "Monitor employee attendance accurately with Ekilie's advanced tracking system, ensuring reliable data for your records.",
  },
  {
    icon: <Fingerprint />,
    text: "Real-Time Location Verification",
    description:
      "Verify employee presence in real-time with location-based attendance marking, ensuring they are within the designated area.",
  },
  {
    icon: <ShieldHalf />,
    text: "Secure Data Management",
    description:
      "Keep attendance data safe with Ekilie's robust security features, protecting sensitive information from unauthorized access.",
  },
  {
    icon: <BatteryCharging />,
    text: "Automated Reports",
    description:
      "Generate comprehensive attendance reports automatically, providing valuable insights into employee punctuality and presence.",
  },
  {
    icon: <PlugZap />,
    text: "User-Friendly Interface",
    description:
      "Ekilie offers an intuitive and easy-to-use interface, making attendance tracking effortless for both employees and administrators.",
  },
  {
    icon: <GlobeLock />,
    text: "Integration Capabilities",
    description:
      "Seamlessly integrate Ekilie with your existing office management systems to create a unified and efficient workflow.",
  },
];

export const checklistItems = [
  {
    title: "Seamless Attendance Logging",
    description:
      "Easily log employee attendance with minimal effort, ensuring accurate records and efficient tracking.",
  },
  {
    title: "Real-Time Monitoring",
    description:
      "Monitor attendance in real-time, providing instant updates on employee presence and punctuality.",
  },
  {
    title: "Automated Notifications",
    description:
      "Receive automated notifications for attendance anomalies, ensuring immediate awareness and action.",
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Generate detailed reports to analyze attendance patterns and improve workforce management.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "$0",
    features: [
      "Employee Attendance Tracking",
      "5 Gb Storage",
      "Basic Analytics",
      "Email Notifications",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Advanced Attendance Tracking",
      "10 Gb Storage",
      "Advanced Analytics",
      "Real-Time Notifications",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Comprehensive Attendance Solutions",
      "Unlimited Storage",
      "High Performance Network",
      "Priority Support",
    ],
  },
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Mobile app" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Jobs" },
];

