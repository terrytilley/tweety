import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="Logo" width={32} height={32} />
    </Link>
  );
}
