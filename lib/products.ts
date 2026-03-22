import {
  Calculator,
  PenTool,
  Brain,
  Map,
  Gamepad2,
  Palette,
  Globe,
  type LucideIcon,
} from 'lucide-react'

export type IconName = 'calculator' | 'pen-tool' | 'brain' | 'map' | 'gamepad' | 'palette' | 'globe'

export const iconMap: Record<IconName, LucideIcon> = {
  'calculator': Calculator,
  'pen-tool': PenTool,
  'brain': Brain,
  'map': Map,
  'gamepad': Gamepad2,
  'palette': Palette,
  'globe': Globe,
}

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  longDescription?: string
  icon: IconName
  href: string
  platforms: ('web' | 'ios' | 'android' | 'figma' | 'chrome')[]
  stats?: { label: string; value: string }[]
  features?: string[]
  color: string
}

export const products: Product[] = [
  {
    id: 'supersplit',
    name: 'Supersplit',
    tagline: 'Split expenses effortlessly',
    description: 'Effortlessly manage and split expenses with friends during your group travels.',
    longDescription: 'Supersplit makes group expense tracking simple and fair. Split bills, track shared expenses, and settle up with friends without the hassle.',
    icon: 'calculator',
    href: 'https://supersplit.app',
    platforms: ['android', 'ios', 'web'],
    stats: [
      { label: 'Users', value: '1K+' },
      { label: 'Rating', value: '4.8/5' },
    ],
    features: [
      'Smart expense splitting',
      'Multi-currency support',
      'Group trip management',
      'Receipt scanning',
      'Balance tracking',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'image2vector',
    name: 'Image2Vector',
    tagline: 'AI-powered image conversion',
    description: 'Transform your images into scalable vector graphics with our AI-powered conversion technology.',
    longDescription: 'Convert any raster image to clean, scalable vector graphics instantly. Perfect for designers, developers, and anyone who needs high-quality vectors.',
    icon: 'pen-tool',
    href: 'https://image2vector.app',
    platforms: ['web', 'figma'],
    stats: [
      { label: 'Users', value: '70K+' },
      { label: 'Conversions', value: '400K+' },
    ],
    features: [
      'AI-powered tracing',
      'Multiple output formats',
      'Batch processing',
      'Figma plugin',
      'High quality output',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'textgpt',
    name: 'TextGPT',
    tagline: 'AI-powered text assistant',
    description: 'Your Virtual Co-Pilot for Smarter Text Input in the Browser.',
    longDescription: 'TextGPT is a Chrome extension that brings ChatGPT-powered text assistance to any text field on the web. Write better, faster.',
    icon: 'brain',
    href: 'https://trytextgpt.vercel.app',
    platforms: ['chrome'],
    stats: [
      { label: 'Users', value: '400+' },
      { label: 'Product Hunt', value: '#9' },
    ],
    features: [
      'AI text generation',
      'Custom activation keyword',
      'OpenAI API integration',
      'Works on any website',
      'Privacy focused',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'mapmaker',
    name: 'MapMaker',
    tagline: 'Professional cartography toolkit',
    description: 'Create stunning, detailed maps with our professional cartography toolkit.',
    longDescription: 'MapMaker is a Figma plugin that helps designers create beautiful, customizable maps directly in their designs.',
    icon: 'map',
    href: 'https://www.figma.com/community/plugin/1349097926934489886',
    platforms: ['figma'],
    stats: [
      { label: 'Users', value: '20K+' },
    ],
    features: [
      'Custom map styles',
      'Multiple map providers',
      'Easy customization',
      'Export to any format',
      'Regular updates',
    ],
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'wordest',
    name: 'Wordest Game',
    tagline: 'Daily word puzzle',
    description: 'Challenge your vocabulary and have fun with our addictive word-guessing game.',
    longDescription: 'A daily word puzzle game that challenges your vocabulary. Come back every day for a new word, or play unlimited custom puzzles.',
    icon: 'gamepad',
    href: 'https://play.google.com/store/apps/details?id=com.adeelabs.wordest',
    platforms: ['android'],
    stats: [
      { label: 'Downloads', value: '2K+' },
    ],
    features: [
      'Daily challenges',
      'Unlimited custom puzzles',
      'Share results',
      'Offline play',
      'Minimal ads',
    ],
    color: 'from-red-500 to-rose-500',
  },
  {
    id: 'color-quest',
    name: 'Color Quest',
    tagline: 'Learn colors through play',
    description: 'An engaging platform where children learn colors through interactive games and activities.',
    longDescription: 'Color Quest is an educational game designed to help children learn and recognize colors through fun, interactive activities.',
    icon: 'palette',
    href: '#',
    platforms: ['android'],
    features: [
      'Interactive learning',
      'Fun activities',
      'Kid-friendly design',
      'Progress tracking',
      'No ads',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'translate-pro',
    name: 'Translate Pro',
    tagline: 'Break language barriers',
    description: 'Break language barriers instantly with our advanced neural machine translation system.',
    longDescription: 'Translate Pro is a Figma plugin that brings powerful translation capabilities directly into your design workflow.',
    icon: 'globe',
    href: 'https://www.figma.com/community/plugin/1374503029002387977',
    platforms: ['figma'],
    features: [
      'Neural translation',
      '100+ languages',
      'Context-aware',
      'Batch translation',
      'Design-friendly',
    ],
    color: 'from-teal-500 to-cyan-500',
  },
]

export const platformIcons: Record<string, string> = {
  web: 'Globe',
  ios: 'Apple',
  android: 'Smartphone',
  figma: 'Figma',
  chrome: 'Chrome',
}

export const clients = [
  { name: 'Cursor', domain: 'cursor.sh' },
  { name: 'Netflix', domain: 'netflix.com' },
  { name: 'Plaid', domain: 'plaid.com' },
  { name: 'Nokia', domain: 'nokia.com' },
  { name: 'Supreme', domain: 'supremenewyork.com' },
  { name: 'Loop Returns', domain: 'loop.com' },
  { name: 'Deloitte', domain: 'deloitte.com' },
  { name: 'NYU', domain: 'nyu.edu' },
  { name: 'G5', domain: 'g5.com' },
  { name: 'Anodot', domain: 'anodot.com' },
]
