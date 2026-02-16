// ─── Contact Form ──────────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string
  email: string
  company: string
  service: string
  message: string
}

export type FormState = 'idle' | 'sending' | 'success' | 'error'

// ─── Services ──────────────────────────────────────────────────────────────────
export interface Service {
  id: 'blackbox' | 'whitebox' | 'greybox'
  icon: string
  name: string
  tagline: string
  price: string
  hours: string
  reportPages: string
  color: string
  features: string[]
  tools: string[]
  featured?: boolean
}

// ─── Pricing Tiers ────────────────────────────────────────────────────────────
export interface PricingTier {
  name: string
  price: number
  unit: string
  volume: string
  items: string[]
  color: string
  featured?: boolean
}

// ─── Vulnerability Demo ───────────────────────────────────────────────────────
export type Severity = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW'

export interface VulnDemo {
  name: string
  severity: Severity
  color: string
  code: string
  fix: string
}

// ─── Team Member ──────────────────────────────────────────────────────────────
export interface TeamMember {
  name: string
  role: string
  id: string
  specializations: string[]
  icon: string
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
export interface FAQ {
  question: string
  answer: string
}

// ─── Toast ────────────────────────────────────────────────────────────────────
export interface ToastData {
  message: string
  type: 'success' | 'error'
}

// ─── Navigation ───────────────────────────────────────────────────────────────
export type NavSection = 'home' | 'services' | 'demo' | 'pricing' | 'team' | 'contact'
