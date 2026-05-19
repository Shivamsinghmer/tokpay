/* ────────────────────────────────────────────────────────────
   All user-facing copy and data for TokPay marketing site.
   Components import from here — no hardcoded strings in JSX.
──────────────────────────────────────────────────────────── */

// ─── Types ────────────────────────────────────────────────

export interface NavLink { label: string; href: string }

export interface FloatingTag {
  label: string
  status: 'live' | 'settled' | 'pending'
  delay: string
  pos: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
  icon: string
  prefix?: string
}

export interface PanelMetric {
  label: string
  value: string
  change?: string
  color?: string
}

export interface PanelTransaction {
  corridor: string
  amount: string
  status: string
  time: string
  color: string
}

export interface PlatformPanel {
  header: string
  metrics: PanelMetric[]
  transactions: PanelTransaction[]
}

export interface PlatformTab {
  number: string
  title: string
  description: string
  panel: PlatformPanel
}

export interface Feature { num: string; title: string; desc: string }

export interface CorridorGroup { group: string; color: string; items: string[] }

export interface UseCase { icon: string; title: string; desc: string }

export interface DigitalAsset {
  name: string
  symbol: string
  balance: string
  change: string
  up: boolean
  barWidth: number
}

export interface DigitalFeature { icon: string; title: string; desc: string }

export interface TreasuryFeature { num: string; title: string; desc: string }

export interface LiquidityProvider {
  name: string
  coverage: number
  status: 'optimal' | 'good' | 'available'
}

export interface DevFeature { num: string; title: string; desc: string }

export interface ComplianceRow { icon: string; title: string; desc: string }

// ─── Navbar ───────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: 'Infrastructure', href: '#platform' },
  { label: 'Use Cases',      href: '#use-cases' },
  { label: 'Corridors',      href: '#corridors' },
  { label: 'Developers',     href: '#developers' },
  { label: 'Company',        href: '#company' },
]

// ─── Hero ─────────────────────────────────────────────────

export const FLOATING_TAGS: FloatingTag[] = [
  { label: 'AED → USDC',     status: 'live',    delay: '0s',   pos: 'top-[58%] left-[8%]'   },
  { label: 'INR Settlement', status: 'settled', delay: '0.8s', pos: 'top-[45%] right-[6%]'  },
  { label: 'NGN Payout',     status: 'live',    delay: '1.4s', pos: 'top-[72%] left-[18%]'  },
  { label: 'KES Transfer',   status: 'pending', delay: '0.4s', pos: 'top-[38%] left-[5%]'   },
  { label: 'USD → USDT',     status: 'live',    delay: '1.8s', pos: 'top-[65%] right-[10%]' },
  { label: 'EUR Rails',      status: 'settled', delay: '1.1s', pos: 'top-[80%] right-[20%]' },
]

export const STATUS_COLORS: Record<string, string> = {
  live:    'bg-accent',
  settled: 'bg-emerald-400',
  pending: 'bg-yellow-400',
}

export const STATUS_TEXT_COLORS: Record<string, string> = {
  live:    'text-accent',
  settled: 'text-emerald-400',
  pending: 'text-yellow-400',
}

export const STATUS_LABELS: Record<string, string> = {
  live:    'Live',
  settled: 'Settled',
  pending: 'Pending',
}

// ─── StatsBar ─────────────────────────────────────────────

export const STATS: Stat[] = [
  { value: 12, suffix: '+',  label: 'Payment Corridors Active', icon: '🌐' },
  { value: 50, suffix: '+',  label: 'Enterprise Clients',       icon: '🏦' },
  { value: 6,  suffix: '',   label: 'Settlement Rails',         icon: '⚡' },
  { value: 1,  suffix: 'B+', label: 'Annual Volume Target',     icon: '📊', prefix: '$' },
]

// ─── PlatformOverview ─────────────────────────────────────

