import Image from 'next/image';
import { XIcon } from 'lucide-react';
import { SignedIn } from '@clerk/nextjs';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '@/components/ui/alert-dialog';
import Checkout from '@/components/shared/Checkout';

import { StripeCardModalProps } from './types';

export const StripeCardModal = ({
  plan,
  buyerId,
  handleShowModal,
}: StripeCardModalProps) => {
  return (
    handleShowModal && (
      <AlertDialog defaultOpen>
        <AlertDialogContent
          className="bg-slate-200"
          onCloseAutoFocus={() => handleShowModal()}
        >
          <AlertDialogHeader>
            <div className="flex-between">
              <p className="h2-bold text-theme-200">Use This Test Card:</p>
              <AlertDialogCancel className="h-6 w-6 rounded-full border-0 bg-transparent p-0 hover:bg-red-500">
                <XIcon className="text-theme-100 hover:text-white" />
              </AlertDialogCancel>
            </div>

            <Image
              src="/assets/images/card-info.png"
              alt="credit coins"
              width={462}
              height={122}
            />
          </AlertDialogHeader>
          <AlertDialogFooter className="flex">
            <AlertDialogCancel className="button w-full bg-slate-100 text-dark-400 hover:bg-white hover:text-dark-500 dark:border-transparent">
              Cancel
            </AlertDialogCancel>
            <SignedIn>
              <Checkout
                plan={plan.name}
                amount={plan.price}
                credits={plan.credits}
                buyerId={buyerId}
              />
            </SignedIn>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  );
};
