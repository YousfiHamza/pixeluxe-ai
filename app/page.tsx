import { Button } from '@/components/ui/CustomButton';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-theme flex min-h-screen">
      Hello from Pixeluxe.Ai !
      <SignedOut>
        <Button asChild className="button bg-purple-gradient bg-cover">
          <Link href="/auth/sign-in">Login</Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <Button asChild className="button bg-purple-gradient bg-cover">
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </SignedIn>
    </main>
  );
}