export const PLATFORM_TABS: PlatformTab[] = [
  {
    number: '01',
    title: 'Payment Orchestration',
    description: 'Route global payments across stablecoin and fiat rails.',
    panel: {
      header: 'Payment Operations',
      metrics: [
        { label: 'Settled Today',    value: '$2.4M', change: '+12%', color: 'text-emerald-400' },
        { label: 'Active Corridors', value: '12' },
        { label: 'Pending Payouts',  value: '$340K' },
      ],
      transactions: [
        { corridor: 'UAE → India',    amount: '$124,500', status: 'Settled',    time: '2 min ago',  color: 'bg-emerald-400' },
        { corridor: 'UAE → Nigeria',  amount: '$89,200',  status: 'Processing', time: '5 min ago',  color: 'bg-yellow-400' },
        { corridor: 'UAE → Thailand', amount: '$210,000', status: 'Settled',    time: '8 min ago',  color: 'bg-emerald-400' },
        { corridor: 'UAE → Kenya',    amount: '$45,800',  status: 'Settled',    time: '12 min ago', color: 'bg-emerald-400' },
      ],
    },
  },
  {
    number: '02',
    title: 'Treasury Management',
    description: 'Multi-currency treasury visibility across corridors.',
    panel: {
      header: 'Treasury Overview',
      metrics: [
        { label: 'Total AUM',    value: '$8.1M',  change: '+$420K', color: 'text-emerald-400' },
        { label: 'Currencies',   value: '6' },
        { label: 'Yield (30d)', value: '$12.4K',  change: '+8.2%',  color: 'text-emerald-400' },
      ],
      transactions: [
        { corridor: 'USDC Sweep',        amount: '$1,200,000', status: 'Completed', time: '10 min ago', color: 'bg-emerald-400' },
        { corridor: 'USD Treasury',      amount: '$3,400,000', status: 'Active',    time: 'Holding',    color: 'bg-accent'      },
        { corridor: 'USDT Yield Pool',   amount: '$580,000',   status: 'Earning',   time: '4.2% APY',   color: 'bg-emerald-400' },
        { corridor: 'AED → USDC',        amount: '$250,000',   status: 'Pending',   time: '3 min ago',  color: 'bg-yellow-400'  },
      ],
    },
  },
  {
    number: '03',
    title: 'Stablecoin Settlement',
    description: 'Move value globally with modern settlement rails.',
    panel: {
      header: 'Settlement Engine',
      metrics: [
        { label: 'Settled (24h)', value: '$5.2M',  change: '+18%',  color: 'text-emerald-400' },
        { label: 'Avg. Time',     value: '< 2 min' },
        { label: 'Success Rate',  value: '99.7%',  change: '+0.1%', color: 'text-emerald-400' },
      ],
      transactions: [
        { corridor: 'AED → USDC', amount: '$890,000',   status: 'Settled',    time: '1 min ago', color: 'bg-emerald-400' },
        { corridor: 'USDT → INR', amount: '$340,000',   status: 'Settled',    time: '4 min ago', color: 'bg-emerald-400' },
        { corridor: 'USD → USDC', amount: '$1,200,000', status: 'Processing', time: '7 min ago', color: 'bg-yellow-400'  },
        { corridor: 'USDC → KES', amount: '$78,500',    status: 'Settled',    time: '9 min ago', color: 'bg-emerald-400' },
      ],
    },
  },
  {
    number: '04',
    title: 'Liquidity Coordination',
    description: 'Connect to institutional liquidity and providers.',
    panel: {
      header: 'Liquidity Routing',
      metrics: [
        { label: 'Available',  value: '$48.2M', change: '+$2.1M', color: 'text-emerald-400' },
        { label: 'Providers',  value: '8' },
        { label: 'Avg Route',  value: '< 2 min' },
      ],
      transactions: [
        { corridor: 'Market Maker A', amount: '$22.4M', status: 'Optimal', time: '92% util',   color: 'bg-emerald-400' },
        { corridor: 'Reserve Pool',   amount: '$15.8M', status: 'Optimal', time: '100% avail', color: 'bg-emerald-400' },
        { corridor: 'Market Maker B', amount: '$9.8M',  status: 'Active',  time: '78% util',   color: 'bg-yellow-400'  },
        { corridor: 'Buffer Reserve', amount: '$2.1M',  status: 'Standby', time: 'On demand',  color: 'bg-text-muted'  },
      ],
    },
  },
]

