import { SignedIn } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import Header from '@/components/shared/Header';
import { Button } from '@/components/ui/button';
import { CardModalButton } from '@/components/shared/Modals/StripeCardModal/CardModalButton';

import { plans } from '@/constants';
import { getUserById } from '@/lib/actions/user.actions';

const Credits = async () => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const user = await getUserById(userId);

  return (
    <>
      <Header
        title="Buy Credits"
        subtitle="Choose a credit package that suits your needs!"
        logo="/assets/icons/bag.svg"
      />

      <span className="text-sm font-thin italic">
        (Since its just a demo, you will need to use Stripe&apos;s test card for
        the checkout)
      </span>
      <section>
        <ul className="credits-list">
          {plans.map(plan => (
            <li key={plan.name} className="relative">
              {plan.isPopular && (
                <p className="top-00 absolute right-0 rounded-bl-[16px] rounded-tr-[16px] bg-red-500 p-4 text-xl font-medium italic text-slate-100 md:-top-10 md:rounded-bl-none md:rounded-tl-[16px] md:rounded-tr-none md:p-2">
                  Popular
                </p>
              )}

              <div
                className={`credits-item rounded-[16px] ${plan.isPopular ? 'border-4 border-red-500 md:rounded-tr-none' : 'border-2 border-purple-200/20'}`}
              >
                <div className="">
                  <div className="flex-center flex-col gap-1">
                    <Image src={plan.icon} alt="check" width={50} height={50} />
                    <p className="p-20-semibold text-purple-500">{plan.name}</p>
                    <p className="h1-semibold text-dark-600">${plan.price}</p>
                    <p className="p-16-regular">{plan.credits} Credits</p>
                  </div>
                  {/* Inclusions */}
                  <ul className="flex flex-col gap-4 py-8">
                    {plan.inclusions.map(inclusion => (
                      <li
                        key={plan.name + inclusion.label}
                        className="flex items-center gap-4"
                      >
                        <Image
                          src={`/assets/icons/${
                            inclusion.isIncluded ? 'check.svg' : 'cross.svg'
                          }`}
                          alt="check"
                          width={24}
                          height={24}
                        />
                        <p className="p-16-regular">{inclusion.label}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  {plan.name === 'Free' ? (
                    <Button disabled variant="outline" className="credits-btn">
                      Free Consumable
                    </Button>
                  ) : (
                    <CardModalButton plan={plan} buyerId={user._id} />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Credits;
