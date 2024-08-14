import React from 'react';

const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <>
      <h2 className="text-theme-300 text-5xl font-bold">{title}</h2>
      {subtitle && <p className="p-16-regular mt-4 font-inter">{subtitle}</p>}
    </>
  );
};

export default Header;