// ─── PaymentsInfra ────────────────────────────────────────

export const PAYMENT_FEATURES: Feature[] = [
  { num: '01', title: 'Stablecoin Settlement',     desc: 'Move value globally using modern settlement rails.' },
  { num: '02', title: 'Treasury Movement',          desc: 'Manage multi-currency treasury operations across corridors.' },
  { num: '03', title: 'Vendor & Supplier Payments', desc: 'Enable faster payouts for global vendors and partners.' },
  { num: '04', title: 'Embedded Payment Flows',     desc: 'Integrate programmable payment infrastructure directly.' },
]

export const CORRIDOR_TAGS = ['AED', 'USDC', 'NGN', 'INR', 'KES', 'USD', 'EUR', 'USDT']

// ─── DigitalAssets ────────────────────────────────────────

export const DIGITAL_ASSETS: DigitalAsset[] = [
  { name: 'USDC', symbol: '$',   balance: '2,400,000', change: '+2.4%', up: true,  barWidth: 85 },
  { name: 'USDT', symbol: '$',   balance: '1,800,000', change: '+1.2%', up: true,  barWidth: 65 },
  { name: 'AED',  symbol: 'د.إ', balance: '3,500,000', change: '+0.8%', up: true,  barWidth: 42 },
  { name: 'ETH',  symbol: 'Ξ',   balance: '420.50',    change: '-1.1%', up: false, barWidth: 20 },
]

export const DIGITAL_FEATURES: DigitalFeature[] = [
  { icon: '💎', title: 'Stablecoin Wallets',    desc: 'Multi-asset custody with compliance-grade security and full audit trails.' },
  { icon: '🔁', title: 'Instant Conversion',    desc: 'Convert between stablecoins and fiat in real time across corridors.' },
  { icon: '🔐', title: 'Institutional Custody', desc: 'Secure digital asset storage with enterprise controls and insurance.' },
  { icon: '⛓️', title: 'Multi-Chain Support',   desc: 'Operate across networks without building separate integrations.' },
]

// ─── UseCasesGrid ─────────────────────────────────────────

export const USE_CASES: UseCase[] = [
  { icon: '🏢', title: 'B2B Payments',               desc: 'Move supplier and vendor payments globally with faster settlement.' },
  { icon: '🏦', title: 'Treasury Operations',         desc: 'Manage stablecoin balances and global payouts across entities.' },
  { icon: '🔄', title: 'Exchanges & Trading',         desc: 'Enable fiat and stablecoin settlement infrastructure.' },
  { icon: '🏛', title: 'Banks & Fintechs',            desc: 'Launch embedded payment and digital asset workflows.' },
  { icon: '👥', title: 'Payroll Infrastructure',      desc: 'Power contractor and employee payouts across borders.' },
  { icon: '🛒', title: 'Marketplaces',                desc: 'Enable global collections and merchant settlements.' },
  { icon: '⚡', title: 'Payment Service Providers',   desc: 'Add programmable global payment infrastructure.' },
  { icon: '💼', title: 'Corporate Treasury',          desc: 'Manage liquidity and cross-border treasury movement.' },
  { icon: '🌍', title: 'Remittance Infrastructure',   desc: 'Build modern payout experiences for global users.' },
]

// ─── Corridors ────────────────────────────────────────────

export const CORRIDOR_GROUPS: CorridorGroup[] = [
  { group: 'Current Focus', color: 'border-l-emerald-400', items: ['UAE → Africa', 'UAE → India', 'UAE → Southeast Asia'] },
  { group: 'Expanding',     color: 'border-l-yellow-400',  items: ['MENA', 'Additional African corridors'] },
  { group: 'Planned',       color: 'border-l-accent',      items: ['LATAM', 'Europe integrations'] },
]

// ─── TreasuryLiquidity ────────────────────────────────────

