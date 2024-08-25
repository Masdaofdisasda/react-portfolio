
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle,

} from './ui/navigation-menu.tsx';
import Flex from './Flex.tsx';
import { cn } from '../lib/utils.ts';

export function MenubarComponent() {
  const linkStyle = cn(navigationMenuTriggerStyle(),"bg-slate-800 text-slate-100");

  return (
    <Flex justify="center" className={"w-full bg-slate-800 py-4 fixed z-50"}>
        <NavigationMenu >
          <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink href={"/"} className={linkStyle}>
                  Home
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href={"/projects"} className={linkStyle}>
                  Projects
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href={"/resume"} className={linkStyle}>
                  Resume
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href={"/contact"} className={linkStyle}>
                  Contact
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href={"/about"} className={linkStyle}>
                  About
                </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
</Flex>
  );
}
