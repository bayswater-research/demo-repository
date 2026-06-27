import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

interface Member {
  login: string;
  avatar_url: string;
  html_url: string;
}

export const dynamic = 'force-static'; // Static export compatible

async function getOrgRepos(): Promise<Repo[]> {
  try {
    const res = await fetch('https://api.github.com/orgs/bayswater-research/repos?per_page=20&sort=updated', {
      next: { revalidate: 3600 }, // cache for 1 hour
    });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

async function getOrgMembers(): Promise<Member[]> {
  try {
    const res = await fetch('https://api.github.com/orgs/bayswater-research/members?per_page=20', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export default async function Home() {
  const [repos, members] = await Promise.all([
    getOrgRepos(),
    getOrgMembers(),
  ]);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection repos={repos} />
      <TeamSection members={members} />
      <Footer />
    </main>
  );
}