export const TREASURY_FEATURES: TreasuryFeature[] = [
  { num: '01', title: 'Multi-Currency Balances', desc: 'Manage AED, USD, USDC, USDT across entity structures in real time.' },
  { num: '02', title: 'Real-Time Visibility',    desc: 'Monitor treasury positions with live balance tracking and alerts.' },
  { num: '03', title: 'Automated Sweeping',      desc: 'Configure sweep rules to optimise idle balances automatically.' },
  { num: '04', title: 'Yield Management',        desc: 'Access institutional-grade yield on stablecoin treasury balances.' },
]

export const LIQUIDITY_PROVIDERS: LiquidityProvider[] = [
  { name: 'Market Maker Alpha', coverage: 92,  status: 'optimal'   },
  { name: 'Market Maker Beta',  coverage: 78,  status: 'good'      },
  { name: 'Reserve Pool',       coverage: 100, status: 'optimal'   },
]

export const PROVIDER_STATUS_COLORS: Record<string, string> = {
  optimal:   'text-emerald-400',
  good:      'text-yellow-400',
  available: 'text-text-muted',
}

// ─── ApiDevelopers ────────────────────────────────────────

export const DEV_FEATURES: DevFeature[] = [
  { num: '01', title: 'Modular API Design',        desc: 'Configure collections, payouts, FX, and settlement independently.' },
  { num: '02', title: 'Real-Time Event Streaming', desc: 'Stream transaction, settlement, and compliance events to your systems.' },
  { num: '03', title: 'Developer-First Docs',      desc: 'Clear API references and integration guides to go live fast.' },
  { num: '04', title: 'Sandbox Environment',       desc: 'Test everything before going live with production-like behaviour.' },
  { num: '05', title: 'Full Audit Traceability',   desc: 'Access detailed logs across every step of each transaction.' },
  { num: '06', title: 'Chain-Agnostic Routing',    desc: 'Route stablecoin transactions across networks without extra integrations.' },
]

export const API_MODULES = [
  'Payment APIs', 'Treasury APIs', 'Settlement APIs', 'Wallet Infrastructure',
  'Payout APIs', 'Liquidity Routing APIs', 'Compliance Workflows', 'Transaction Monitoring',
]

export const CODE_REQUEST = `POST /v1/payments/initiate
Authorization: Bearer tok_live_sk_xxxx

{
  "amount": 50000,
  "currency": "AED",
  "destination_currency": "INR",
  "corridor": "UAE-IN",
  "settlement_type": "stablecoin",
  "recipient": {
    "account_id": "acc_7x2k9m",
    "name": "Global Supplier Ltd."
  }
}`

export const CODE_RESPONSE = `HTTP 200 OK

{
  "payment_id": "pay_8f2a9c1d",
  "status": "processing",
  "estimated_settlement": "< 2 minutes",
  "corridor": "UAE-IN",
  "fx_rate": 22.84
}`

// ─── ComplianceSecurity ───────────────────────────────────

export const COMPLIANCE_ROWS: ComplianceRow[] = [
  {
    icon: '🔍',
    title: 'AML & KYC Workflows',
    desc: 'Automated screening and due diligence across all payment flows and counterparties.',
  },
  {
    icon: '📊',
    title: 'Regulatory Reporting',
    desc: 'Structured compliance exports aligned to regional regulatory requirements and standards.',
  },
  {
    icon: '🔔',
    title: 'Transaction Monitoring',
    desc: 'Real-time anomaly detection with configurable risk thresholds and escalation paths.',
  },
  {
    icon: '🔒',
    title: 'Data Privacy & Security',
    desc: 'Enterprise-grade encryption, data residency controls, and SOC 2 aligned infrastructure.',
  },
]

// ─── Footer ───────────────────────────────────────────────

export const FOOTER_LINKS: Record<string, string[]> = {
  Infrastructure: ['Payments', 'Treasury', 'Digital Assets', 'APIs', 'Corridors'],
  Company:        ['About', 'Careers', 'Newsroom', 'Contact'],
  Legal:          ['Privacy Policy', 'Terms', 'Compliance'],
}

export const FOOTER_LOCATIONS = ['🇦🇪 Dubai', '🇦🇪 Abu Dhabi', '🌍 Global Operations']
