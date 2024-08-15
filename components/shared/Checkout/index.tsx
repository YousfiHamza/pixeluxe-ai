'use client';

import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

import { checkoutCredits } from '@/lib/actions/transaction.action';

const Checkout = ({
  plan,
  amount,
  credits,
  buyerId,
}: {
  plan: string;
  amount: number;
  credits: number;
  buyerId: string;
}) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }, []);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      toast({
        title: 'Order placed!',
        description: 'You will receive an email confirmation',
        duration: 5000,
        className: 'success-toast',
      });
    }

    if (query.get('canceled')) {
      toast({
        title: 'Order canceled!',
        description: "Continue to shop around and checkout when you're ready",
        duration: 5000,
        className: 'error-toast',
      });
    }
  }, []);

  const onCheckout = async () => {
    setLoading(true);
    const transaction = {
      plan,
      amount,
      credits,
      buyerId,
    };

    await checkoutCredits(transaction);
    setLoading(true);
  };

  return (
    <form action={onCheckout} method="POST" className="flex-1">
      <section>
        <Button
          disabled={loading}
          type="submit"
          role="link"
          className="button w-full rounded-full bg-purple-gradient bg-cover text-slate-100 hover:opacity-75 disabled:cursor-not-allowed"
        >
          Proceed To Checkout
        </Button>
      </section>
    </form>
  );
};

export default Checkout;
