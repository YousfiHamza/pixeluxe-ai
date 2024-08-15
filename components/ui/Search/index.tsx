'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';

import LoadingSVG from '@/public/assets/icons/loading.svg';
import SearchSVG from '@/public/assets/icons/search.svg';

export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setQuery(e.target.value);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        const newUrl = formUrlQuery({
          searchParams: searchParams.toString(),
          key: 'query',
          value: query,
        });

        router.push(newUrl, { scroll: false });
      } else {
        const newUrl = removeKeysFromQuery({
          searchParams: searchParams.toString(),
          keysToRemove: ['query'],
        });

        router.push(newUrl, { scroll: false });
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [router, searchParams, query]);

  return (
    <div>
      <div className="search">
        <div className="icon h-6 w-6">
          {loading ? (
            <div className="h-full w-full animate-spin">
              <Loader2Icon />
            </div>
          ) : (
            <SearchSVG />
          )}
        </div>

        <Input
          className="search-field"
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
      <p className="text-right text-[11px]">
        (search by the Image Content or by the Title)
      </p>
    </div>
  );
};
