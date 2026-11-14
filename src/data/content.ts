export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Digital Empowerment', href: '/digital-empowerment' },
  { label: 'Impact', href: '/impact' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
] as const

export const pageMeta = {
  home: {
    title: 'Ali Raza Foundation | Empowering Communities, One Life at a Time',
    description:
      'Ali Raza Foundation creates sustainable impact through education, health, digital empowerment, and community care.',
  },
  about: {
    title: 'About Ali Raza Foundation',
    description: 'Learn about the mission, values, and strategic pillars guiding Ali Raza Foundation.',
  },
  programs: {
    title: 'Programs',
    description: 'Explore the eight core programs focused on education, health, livelihoods, digital empowerment, and sustainability.',
  },
  flagship: {
    title: 'Ali Raza Mujtaba Digital Empowerment Program',
    description: 'A flagship digital literacy and skills initiative creating pathways for youth, women, and communities to learn and earn.',
  },
  'digital-empowerment': {
    title: 'Ali Raza Mujtaba Digital Empowerment Program',
    description: 'A flagship digital literacy and skills initiative creating pathways for youth, women, and communities to learn and earn.',
  },
  impact: {
    title: 'Impact & SDGs',
    description: 'Review our five-year goals and alignment with the Sustainable Development Goals.',
  },
  getInvolved: {
    title: 'Get Involved',
    description: 'Support our mission through donations, volunteering, sponsorships, and partnerships.',
  },
  'get-involved': {
    title: 'Get Involved',
    description: 'Support our mission through donations, volunteering, sponsorships, and partnerships.',
  },
  gallery: {
    title: 'Gallery & Stories',
    description: 'A glimpse into the communities, programs, and stories of change at Ali Raza Foundation.',
  },
  contact: {
    title: 'Contact Us',
    description: 'Get in touch with Ali Raza Foundation to learn more, collaborate, or support our mission.',
  },
} as const

export const trustStats = [
  { value: 5, suffix: 'k+', label: 'students supported through education and scholarships' },
  { value: 3, suffix: 'k+', label: 'youth trained in digital skills and technology' },
  { value: 1.5, suffix: 'k+', label: 'women empowered through entrepreneurship' },
  { value: 50, suffix: 'k+', label: 'trees planted to restore community spaces' },
] as const

export const homeHero = {
  eyebrow: 'Ali Raza Foundation',
  title: 'Empowering communities, one life at a time.',
  subtitle:
    'Empowering communities through education, health, technology, and sustainable development to create a more inclusive, resilient, and prosperous society.',
  primaryCta: 'Our Programs',
  secondaryCta: 'Donate Now',
  statChips: [
    { value: '5+ years', label: 'of community-focused service' },
    { value: '8', label: 'core programs' },
    { value: '10 SDGs', label: 'aligned priorities' },
  ],
  quote:
    'Whoever saves one life, it is as if he has saved all mankind.',
  quoteRef: "Surah Al-Ma'idah 5:32",
}

export const visionMission = {
  vision:
    'Empowering communities through education, health, technology, and sustainable development to create a more inclusive, resilient, and prosperous society.',
  mission:
    'To improve the quality of life of underprivileged communities by providing access to education, healthcare, digital empowerment, livelihood opportunities, and environmental sustainability initiatives.',
}

