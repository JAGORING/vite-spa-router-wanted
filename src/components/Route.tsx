import { ReactElement } from 'react';

type RouteProps = {
  path: string;
  component: ReactElement;
};

export default function Route(routeComponent: RouteProps) {
  return <>{routeComponent.component}</>;
}
