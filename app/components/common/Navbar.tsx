import { ButtonLink } from '@/components/ui/ButtonLink';
import SmallLogo from '@/public/origindev-logo-sm.svg';
import LargeLogo from '@/public/origindev-logo.svg';
import { ReaderIcon } from '@radix-ui/react-icons';
import { CodeIcon, Handshake, HomeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith('/blog');

  return (
    <nav
      className="w-full flex items-center justify-between mx-auto"
      aria-label="Main navigation"
    >
      <Link
        href="/"
        className="font-bold text-3xl bg-black dark:bg-transparent dark:text-stone-200 text-stone-100 focus:outline-none"
        aria-label="Homepage"
      >
        <div className="hidden sm:block">
          <Image
            src={LargeLogo}
            alt="Origin Dev Large Logo"
            height={32}
            priority
          />
        </div>
        <div className="block sm:hidden">
          <Image
            src={SmallLogo}
            alt="Origin Dev Small Logo"
            height={48}
            priority
          />
        </div>
      </Link>
      <div className="flex items-center">
        {isBlogPage && <ModeToggle aria-label="Toggle Dark Mode" />}
        <ButtonLink
          className="mx-4"
          tooltip="Home"
          aria-label="Home"
          href="/"
          icon={<HomeIcon />}
        />
        <ButtonLink
          className="mr-4"
          tooltip="Portfolio"
          aria-label="Portfolio"
          href="/projects"
          icon={<CodeIcon />}
        />
        <ButtonLink
          className="mr-4"
          tooltip="Blog Posts"
          aria-label="Blog Posts"
          href="/blog"
          icon={<ReaderIcon />}
        />
        <ButtonLink
          tooltip="Contact Us"
          aria-label="Contact Us"
          href="/contact"
          icon={<Handshake />}
        />
      </div>
    </nav>
  );
}
