'use client';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(255,255,255,0.06)] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
            <path d="M32 4L44 16L32 28L20 16L32 4Z" stroke="#4FC3F7" strokeWidth="1.5" fill="none" opacity="0.6"/>
            <path d="M32 28L44 40L32 52L20 40L32 28Z" stroke="#4FC3F7" strokeWidth="1.5" fill="none" opacity="0.6"/>
            <circle cx="32" cy="32" r="8" stroke="#00E5FF" strokeWidth="1" fill="none" opacity="0.3"/>
          </svg>
          <span className="text-sm text-[color:var(--text-secondary)]">
            Bayswater Research
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/bayswater-research"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--brand-primary)] transition-colors flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[color:var(--text-secondary)] opacity-50">
          &copy; {new Date().getFullYear()} Bayswater Research. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
