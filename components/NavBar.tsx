'use client';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pt-10 md:pt-20 relative">
      {/* Desktop */}
      <div className="hidden md:flex flex-row justify-center items-center gap-3">
        {links.map((link, i) => (
          <div key={link.href} className="flex items-center gap-3">
            {i !== 0 && <span className="text-2xl font-semibold relative">|</span>}
            <div className="flex items-center group">
              <h3 className="text-2xl font-semibold relative overflow-hidden">
                <a href={link.href}>{link.label}{""}</a>
                <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block
                bg-accent -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </h3>
            </div>
          </div>
        ))}
        <span className="text-2xl font-semibold relative">|</span>
        <div className="flex items-center group">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-4">
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="text-3xl text-foreground">
          {open ? <HiX /> : <HiMenu />}
        </button>
        <ThemeToggle />
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border border-border rounded-lg mt-2 flex flex-col items-center gap-4 py-6 z-50">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-xl font-semibold text-foreground hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;