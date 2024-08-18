import Image from 'next/image';

import Header from '@/components/shared/Header';

import { plans } from '@/constants';

export default function CreditsLoadingPage() {
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
                <p className="absolute right-0 top-0 rounded-bl-[16px] rounded-tr-[16px] bg-red-500 p-4 text-xl font-medium italic text-slate-100 sm:-top-10 md:rounded-bl-none md:rounded-tl-[16px] md:rounded-tr-none md:p-2 lg:-top-11">
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
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