export const programsPreview = [
  {
    id: 'education',
    name: 'Education for All',
    summary: 'Scholarships and support for children and young learners to keep education accessible.',
    tag: 'SDG 4',
    icon: 'BookOpen',
    image: 'educationClassroom',
  },
  {
    id: 'health',
    name: 'Health & Wellbeing',
    summary: 'Health camps and care pathways that strengthen families and communities.',
    tag: 'SDG 3',
    icon: 'HeartPulse',
    image: 'medicalCamp',
  },
  {
    id: 'women',
    name: 'Women Empowerment',
    summary: 'Skills and entrepreneurship support designed for women and youth.',
    tag: 'SDG 5',
    icon: 'Users',
    image: 'womenLearning',
  },
  {
    id: 'technology',
    name: 'Youth Technology Academy',
    summary: 'IT, AI, cybersecurity, freelancing and coding programs for future-ready talent.',
    tag: 'SDG 4, 8',
    icon: 'Laptop2',
    image: 'youthCoding',
  },
  {
    id: 'livelihood',
    name: 'Livelihood Support',
    summary: 'Vocational grants and practical support that promote dignity and stability.',
    tag: 'SDG 1, 8',
    icon: 'BriefcaseBusiness',
    image: 'livelihoodWorkshop',
  },
  {
    id: 'environment',
    name: 'Environmental Stewardship',
    summary: 'Tree planting and eco-awareness to build healthier neighborhoods.',
    tag: 'SDG 6, 13, 15',
    icon: 'Leaf',
    image: 'treePlantation',
  },
  {
    id: 'food',
    name: 'Food Security Program',
    summary: 'Ration support and essential supplies for families facing hardship.',
    tag: 'SDG 2',
    icon: 'PackageOpen',
    image: 'foodDistribution',
  },
  {
    id: 'community-digital',
    name: 'Community Digital Trust Initiative',
    summary: 'Digital safety education to help communities navigate the online world safely.',
    tag: 'SDG 9',
    icon: 'ShieldCheck',
    image: 'digitalSafety',
  },
] as const

export const strategicPillars = [
  {
    title: 'Educate',
    description: 'Expanding access to quality learning, mentorship, and opportunities for disadvantaged children and youth.',
    theme: 'education',
  },
  {
    title: 'Empower',
    description: 'Helping women and young people gain practical skills, digital confidence, and economic agency.',
    theme: 'empowerment',
  },
  {
    title: 'Care',
    description: 'Providing medical outreach, wellness support, and compassionate services grounded in dignity.',
    theme: 'care',
  },
  {
    title: 'Sustain',
    description: 'Building resilient communities through livelihoods, environmental action, and long-term care.',
    theme: 'sustainability',
  },
] as const

export const impactGoals = [
  { value: 5000, label: 'students supported with scholarships', suffix: '+', description: '5-Year Goal' },
  { value: 3000, label: 'youth trained in digital skills', suffix: '+', description: '5-Year Goal' },
  { value: 1500, label: 'women empowered through entrepreneurship', suffix: '+', description: '5-Year Goal' },
  { value: 50000, label: 'trees planted', suffix: '+', description: '5-Year Goal' },
  { value: 25000, label: 'beneficiaries receiving healthcare services', suffix: '+', description: '5-Year Goal' },
  { value: 10, label: 'digital learning centers in underserved communities', suffix: '+', description: '5-Year Goal' },
] as const

export const sdgBadges = [
  'SDG 1',
  'SDG 2',
  'SDG 3',
  'SDG 4',
  'SDG 5',
  'SDG 6',
  'SDG 8',
  'SDG 9',
  'SDG 13',
  'SDG 15',
] as const

export const aboutStory =
  'Ali Raza Mujtaba Foundation exists to support communities with compassion, dignity, and practical action. Guided by care for people and stewardship of the environment, the foundation works across education, health, technology, livelihoods, and sustainability to help families and neighborhoods feel seen, supported, and empowered. The work is rooted in service, inclusion, and long-term community resilience.'

export const values = [
  {
    title: 'Compassion',
    text: 'Every initiative begins with empathy, respect, and a sincere commitment to uplifting lives with dignity.',
  },
  {
    title: 'Integrity',
    text: 'Trust is built through transparent action, ethical decision-making, and responsible stewardship of resources.',
  },
  {
    title: 'Inclusion',
    text: 'We work to ensure communities can access opportunity regardless of background, circumstance, or geography.',
  },
  {
    title: 'Sustainability',
    text: 'Our programs are designed to support families and neighborhoods over the long term, not just in the short term.',
  },
  {
    title: 'Innovation',
    text: 'We pair practical support with digital literacy, modern learning, and creative solutions for a changing world.',
  },
] as const

export const teamMembers = [
  { name: 'Trustee Name', role: 'Board Trustee' },
  { name: 'Trustee Name', role: 'Board Trustee' },
  { name: 'Trustee Name', role: 'Board Trustee' },
  { name: 'Trustee Name', role: 'Board Trustee' },
] as const

