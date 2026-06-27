import { TeamMember, BayswaterStat } from "./types";

export const BAYSWATER_STATS: BayswaterStat[] = [
  {
    label: "Active Strategies",
    value: "14+",
    description: "Statistical arbitrage and systematic asset allocation models",
    iconName: "TrendingUp"
  },
  {
    label: "Execution Latency",
    value: "<12μs",
    description: "Tick-to-trade path optimized on lock-free direct memory layers",
    iconName: "Zap"
  },
  {
    label: "Proprietary Models",
    value: "100%",
    description: "Advanced self-developed risk and pricing indicators",
    iconName: "Activity"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Marcus Fei",
    role: "Chief Executive & Principal Researcher",
    bio: "Formerly Senior Quantitative Researcher at leading global hedge funds. Over 15 years of experience in market volatility modeling, asset dispersion, and multi-factor systematic arbitrage.",
    education: "PhD in Mathematical Finance, Imperial College London",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    specialty: "Volatility Regimes & Arbitrage Systems"
  },
  {
    id: 2,
    name: "Alexander Vance",
    role: "Head of Infrastructure & Core Engineering",
    bio: "Specialist in ultra-low latency execution architectures, kernel-bypass networking, and real-time exchange gateway connectors. Leads our core systems and trading engine infrastructure team.",
    education: "MSc in Computer Science, ETH Zürich",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    specialty: "Lock-Free Systems & Direct Market Access"
  },
  {
    id: 3,
    name: "Dr. Sarah Jenkins",
    role: "Director of Risk Management & Factor Research",
    bio: "Expert in multi-factor portfolio construction, high-dimensional statistical inference, and predictive risk indicators. Oversees factor-mining safety protocols and drift mitigation systems.",
    education: "PhD in Statistics, Oxford University",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    specialty: "Predictive Risk Indicators & Multi-Factor Optimization"
  }
];

export interface ApproachPillar {
  title: string;
  subtitle: string;
  description: string;
}

export const OUR_APPROACH: ApproachPillar[] = [
  {
    title: "Proven Statistical Methods",
    subtitle: "Mathematical Rigor",
    description: "We utilize rigorous backtested time-series models, Kalman filters, and cointegration testing to map subtle structural relationships across diverse global assets."
  },
  {
    title: "Advanced Self-Developed Models",
    subtitle: "Proprietary Alpha",
    description: "Our in-house mathematical research engines bypass generic APIs to execute custom predictive algorithms, designed for dynamic regime-switching environments."
  },
  {
    title: "Innovative Risk Control",
    subtitle: "Dynamic Mitigation",
    description: "We employ innovative real-time risk control indicators to actively monitor market anomalies, liquidity drawdowns, and systemic drift to ensure portfolio stability."
  }
];
