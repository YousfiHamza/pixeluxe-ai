'use client';

import { useRouter } from 'next/navigation';
import { XIcon } from 'lucide-react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { updateFirstTimeConsent } from '@/lib/actions/user.actions';
import Link from 'next/link';

export const DemoFinishModal = () => {
  const router = useRouter();

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent
        className="bg-slate-200"
        onEscapeKeyDown={e => {
          e.preventDefault();
          router.push('/dashboard');
        }}
      >
        <AlertDialogHeader>
          <div className="flex-between">
            <p className="sm:h3-bold text-theme-200 text-xl font-bold">
              Pixeluxe.Ai
            </p>
            <AlertDialogCancel
              onClick={e => {
                e.preventDefault();
                router.push('/dashboard');
              }}
              className="m-0 h-6 w-6 rounded-full border-0 bg-transparent p-0 hover:bg-red-500"
            >
              <XIcon className="text-theme-100 hover:text-white" />
            </AlertDialogCancel>
          </div>

          <div className="rounded-lg bg-banner bg-cover bg-no-repeat p-6 contrast-125">
            <h1 className="home-heading font-poppins text-6xl font-bold text-white text-shadow-lg">
              Play Time is Over
            </h1>
          </div>

          <AlertDialogTitle className="p-24-bold text-dark-600">
            Oops.... Looks like your demo session is finished!
          </AlertDialogTitle>

          <AlertDialogDescription className="p-16-regular italic">
            No worries, though - you can keep enjoying our services by simply
            asking the developer to unlock your account again!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="button w-full self-stretch bg-slate-100 text-dark-400 hover:bg-white hover:text-dark-500 dark:border-transparent"
            onClick={e => {
              e.preventDefault();
              router.push('/dashboard');
            }}
          >
            Close
          </AlertDialogCancel>
          <AlertDialogAction className="button w-full bg-purple-gradient bg-cover text-slate-200 hover:opacity-80">
            <Link href="https://www.linkedin.com/in/yousfihamza/">
              Contact Developer
            </Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
