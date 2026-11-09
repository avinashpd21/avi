import {
  ServiceItem,
  ProjectItem,
  SkillItem,
  PricingPlan,
  TestimonialItem,
  FAQItem,
} from '../types/index.ts';

export const CONTACT_INFO = {
  name: 'Avinash Prasad',
  role: 'Freelance Website Developer',
  phone: '8229065906',
  phoneFormatted: '+91 82290 65906',
  whatsapp: '9800480782',
  whatsappFormatted: '+91 98004 80782',
  email: 'avinash8229065906@gmail.com',
  location: 'India (Available for Global & Pan-India Remote Projects)',
  experience: '3+ Years Crafting Digital Experiences',
  turnaroundTime: '3 - 7 Days Fast Delivery',
  social: {
    instagram: 'https://instagram.com/avinashprasad.dev',
    linkedin: 'https://linkedin.com/in/avinash-prasad-dev',
    github: 'https://github.com/avinashprasad-dev',
  },
};

export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/91${CONTACT_INFO.whatsapp}?text=${encoded}`;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'business-website',
    title: 'Business Website Development',
    category: 'Corporate & Growth',
    shortDesc: 'Custom corporate and business websites engineered to build trust and capture high-intent inquiries.',
    fullDesc:
      'Turn casual online visitors into loyal clients. Built with sleek modern aesthetics, clear value propositions, interactive service catalogs, and one-tap WhatsApp and call conversions.',
    features: [
      'Multi-page corporate architecture',
      'Lead capture forms & WhatsApp CTA buttons',
      'Local Google Maps & reviews integration',
      'SEO-ready structure & schema markup',
      'High-speed cloud performance',
    ],
    deliverables: ['Responsive Web Pages', 'Contact Lead System', 'Google Analytics Setup'],
    timeline: '5-7 Days',
    iconName: 'Briefcase',
    badge: 'Most Popular',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website Development',
    category: 'Personal Branding',
    shortDesc: 'Distinguished personal branding websites for freelancers, doctors, lawyers, designers & creators.',
    fullDesc:
      'Showcase your expertise with a digital resume and portfolio that commands premium rates. Includes case studies, credentials, interactive project previews, and client inquiry forms.',
    features: [
      'Visual project gallery with live demos',
      'Client testimonials & trust badges',
      'Downloadable resume/brochure button',
      'Direct social & WhatsApp contact flow',
      'Custom domain & personal email setup',
    ],
    deliverables: ['Custom Portfolio UI', 'Interactive Gallery', 'Mobile Friendly Layout'],
    timeline: '3-5 Days',
    iconName: 'UserCheck',
  },
  {
    id: 'ecommerce-website',
    title: 'E-commerce Website Development',
    category: 'Online Sales',
    shortDesc: 'Modern online stores with seamless product catalogs, shopping carts, and payment gateway integration.',
    fullDesc:
      'Start selling your products online 24/7. Perfect for retail shops, fashion boutiques, local manufacturers, and digital product merchants wanting high conversion rates.',
    features: [
      'Dynamic product catalog & filtering',
      'Secure shopping cart & checkout flow',
      'UPI, Razorpay, Stripe or Cash on Delivery',
      'WhatsApp order notifications & direct chat',
      'Easy-to-use product management backend',
    ],
    deliverables: ['Complete Online Store', 'Payment Setup', 'Order Tracking Interface'],
    timeline: '7-12 Days',
    iconName: 'ShoppingBag',
    badge: 'High ROI',
  },
  {
    id: 'landing-page',
    title: 'Landing Page Design',
    category: 'Lead Generation & Ads',
    shortDesc: 'High-conversion, single-page sales funnels designed for Google Ads, Facebook Ads & product launches.',
    fullDesc:
      'Maximize your advertising return. Focused storytelling, compelling copywriting sections, social proof triggers, and friction-free call-to-action buttons that convert clicks into sales.',
    features: [
      'A/B tested visual hierarchy & layout',
      'Sub-second ultra-fast loading speed',
      'Sticky mobile call & WhatsApp bars',
      'Ad tracking pixels & conversion analytics',
      'Engaging FAQs & urgency elements',
    ],
    deliverables: ['High-Converting Landing Page', 'Ad Pixel Integration', 'Speed Report'],
    timeline: '2-4 Days',
    iconName: 'Zap',
  },
  {
    id: 'school-college-website',
    title: 'School & College Websites',
    category: 'Education & Institutional',
    shortDesc: 'Authoritative web portals for schools, colleges, coaching institutes, and training academies.',
    fullDesc:
      'Equip your educational institute with an attractive, informative portal. Provide prospectuses, online admission inquiries, faculty listings, event notices, and student portals.',
    features: [
      'Online admission & enquiry forms',
      'Course curriculum & fee prospectus viewer',
      'Notice board & upcoming events calendar',
      'Photo gallery of campus & student life',
      'Accreditation, results & faculty roster',
    ],
    deliverables: ['Institutional Web Portal', 'Enquiry Database', 'Admin Notice Panel'],
    timeline: '6-10 Days',
    iconName: 'GraduationCap',
  },
  {
    id: 'redesign-maintenance',
    title: 'Website Redesign & Maintenance',
    category: 'Optimization & Upgrades',
    shortDesc: 'Revamp outdated, slow, or broken websites into lightning-fast, sleek, mobile-first powerhouses.',
    fullDesc:
      'Is your current site old, sluggish, or not generating inquiries? We breathe new life into existing sites with modern dark/light UI, speed tuning, mobile responsiveness, and continuous security updates.',
    features: [
      'Full visual overhaul & responsive rewrite',
      '90+ Google PageSpeed mobile optimization',
      'Security patch updates & malware protection',
      'Broken link & form fixes',
      'Monthly maintenance & content update plans',
    ],
    deliverables: ['Revamped Responsive Website', 'Speed Benchmark 90+', '30-Day Support'],
    timeline: '3-6 Days',
    iconName: 'RefreshCw',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Apex Business Consulting Portal',
    category: 'Business',
    description:
      'Corporate website for a management consultancy featuring interactive service calculators, case study showcase, and one-tap consultation booking via WhatsApp.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive Web Design'],
    liveDemoUrl: '#demo-apex',
    metrics: '+185% Client Leads',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Velvet Glow - Premium Cosmetics Store',
    category: 'E-Commerce',
    description:
      'Sleek e-commerce store with instant product search, category filters, cart drawer, and direct WhatsApp order confirmation alongside online payment checkout.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    technologies: ['WordPress / WooCommerce', 'JavaScript', 'Bootstrap', 'Payment Gateway'],
    liveDemoUrl: '#demo-velvet',
    metrics: '99+ PageSpeed Score',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Horizon Academy & College Portal',
    category: 'School & College',
    description:
      'Comprehensive institutional website with digital prospectus, online admission enquiry module, course catalog, and automated notification board.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    liveDemoUrl: '#demo-horizon',
    metrics: '400+ Admission Enquiries',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'SaaS Pulse - High Conversion Landing Page',
    category: 'Landing Pages',
    description:
      'Ultra-focused marketing landing page with glassmorphism feature cards, interactive pricing comparison, customer proof tickers, and call-to-action funnels.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Tailwind CSS', 'AI-Assisted Workflow', 'ChatGPT & Gemini'],
    liveDemoUrl: '#demo-saas',
    metrics: '4.8% Ad Conversion Rate',
    featured: false,
  },
  {
    id: 'proj-5',
    title: 'Dr. Mehta Healthcare & Clinic Website',
    category: 'Business',
    description:
      'Professional clinic website with doctor qualifications, treatment guides, patient reviews, clinic Google Map navigation, and WhatsApp appointment booking.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    technologies: ['WordPress', 'HTML5', 'CSS3', 'Mobile-First Design'],
    liveDemoUrl: '#demo-clinic',
    metrics: '25+ Daily Patient Calls',
    featured: false,
  },
  {
    id: 'proj-6',
    title: 'Urban Architect & Interior Studio Portfolio',
    category: 'Portfolio',
    description:
      'Minimalist dark-theme portfolio with masonry project grid, before/after renovation sliders, and downloadable company profile brochure.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    technologies: ['JavaScript', 'Tailwind CSS', 'HTML5', 'Responsive Design'],
    liveDemoUrl: '#demo-architect',
    metrics: 'High-Value Project Wins',
    featured: false,
  },
];

export const SKILLS: SkillItem[] = [
  {
    name: 'HTML5',
    category: 'Core',
    level: 'Advanced Semantic Standard',
    description: 'Clean, accessible, and SEO-optimized document structuring following W3C standards.',
    iconName: 'Code',
    accentColor: '#f97316',
  },
  {
    name: 'CSS3',
    category: 'Core',
    level: 'Modern Layouts & Effects',
    description: 'Flexbox, CSS Grid, custom animations, glassmorphism, and responsive media queries.',
    iconName: 'Palette',
    accentColor: '#38bdf8',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    level: 'ES6+ & Interactive DOM',
    description: 'Dynamic interactivity, API integrations, form validations, and asynchronous logic.',
    iconName: 'FileCode',
    accentColor: '#facc15',
  },
  {
    name: 'Responsive Web Design',
    category: 'Core',
    level: 'Mobile-First Architecture',
    description: 'Flawless visual rendering and touch ergonomics across smartphones, tablets, and desktops.',
    iconName: 'Smartphone',
    accentColor: '#22c55e',
  },
  {
    name: 'Bootstrap',
    category: 'CMS & Styling',
    level: 'Rapid Grid & Component UI',
    description: 'Battle-tested responsive grid frameworks, UI components, and utility-driven layouts.',
    iconName: 'Layers',
    accentColor: '#a855f7',
  },
  {
    name: 'WordPress',
    category: 'CMS & Styling',
    level: 'CMS & Theme Customization',
    description: 'Easy-to-manage client websites, Elementor, WooCommerce, and blog integrations.',
    iconName: 'Globe',
    accentColor: '#0ea5e9',
  },
  {
    name: 'ChatGPT',
    category: 'AI & Acceleration',
    level: 'AI-Powered Workflow',
    description: 'Accelerated code generation, copywriting drafts, automated testing, and rapid bug resolution.',
    iconName: 'Bot',
    accentColor: '#10b981',
  },
  {
    name: 'Gemini',
    category: 'AI & Acceleration',
    level: 'Advanced Multimodal AI',
    description: 'Intelligent schema drafting, content enhancement, code review, and smart website feature ideation.',
    iconName: 'Sparkles',
    accentColor: '#8b5cf6',
  },
];

export const WHY_CHOOSE_ME = [
  {
    id: 'modern-design',
    title: 'Modern and Professional Design',
    description:
      'No outdated 2010 templates. Every website features contemporary aesthetics, clean typography, glassmorphism accents, and brand consistency that instills immediate confidence.',
    icon: 'Sparkles',
    highlight: 'Aesthetic & Credible',
  },
  {
    id: 'mobile-friendly',
    title: 'Mobile-Friendly & Responsive',
    description:
      'Over 80% of your visitors browse on their phones. Your website is meticulously tested on iPhone, Android, and tablets for smooth touch interactions and instant load times.',
    icon: 'Smartphone',
    highlight: '100% Mobile Ready',
  },
  {
    id: 'affordable-pricing',
    title: 'Affordable & Transparent Pricing',
    description:
      'Get agency-grade web design without inflated agency retainers or hidden fees. Flexible scope tailored to fit startups, local shop owners, and growing enterprises.',
    icon: 'BadgePercent',
    highlight: 'Direct Freelancer Rates',
  },
  {
    id: 'fast-communication',
    title: 'Fast Communication (WhatsApp & Call)',
    description:
      'Direct, zero-lag access to your developer. No ticketing systems or confusing middle-managers—reach Avinash directly on WhatsApp (9800480782) or phone (8229065906).',
    icon: 'MessageSquare',
    highlight: 'Quick Direct Replies',
  },
  {
    id: 'custom-solutions',
    title: 'Tailored Custom Solutions',
    description:
      'Every business is unique. Whether you require a single-page sales funnel or an institutional portal with inquiry tracking, your website is engineered for your exact business goals.',
    icon: 'Wrench',
    highlight: 'Engineered for Your Goals',
  },
  {
    id: 'ai-assisted',
    title: 'AI-Assisted Development Workflow',
    description:
      'Leveraging cutting-edge tools like ChatGPT and Gemini allows for faster prototyping, robust code validation, and prompt delivery—saving you both valuable time and money.',
    icon: 'Cpu',
    highlight: '2x Faster Delivery',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic-website',
    name: 'Basic Website',
    price: '₹4,999',
    priceSubtext: 'Starting price • Ideal for local shops & portfolios',
    tagline: 'Ideal for local businesses, shops, and individuals needing a clean online presence.',
    recommended: false,
    features: [
      '1 to 3 Custom Responsive Web Pages',
      'Mobile-Friendly Responsive Design',
      'Contact Lead Form & WhatsApp Chat Button',
      'Google Maps Location Integration',
      'Basic On-Page SEO Setup',
      'Social Media Icons & Direct Links',
      'Fast Delivery in 3 to 4 Days',
      '15 Days Post-Launch Support',
    ],
    deliveryTime: '3 - 4 Days',
    revisions: '2 Rounds of Revisions',
    support: '15 Days Free Support',
    idealFor: 'Shop Owners, Personal Portfolios, Single Services',
  },
  {
    id: 'professional-website',
    name: 'Professional Website',
    price: '₹11,999',
    priceSubtext: 'Starting price • Most Popular for growing businesses',
    tagline: 'The most popular package for growing businesses, startups, and service providers.',
    recommended: true,
    features: [
      '5 to 8 Custom Modern Web Pages',
      'Premium Glassmorphism & Modern UI Design',
      'Interactive Service / Product Showcase',
      'Dynamic WhatsApp & Call Conversion Triggers',
      'Enhanced SEO Architecture for Google Search',
      'Google Analytics & Search Console Setup',
      'Speed Optimization (90+ Mobile Score)',
      'Delivery in 5 to 7 Days',
      '30 Days Free Maintenance & Support',
    ],
    deliveryTime: '5 - 7 Days',
    revisions: 'Unlimited Polishing Revisions',
    support: '30 Days Priority Support',
    idealFor: 'Startups, Corporate Businesses, Clinics & Consultancies',
  },
  {
    id: 'premium-website',
    name: 'Premium Website',
    price: '₹24,999',
    priceSubtext: 'Starting price • Complete digital powerhouse',
    tagline: 'Complete digital powerhouse for e-commerce, schools, colleges, and custom portals.',
    recommended: false,
    features: [
      'Unlimited / Custom Web Pages & Portals',
      'E-commerce Store / School Portal / Custom Web App',
      'Payment Gateway Integration (UPI, Cards, NetBanking)',
      'Inquiry & Lead Management Database',
      'Admin Management Dashboard (Manage Content & Leads)',
      'Advanced AI-Enhanced Features & Automations',
      'Ultra-Fast Cloud CDN Hosting Configuration',
      'Priority Turnaround (7 - 10 Days)',
      '60 Days Dedicated Support & Maintenance',
    ],
    deliveryTime: '7 - 10 Days',
    revisions: 'VIP Collaborative Revisions',
    support: '60 Days Dedicated Support',
    idealFor: 'Schools & Colleges, E-commerce, High-Volume Businesses',
  },
];

export const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'sample-1',
    name: 'Rohan Sharma',
    role: 'Founder',
    company: 'Apex Retail Solutions',
    content:
      'Avinash built our corporate website from scratch. The mobile responsiveness and the direct WhatsApp enquiry integration brought us over 30 new business leads in the very first month. Highly recommended developer!',
    rating: 5,
    projectType: 'Business Website',
    isSample: true,
    date: 'Recent Sample Review',
  },
  {
    id: 'sample-2',
    name: 'Pooja Verma',
    role: 'Principal / Administrator',
    company: 'Bright Future Academy',
    content:
      'We needed an updated school portal with online admission forms and a notice board. Avinash delivered ahead of schedule and explained how to update notices effortlessly. Very patient and professional.',
    rating: 5,
    projectType: 'School & College Portal',
    isSample: true,
    date: 'Recent Sample Review',
  },
  {
    id: 'sample-3',
    name: 'Amitabh Sen',
    role: 'Independent Advocate & Legal Consultant',
    company: 'Sen Legal Associates',
    content:
      'The portfolio website Avinash designed for my legal practice looks classy, trustworthy, and premium. Clients regularly compliment the clean dark aesthetic and easy consultation booking.',
    rating: 5,
    projectType: 'Portfolio Website',
    isSample: true,
    date: 'Recent Sample Review',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-pricing',
    question: 'How much does a website cost, and how is pricing determined?',
    answer:
      'Pricing is tailored transparently to your exact requirements—such as the number of pages, custom features, payment gateway integration, or content management needs. Rather than charging rigid agency overhead, I offer competitive freelance rates. Click "Contact for Price" or ping me on WhatsApp for a quick, no-obligation custom quote within minutes!',
    category: 'Pricing',
  },
  {
    id: 'faq-delivery',
    question: 'What is the turnaround time for website completion?',
    answer:
      'A basic or landing page website typically takes 3 to 4 business days. A complete professional business website takes 5 to 7 days, and complex e-commerce or institutional portals take about 7 to 10 days. By utilizing AI-assisted development workflows (ChatGPT & Gemini), I deliver projects twice as fast without compromising quality.',
    category: 'Delivery',
  },
  {
    id: 'faq-domain-hosting',
    question: 'Do I need to buy domain and hosting beforehand?',
    answer:
      'You can either purchase them yourself (such as on Hostinger, GoDaddy, or Namecheap) or I can guide you through selecting the most cost-effective, high-speed hosting and domain name. I will handle all the technical DNS connections, SSL certificate setups, and deployment for you from start to finish.',
    category: 'Domain & Hosting',
  },
  {
    id: 'faq-maintenance',
    question: 'Do you provide maintenance and updates after the website is launched?',
    answer:
      'Yes, absolutely! Every package comes with free post-launch support (ranging from 15 to 60 days) to fix any bugs, make minor content adjustments, and ensure everything runs smoothly. I also provide flexible monthly maintenance packages for ongoing updates, backups, and security checks.',
    category: 'Maintenance',
  },
  {
    id: 'faq-payment',
    question: 'What is the payment process and terms?',
    answer:
      'To ensure mutual trust and confidence, payment is divided into milestone stages: typically a 40% initial deposit upon project kick-off and wireframe approval, 40% upon presenting the working demo site on a live staging link, and the final 20% once everything is fully approved and ready to go live on your custom domain. Payments are accepted via UPI, Google Pay, PhonePe, Bank Transfer, or Cards.',
    category: 'Payment',
  },
  {
    id: 'faq-mobile',
    question: 'Will my website work perfectly on mobile phones and tablets?',
    answer:
      '100% guaranteed. Mobile-first design is standard in all my projects. Your site will automatically adapt to screens of any size—smartphones, iPads, laptops, and ultra-wide desktop monitors—with fast-loading images and easy-to-tap buttons.',
    category: 'Delivery',
  },
];
