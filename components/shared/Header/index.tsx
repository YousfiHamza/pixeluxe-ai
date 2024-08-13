import React from 'react';

const Header = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <>
      <h2 className="h2-bold text-theme-200">{title}</h2>
      {subtitle && <p className="p-16-regular mt-4 font-inter">{subtitle}</p>}
    </>
  );
};

export default Header;
