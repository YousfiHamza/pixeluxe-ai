'use client';

import Image from 'next/image';
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

import { updateDemoOver } from '@/lib/actions/user.actions';
import { useEffect } from 'react';

export const InsufficientCreditsModal = ({ clerkId }: { clerkId: string }) => {
  const router = useRouter();

  // This code will be executed to avoid users to buy new credits and use our services since we still on the demo
  useEffect(() => {
    updateDemoOver(clerkId);
  }, [clerkId]);

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
            <p className="h2-bold text-theme-200 font-inter">
              Insufficient Credits
            </p>
            <AlertDialogCancel
              onClick={e => {
                e.preventDefault();
                router.push('/dashboard/profile');
              }}
              className="h-6 w-6 rounded-full border-0 bg-transparent p-0 hover:bg-red-500"
            >
              <XIcon className="text-theme-100 hover:text-white" />
            </AlertDialogCancel>
          </div>

          <Image
            src="/assets/images/stacked-coins.png"
            alt="credit coins"
            width={462}
            height={122}
          />

          <AlertDialogTitle className="p-24-bold text-dark-600">
            Oops.... Looks like you&#39;ve run out of free credits!
          </AlertDialogTitle>

          <AlertDialogDescription className="p-16-regular italic">
            No worries, though - you can keep enjoying our services by grabbing
            more credits.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="button w-full bg-slate-100 text-dark-400 hover:bg-white hover:text-dark-500 dark:border-transparent"
            onClick={e => {
              e.preventDefault();
              router.push('/dashboard/profile');
            }}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="button w-full bg-purple-gradient bg-cover text-slate-200 hover:opacity-80"
            onClick={e => {
              e.preventDefault();
              router.push('/dashboard/credits');
            }}
          >
            Buy Credit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
