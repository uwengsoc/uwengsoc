import Link from 'next/link';
import Image from 'next/image';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="border-b fixed top-0 left-0 right-0">
        <div className="flex h-16 items-center px-4">
          <Image
            src="/logo.png"
            alt="University of Waterloo EngSoc Logo"
            width={40}
            height={40}
          />
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Events
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Resources
            </Link>
            <Link
              href="/examples/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              News
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4"></div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
}
