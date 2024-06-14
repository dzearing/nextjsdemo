import React, { type AllHTMLAttributes } from 'react';

export const FlagFilledIcon = (props: AllHTMLAttributes<SVGElement>) => (
  <svg {...props} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 13H16.5C16.8993 13 17.1375 12.5549 16.916 12.2226L14.1009 8L16.916 3.77735C17.1375 3.44507 16.8993 3 16.5 3H4.5C4.22386 3 4 3.22386 4 3.5V17.5C4 17.7761 4.22386 18 4.5 18C4.77614 18 5 17.7761 5 17.5V13Z"
      fill="inherit"
    />
  </svg>
);