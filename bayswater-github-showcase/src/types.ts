export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}

export interface GitHubMember {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  type: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  education: string;
  avatarUrl: string;
  specialty: string;
}

export interface BayswaterStat {
  label: string;
  value: string;
  description: string;
  iconName: "TrendingUp" | "Activity" | "Zap" | "Github";
}
