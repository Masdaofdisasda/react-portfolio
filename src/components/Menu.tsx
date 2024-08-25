
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle,

} from './ui/navigation-menu.tsx';
import Flex from './Flex.tsx';

export function MenubarComponent() {

  return (
    <Flex className={"justify-between"}>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink href={"/"} className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href={"/projects"} className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href={"/resume"} className={navigationMenuTriggerStyle()}>
                  Resume
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href={"/contact"} className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href={"/about"} className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
</Flex>
  );
}
