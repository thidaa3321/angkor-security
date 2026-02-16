import type { Service, VulnDemo, TeamMember, FAQ, PricingTier } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'blackbox',
    icon: '⬛',
    name: 'Black Box',
    tagline: 'External Attacker Simulation',
    price: '$800',
    hours: '10–12 hrs',
    reportPages: '12–15 pages',
    color: '#60a5fa',
    features: [
      'Real-world attacker simulation',
      'No source code access required',
      'OWASP Top 10 full coverage',
      'Authentication & session testing',
      'API endpoint enumeration',
      '1-week post-delivery support',
    ],
    tools: ['Burp Suite', 'OWASP ZAP', 'SQLMap', 'Nuclei'],
  },
  {
    id: 'whitebox',
    icon: '⬜',
    name: 'White Box',
    tagline: 'Deep Code & Architecture Review',
    price: '$1,200',
    hours: '15–18 hrs',
    reportPages: '20–25 pages',
    color: '#FF6B00',
    features: [
      'Full source code access',
      'Static analysis with SonarQube',
      'Architecture & design review',
      'Dependency vulnerability audit',
      'Hardcoded secrets detection',
      'Code-level remediation notes',
    ],
    tools: ['SonarQube', 'Semgrep', 'ESLint', 'Trivy'],
    featured: true,
  },
  {
    id: 'greybox',
    icon: '▩',
    name: 'Grey Box',
    tagline: 'Balanced Depth + Speed',
    price: '$1,000',
    hours: '18–22 hrs',
    reportPages: '25–30 pages',
    color: '#a78bfa',
    features: [
      'Limited access / low-priv user',
      'Auth & access control focus',
      'Business logic testing',
      'One free re-test (critical only)',
      '2-week async consultation',
      'Compliance gap analysis',
    ],
    tools: ['Burp Suite', 'SonarQube', 'jwt_tool', 'Postman'],
  },
]

export const VULN_DEMOS: VulnDemo[] = [
  {
    name: 'SQL Injection',
    severity: 'CRITICAL',
    color: '#ef4444',
    code: `// Vulnerable endpoint (sim app — never do this)
app.get('/api/products', (req, res) => {
  const query = \`
    SELECT * FROM products
    WHERE name = '\${req.query.search}'
  \`
  // ↑ Direct string interpolation — attacker controlled!
  db.query(query, callback)
})

// Payload: search=' OR '1'='1
// Result:  Entire products table dumped`,
    fix: "Use parameterized queries:\ndb.query('SELECT * FROM products WHERE name = ?', [req.query.search])",
  },
  {
    name: 'Broken Auth (JWT)',
    severity: 'HIGH',
    color: '#f97316',
    code: `// Weak JWT implementation (sim app)
const token = jwt.sign(
  { userId: user.id, role: user.role },
  'secret123',     // ← Weak, guessable secret
  // Missing: { expiresIn: '1h' }
)

// Vulnerabilities:
// 1. Token never expires → stolen = permanent access
// 2. Weak secret → brute-forceable offline
// 3. No alg validation → alg:none bypass possible`,
    fix: 'jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h", algorithm: "HS256" })\n// Use a 256-bit random secret from env vars',
  },
  {
    name: 'IDOR',
    severity: 'HIGH',
    color: '#f97316',
    code: `// No ownership check (sim app)
app.get('/api/orders/:id', async (req, res) => {
  const order = await Order.findById(req.params.id)
  // ↑ Never checks if order belongs to current user!
  res.json(order)
})

// Attack: enumerate order IDs 1, 2, 3...
// Result: Access any user's order data`,
    fix: 'const order = await Order.findOne({ _id: req.params.id, userId: req.user.id })\nif (!order) return res.status(403).json({ error: "Forbidden" })',
  },
  {
    name: 'XXE Injection',
    severity: 'CRITICAL',
    color: '#ef4444',
    code: `// Unsafe XML parser (sim app — product import)
const parser = new XMLParser({
  allowDtd: true,        // Dangerous!
  resolveEntities: true  // Allows external entities
})

// Attack payload in uploaded XML:
// <!DOCTYPE foo [
//   <!ENTITY xxe SYSTEM "file:///etc/passwd">
// ]>
// <product><name>&xxe;</name></product>
// Result: Server reads /etc/passwd into response`,
    fix: 'const parser = new XMLParser({ allowDtd: false, resolveEntities: false })\n// Or use a safe alternative: fast-xml-parser with default config',
  },
]

