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

export const FirstTimeModal = ({ clerkId }: { clerkId: string }) => {
  const router = useRouter();

  const handleConsent = () => {
    updateFirstTimeConsent(clerkId);
  };

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent
        className="bg-slate-200"
        onCloseAutoFocus={() => handleConsent()}
      >
        <AlertDialogHeader>
          <div className="flex-between">
            <p className="sm:h2-bold text-theme-200 font-inter text-xl font-bold italic">
              Limited Credits
            </p>
            <AlertDialogCancel className="m-0 h-6 w-6 rounded-full border-0 bg-transparent p-0 hover:bg-red-500">
              <XIcon className="text-theme-100 hover:text-white" />
            </AlertDialogCancel>
          </div>
          <div className="rounded-lg bg-banner bg-cover bg-no-repeat p-6 contrast-125">
            <h1 className="home-heading font-poppins text-6xl font-bold text-white text-shadow-lg">
              Welcome !
            </h1>
          </div>

          <AlertDialogTitle className="p-24-medium text-dark-600">
            You Only Have <span className="font-bold">6 Free Coins</span>,
            Please Use them wisely 😅 . . .
          </AlertDialogTitle>

          <AlertDialogDescription className="p-16-regular italic">
            No worries, though - you can keep enjoying our services by grabbing
            more credits.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="button w-full bg-slate-100 text-dark-400 hover:bg-white hover:text-dark-500 dark:border-transparent">
            I understand
          </AlertDialogCancel>
          <AlertDialogAction
            className="button w-full bg-purple-gradient bg-cover text-slate-200 hover:opacity-80"
            onClick={() => {
              router.push('/dashboard/credits');
            }}
          >
            Buy Credits
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
