import clsx from 'clsx';

export function ButtonLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={clsx(
        'relative inline-flex h-fit w-fit rounded-full border border-purple-800 bg-purple-500/10 px-4 py-2 text-2xl text-purple-700/75 outline-none ring-purple-300 transition-all after:absolute after:inset-0 after:-z-10 after:animate-pulse after:rounded-full after:bg-purple-400 after:bg-opacity-0 after:blur-md after:transition-all after:duration-500 hover:border-fuchsia-600 hover:border-purple-700/50 hover:text-fuchsia-500 after:hover:bg-opacity-25 focus:ring-2 dark:border-blue-100/20 dark:bg-blue-200/10 dark:text-blue-200 hover:dark:border-blue-200/60 hover:dark:text-fuchsia-500',
        className,
      )}
    >
      {children}
    </button>
  );
}
