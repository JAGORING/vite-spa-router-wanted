import React, { useEffect, useState } from 'react';

type RouterProps = {
  children: React.ReactNode;
};
export default function Router({ children }: RouterProps) {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentUrl(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const renderComponentForCurrentUrl = () => {
    const childArray = React.Children.toArray(children);
    const matchingChild = childArray.find((child) => {
      if (!React.isValidElement(child)) {
        return false;
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { path } = child.props;
      return path === currentUrl;
    });

    return matchingChild ? matchingChild : null;
  };

  const componentToRender = renderComponentForCurrentUrl();

  return <>{componentToRender}</>;
}
