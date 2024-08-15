'use client';

import { use, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { StripeCardModal } from '.';

import { StripeCardModalProps } from './types';

export function CardModalButton({ plan, buyerId }: StripeCardModalProps) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      {showModal && (
        <StripeCardModal
          handleShowModal={handleShowModal}
          plan={plan}
          buyerId={buyerId}
        />
      )}
      <Button
        onClick={handleShowModal}
        role="link"
        className="w-full rounded-full bg-purple-gradient bg-cover text-slate-100 hover:opacity-75 disabled:cursor-not-allowed"
      >
        Buy Credits
      </Button>
    </>
  );
}