export const allPrograms = [
  {
    id: 'education',
    name: 'Education for All',
    image: 'educationClassroom',
    description:
      'We broaden access to education through scholarships, school support, and learner-focused guidance that keeps children engaged and encouraged to continue learning.',
    services: ['Scholarships', 'Education support'],
    sdg: ['SDG 4'],
  },
  {
    id: 'health',
    name: 'Health & Wellbeing',
    image: 'medicalCamp',
    description:
      'Our health initiatives include community medical camps, medicine support, maternal health awareness, and mental health assistance for families under stress.',
    services: ['Medical camps', 'Medicines', 'Maternal healthcare', 'Mental health support'],
    sdg: ['SDG 3'],
  },
  {
    id: 'women',
    name: 'Women Empowerment',
    image: 'womenLearning',
    description:
      'Women are supported through practical vocational training, digital learning, and enterprise pathways that build confidence, income, and leadership.',
    services: ['Vocational training', 'Digital skills', 'Entrepreneurship grants'],
    sdg: ['SDG 5'],
  },
  {
    id: 'technology',
    name: 'Youth Technology Academy',
    image: 'youthCoding',
    description:
      'Young people are equipped with digital and technical skills, from coding and AI literacy to freelancing readiness and cybersecurity awareness.',
    services: ['IT training', 'AI awareness', 'Cybersecurity', 'Freelancing and coding programs'],
    sdg: ['SDG 4', 'SDG 8'],
  },
  {
    id: 'livelihood',
    name: 'Livelihood Support',
    image: 'livelihoodWorkshop',
    description:
      'We create pathways for families to build stable incomes through tailored livelihood grants, vocational support, and practical enterprise guidance.',
    services: ['Vocational grants', 'Income support', 'Skill-to-work pathways'],
    sdg: ['SDG 1', 'SDG 8'],
  },
  {
    id: 'environment',
    name: 'Environmental Stewardship',
    image: 'treePlantation',
    description:
      'The foundation contributes to cleaner, greener, healthier communities through tree plantation campaigns and environmental education.',
    services: ['Tree plantations', 'Clean environment campaigns', 'Community stewardship'],
    sdg: ['SDG 6', 'SDG 13', 'SDG 15'],
  },
  {
    id: 'food',
    name: 'Food Security Program',
    image: 'foodDistribution',
    description:
      'Families facing financial strain receive essential food support and ration packages to ease immediate hardship and improve daily wellbeing.',
    services: ['Ration packages', 'Food support', 'Essential supplies'],
    sdg: ['SDG 2'],
  },
  {
    id: 'community-digital',
    name: 'Community Digital Trust Initiative',
    image: 'digitalSafety',
    description:
      'Communities are supported with digital safety education, privacy awareness, and practical guidance to reduce online fraud and misinformation.',
    services: ['Cyber safety', 'Privacy awareness', 'Online fraud prevention'],
    sdg: ['SDG 9'],
  },
] as const

export const flagshipInitiative = {
  title: 'Ali Raza Mujtaba Digital Empowerment Program',
  intro:
    'A flagship initiative designed to help underserved communities build digital confidence, practical skills, and pathways to online work and learning.',
  services: [
    'Cybersecurity awareness for schools',
    'Free IT and AI training for youth',
    'Women freelancing incubator',
    'Digital literacy for societies',
  ],
  sdg: ['SDG 4', 'SDG 5', 'SDG 8', 'SDG 9'],
  journey: ['Learn', 'Practice', 'Earn'],
}

export const waysToHelp = [
  'Donate',
  'Volunteer',
  'Sponsor a Student',
  'Corporate Partnership',
  'Spread the Word',
] as const

export const donationOptions = ['PKR 500', 'PKR 1,000', 'PKR 2,500', 'PKR 5,000', 'Custom'] as const

export const bankDetails = {
  accountTitle: 'Account Title',
  bank: 'Bank Name',
  iban: 'PK00AAAA0000000000000000',
  accountNo: '0000000000',
}

export const faqItems = [
  {
    question: 'How are donations used?',
    answer:
      'Funds are directed toward identified program priorities, including education access, healthcare outreach, skills programs, food support, and sustainability initiatives. Every contribution is managed with care and accountability.',
  },
  {
    question: 'Can I volunteer my time?',
    answer:
      'Yes. Volunteer opportunities are available in community outreach, events, mentoring, digital literacy sessions, and project support. We welcome local and remote support where possible.',
  },
  {
    question: 'Do you offer sponsorship opportunities?',
    answer:
      'Yes. Sponsorship possibilities can be tailored to education support, community health, livelihoods, and digital empowerment programs depending on the needs of the community.',
  },
  {
    question: 'Can organizations partner with the foundation?',
    answer:
      'We welcome institutional and corporate collaboration. Partnerships may take the form of program support, outreach coordination, funding, and volunteer engagement.',
  },
] as const

