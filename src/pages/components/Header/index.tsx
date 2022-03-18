import Image from 'next/image';

export function Header() {
  return (
    <header>
      <div>
        <Image src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a href="">Home</a>
          <a href="">Posts</a>
        </nav>
      </div>
    </header>
  );
}
