import { 
  MdCampaign, 
  MdBrush, 
  MdTrendingUp, 
  MdGroups, 
  MdLanguage, 
  MdAdsClick 
} from 'react-icons/md'

export const services = [
  {
    id: 1,
    icon: MdCampaign,
    title: 'Stratégie de Communication',
    shortDescription: 'Des stratégies sur mesure pour atteindre vos objectifs.',
    fullDescription: 'Nous élaborons des stratégies de communication personnalisées qui alignent votre message avec vos objectifs business. Notre approche analytique garantit des résultats mesurables.',
    problem: 'Votre message ne passe pas ou manque de cohérence ?',
    solution: 'Nous analysons votre marché, définissons votre positionnement et créons un plan de communication efficace et cohérent.',
    benefits: [
      'Message clair et impactant',
      'Cohérence sur tous les canaux',
      'ROI mesurable et optimisé',
      'Positionnement différenciant'
    ],
    features: [
      'Audit de communication',
      'Étude de marché',
      'Plan de communication',
      'Accompagnement stratégique'
    ]
  },
  {
    id: 2,
    icon: MdBrush,
    title: 'Branding & Identité Visuelle',
    shortDescription: 'Une identité unique qui vous distingue.',
    fullDescription: 'Créez une marque mémorable avec une identité visuelle forte. Du logo à la charte graphique complète, nous donnons vie à votre vision.',
    problem: 'Votre image ne reflète pas votre professionnalisme ?',
    solution: 'Nous créons une identité visuelle complète et cohérente qui renforce votre crédibilité et votre reconnaissance.',
    benefits: [
      'Image professionnelle',
      'Reconnaissance immédiate',
      'Cohérence visuelle totale',
      'Différenciation concurrentielle'
    ],
    features: [
      'Création de logo',
      'Charte graphique',
      'Supports print & digital',
      'Guidelines de marque'
    ]
  },
  {
    id: 3,
    icon: MdTrendingUp,
    title: 'Marketing Digital',
    shortDescription: 'Boostez votre présence en ligne.',
    fullDescription: 'Développez votre visibilité digitale avec des stratégies de marketing performantes. SEO, content marketing, email marketing - nous couvrons tous les leviers.',
    problem: 'Votre présence digitale ne génère pas de résultats ?',
    solution: 'Nous déployons des campagnes SEO, SEA, content marketing optimisées pour maximiser votre visibilité et vos conversions.',
    benefits: [
      'Visibilité accrue',
      'Trafic qualifié',
      'Conversions optimisées',
      'Croissance durable'
    ],
    features: [
      'SEO & Référencement',
      'Content Marketing',
      'Email Marketing',
      'Analytics & Reporting'
    ]
  },
  {
    id: 4,
    icon: MdGroups,
    title: 'Community Management',
    shortDescription: 'Animez et engagez votre communauté.',
    fullDescription: 'Créez une communauté engagée autour de votre marque. Nous gérons vos réseaux sociaux avec du contenu créatif et une stratégie éditoriale efficace.',
    problem: 'Vos réseaux sociaux ne génèrent pas d\'engagement ?',
    solution: 'Nous créons et animons vos communautés avec du contenu engageant et une stratégie éditoriale adaptée à chaque plateforme.',
    benefits: [
      'Communauté engagée',
      'Contenu régulier et créatif',
      'Image de marque renforcée',
      'Relation client améliorée'
    ],
    features: [
      'Stratégie social media',
      'Création de contenu',
      'Animation quotidienne',
      'Reporting mensuel'
    ]
  },
  {
    id: 5,
    icon: MdLanguage,
    title: 'Création de Sites Web',
    shortDescription: 'Des sites modernes qui convertissent.',
    fullDescription: 'Nous concevons des sites web performants, ergonomiques et optimisés pour offrir la meilleure expérience utilisateur et maximiser vos conversions.',
    problem: 'Votre site web ne convertit pas ou est obsolète ?',
    solution: 'Nous concevons des sites web modernes, responsives et optimisés SEO qui transforment vos visiteurs en clients.',
    benefits: [
      'Design moderne et unique',
      'Expérience utilisateur optimale',
      'Performance garantie',
      'Optimisé pour le SEO'
    ],
    features: [
      'Sites vitrines',
      'Sites e-commerce',
      'Applications web',
      'Maintenance & support'
    ]
  },
  {
    id: 6,
    icon: MdAdsClick,
    title: 'Publicité Digitale',
    shortDescription: 'Maximisez votre ROI publicitaire.',
    fullDescription: 'Créez des campagnes publicitaires ciblées sur Google, Facebook, Instagram et LinkedIn. Nous optimisons chaque euro investi pour maximiser votre retour.',
    problem: 'Vos campagnes publicitaires ne sont pas rentables ?',
    solution: 'Nous créons et optimisons vos campagnes avec un ciblage précis et une optimisation continue pour maximiser votre ROI.',
    benefits: [
      'Ciblage précis',
      'Budget optimisé',
      'Résultats mesurables',
      'ROI maximisé'
    ],
    features: [
      'Google Ads',
      'Facebook & Instagram Ads',
      'LinkedIn Ads',
      'Retargeting'
    ]
  }
]

export default services