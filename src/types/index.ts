import type { ForwardRefExoticComponent, SVGProps } from 'react';

export interface MenuItem {
  icon: ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref'>>;
  href: string;
}
