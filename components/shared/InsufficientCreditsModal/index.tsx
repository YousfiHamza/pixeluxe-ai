'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
        onEscapeKeyDown={e => {
          e.preventDefault();
          router.push('/dashboard');
        }}
      >
        <AlertDialogHeader>
          <div className="flex-between">
            <p className="p-16-semibold text-dark-400">Insufficient Credits</p>
            <AlertDialogCancel
              className="border-0 p-0 hover:bg-transparent"
              onClick={e => {
                e.preventDefault();
                router.push('/dashboard/profile');
              }}
            >
              <Image
                src="/assets/icons/close.svg"
                alt="credit coins"
                width={24}
                height={24}
                className="cursor-pointer"
              />
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

          <AlertDialogDescription className="p-16-regular py-3">
            No worries, though - you can keep enjoying our services by grabbing
            more credits.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="button w-full bg-purple-100 text-dark-400"
            onClick={e => {
              e.preventDefault();
              router.push('/dashboard/profile');
            }}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="button w-full bg-purple-gradient bg-cover"
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
