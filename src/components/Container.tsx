import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div className={`max-w-screen-1600 mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-20 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