export const ONE_TIME_PRICING: PricingTier[] = [
  {
    name: 'Black Box',
    price: 800,
    unit: 'per engagement',
    volume: '25–40 projects/year',
    color: '#60a5fa',
    items: ['~10–12 hrs testing', 'OWASP Top 10 focus', '12–15 page report', '1-week email support'],
  },
  {
    name: 'Grey Box',
    price: 1000,
    unit: 'per engagement',
    volume: '20–30 projects/year',
    color: '#FF6B00',
    featured: true,
    items: ['~18–22 hrs testing', 'Auth + business logic', '25–30 page report', 'One light re-test', '2-week async support'],
  },
  {
    name: 'White Box',
    price: 1200,
    unit: 'per engagement',
    volume: '15–20 projects/year',
    color: '#a78bfa',
    items: ['~15–18 hrs analysis', 'Full source code review', '20–25 page report', 'Code-level fixes', '2-week support'],
  },
]

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Heng Kimlong',
    role: 'Team Leader & R&D',
    id: 'IDTB100076',
    specializations: ['Web Application Security', 'Post-Exploitation', 'Internal Tooling'],
    icon: '🎯',
  },
  {
    name: 'Thay Bunleap',
    role: 'Technical Lead',
    id: 'IDTB100015',
    specializations: ['Secure Code Review', 'White Box Testing', 'Backend Dev'],
    icon: '⚙️',
  },
  {
    name: 'Chhoun Nara',
    role: 'Security Analyst',
    id: 'IDTB100044',
    specializations: ['Black Box Testing', 'Vulnerability Assessment', 'OWASP'],
    icon: '🔍',
  },
  {
    name: 'Sok Sovannara',
    role: 'Infrastructure Manager',
    id: 'IDTB',
    specializations: ['CI/CD', 'Cloud Deployment', 'AI Integration'],
    icon: '☁️',
  },
  {
    name: 'Luch Thida',
    role: 'UX/UI & System Dev',
    id: 'IDTB100005',
    specializations: ['Client-Side Security', 'Modern Web Design', 'UX Research'],
    icon: '🎨',
  },
]

export const FAQS: FAQ[] = [
  {
    question: 'Do you test production systems?',
    answer:
      'Never. All testing is conducted in dedicated staging or sandbox environments. We obtain explicit written permission and sign mutual NDAs before any engagement begins. Scoping is always agreed in writing.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Standard engagements deliver final reports within 10 business days from kickoff. Critical vulnerabilities are reported immediately upon discovery — we never wait until the final report to disclose a high-severity finding.',
  },
  {
    question: 'What does a penetration test report include?',
    answer:
      'Executive summary for non-technical stakeholders, detailed vulnerability findings with CVSS v3.1 scores and CWE identifiers, proof-of-concept screenshots, step-by-step reproduction instructions, and prioritized remediation recommendations aligned to OWASP and PCI DSS.',
  },
  {
    question: 'Can you help us fix the vulnerabilities you find?',
    answer:
      'Yes — remediation assistance is available at $75/hour. White box reports include code-level secure examples, and all packages include a post-delivery support period for follow-up questions.',
  },
  {
    question: 'Are you qualified to issue compliance documentation?',
    answer:
      'Our reports align with PCI DSS Requirement 11.3 and OWASP Testing Guide v4.2. All findings are mapped to CWE identifiers and CVSS v3.1 scores, suitable for investor due diligence and regulatory submissions in Cambodia and regionally.',
  },
  {
    question: 'What is your startup / university discount?',
    answer:
      'Early-stage startups (pre-seed to Series A) and university projects receive a 10% discount on any engagement. Bundle two or more tests in the same year for an additional 10% off. Referrals earn $75 credit per successful new client.',
  },
]

export const TERMINAL_LINES: string[] = [
  'angkor-security --scan api.target.com',
  'Enumerating endpoints... 47 found',
  'Testing OWASP Top 10 vulnerabilities...',
  '[CRITICAL] SQL Injection @ /api/products',
  '[HIGH]     Broken Auth  @ /api/users/login',
  '[HIGH]     IDOR         @ /api/orders/{id}',
  '[MEDIUM]   CORS Misconfiguration detected',
  'Generating professional report... Done ✓',
  'Delivering findings within 10 days',
]

export const NAV_ITEMS = ['home', 'services', 'demo', 'pricing', 'team', 'contact'] as const