export const storyCards = [
  {
    title: 'A community learning hub',
    text: 'Local families found dignity and confidence through access to digital learning, mentorship, and peer support.',
  },
  {
    title: 'Health outreach in action',
    text: 'A neighborhood healthcare initiative brought essential guidance and care to families who needed trusted support most.',
  },
  {
    title: 'Women building futures',
    text: 'Skill-building and enterprise support opened new paths for women to learn, earn, and lead within their communities.',
  },
] as const

export const galleryItems = [
  { title: 'Classroom learning', category: 'Education', image: 'galleryClassroom' },
  { title: 'Medical outreach', category: 'Health', image: 'galleryMedical' },
  { title: 'Women in technology', category: 'Women', image: 'galleryWomenTech' },
  { title: 'Youth coding sessions', category: 'Technology', image: 'galleryCoding' },
  { title: 'Tree plantation drive', category: 'Environment', image: 'galleryPlantation' },
  { title: 'Food support distribution', category: 'Food', image: 'galleryFood' },
  { title: 'Community gathering', category: 'Education', image: 'galleryCommunity' },
  { title: 'Digital awareness workshop', category: 'Technology', image: 'galleryDigital' },
  { title: 'Women entrepreneurship', category: 'Women', image: 'galleryBusiness' },
  { title: 'Young learners studying together', category: 'Education', image: 'fieldEducation' },
  { title: 'Students at a local learning center', category: 'Education', image: 'fieldSchool' },
  { title: 'Young learners at school', category: 'Education', image: 'fieldStudents' },
  { title: 'Household essentials distribution', category: 'Food', image: 'fieldFoodRelief' },
  { title: 'Food support for local families', category: 'Food', image: 'fieldFoodReliefWide' },
  { title: 'Community blanket support', category: 'Community Support', image: 'fieldBlanketSupport' },
  { title: 'Families receiving essential supplies', category: 'Community Support', image: 'fieldBlanketDistribution' },
  { title: 'Sewing skills for home-based work', category: 'Livelihoods', image: 'fieldLivelihoodSewing' },
  { title: 'A community support visit', category: 'Community Support', image: 'fieldCommunityRelief' },
  { title: 'Sewing machine livelihood support', category: 'Livelihoods', image: 'fieldSewingSupport' },
  { title: 'Tools for a new livelihood', category: 'Livelihoods', image: 'fieldLivelihoodFamily' },
  { title: 'Sewing tools and materials', category: 'Livelihoods', image: 'fieldSewingCloseup' },
] as const

export const footerLinks = {
  quick: [
    { label: 'About', href: '/about' },
    { label: 'Programs', href: '/programs' },
    { label: 'Impact', href: '/impact' },
    { label: 'Get Involved', href: '/get-involved' },
  ],
  programs: [
    { label: 'Education', href: '/programs#education' },
    { label: 'Health', href: '/programs#health' },
    { label: 'Digital Empowerment', href: '/digital-empowerment' },
  ],
} as const

export const contactDetails = {
  address: 'PLACEHOLDER Address, Community Center, Lahore, Pakistan',
  phone: '+92 300 0000000',
  email: 'hello@armfoundation.org',
  hours: 'Mon - Sat: 9:00 AM - 6:00 PM',
}

export const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
] as const

export const marqueeItems = [
  'Education',
  'Health',
  'Women Empowerment',
  'Digital Skills',
  'Livelihoods',
  'Environment',
  'Food Security',
  'Community Care',
  'Digital Trust',
] as const

export const pageIntroBreadcrumbs = {
  about: 'About us',
  programs: 'Programs',
  flagship: 'Flagship initiative',
  'digital-empowerment': 'Digital empowerment',
  impact: 'Impact & SDGs',
  getInvolved: 'Get involved',
  'get-involved': 'Get involved',
  gallery: 'Gallery',
  contact: 'Contact',
} as const
