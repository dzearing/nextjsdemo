import React from 'react';

export function useScrolledDown() {
  const [isScrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setScrolled((document.scrollingElement?.scrollTop || 0) > 0);
    
    function onScrollChanged() {
      setScrolled((document.scrollingElement?.scrollTop || 0) > 0);
    }

    document.addEventListener('scroll', onScrollChanged);

    return () => document.removeEventListener('scroll', onScrollChanged);
  }, []);

  return isScrolled;
}
