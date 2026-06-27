'use client';

import { motion } from 'framer-motion';

interface Member {
  login: string;
  avatar_url: string;
  html_url: string;
}

// Fallback team data when GitHub API returns no public members
const fallbackMembers: Member[] = [];

export default function TeamSection({
  members,
}: {
  members: Member[];
}) {
  const displayMembers = members.length > 0 ? members : fallbackMembers;

  // If you have specific team members, uncomment and fill:
  // const hardcodedMembers: Member[] = [
  //   { login: 'username', avatar_url: 'https://avatars.githubusercontent.com/u/xxx?v=4', html_url: 'https://github.com/username' },
  // ];

  return (
    <section id="team" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Team</span>
          </h2>
          <p className="text-[color:var(--text-secondary)] max-w-xl mx-auto text-sm sm:text-base">
            The people behind Bayswater Research.
          </p>
        </motion.div>

        {displayMembers.length === 0 ? (
          <div className="glass-card p-8 sm:p-12 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-[rgba(79,195,247,0.1)] flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[color:var(--brand-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Team members are private</h3>
            <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed">
              Organisation members are currently not publicly listed on GitHub.
              <br />
              Check back later as the team grows.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {displayMembers.map((member, i) => (
              <motion.a
                key={member.login}
                href={member.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card p-4 text-center group"
              >
                <img
                  src={member.avatar_url}
                  alt={member.login}
                  className="w-16 h-16 rounded-full mx-auto mb-3 ring-2 ring-[rgba(79,195,247,0.15)] group-hover:ring-[rgba(79,195,247,0.4)] transition-all"
                />
                <p className="text-sm font-medium group-hover:text-[color:var(--brand-primary)] transition-colors">
                  @{member.login}
                </p>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
