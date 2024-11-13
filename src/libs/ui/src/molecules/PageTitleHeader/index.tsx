import React from 'react';

interface Breadcrumb {
    label: string;
    href?: string;

}

interface PageTitleHeaderProps {
    breadcrumbs: Breadcrumb[];
    children?: React.ReactNode;
    className?: string;
}

const PageTitleHeader: React.FC<PageTitleHeaderProps> = ({ breadcrumbs, children, className }) => {
  const title = breadcrumbs[breadcrumbs.length - 1]?.label;

  return (
    <div className={`mb-6 ${className || ''}`}>
      <div className="text-xs font-HeroNewLight text-gray-500 mb-2">
        {breadcrumbs.map((crumb, index) => (
          <span key={index}>
            {index < breadcrumbs.length - 1 ? (
              <a href={crumb.href} className="text-blue-600 hover:underline">
                {crumb.label}
              </a>
            ) : (
              <span className="text-gray-500">{crumb.label}</span>
            )}
            {index < breadcrumbs.length - 1 && ' / '}
          </span>
        ))}
      </div>

      <h1 className="text-3xl lg:text-[2.375rem] font-extrabold text-blue-600">{title}</h1>

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default PageTitleHeader;
