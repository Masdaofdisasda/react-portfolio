
import {
  NavigationMenu, NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle,

} from './ui/navigation-menu.tsx';
import Flex from './Flex.tsx';
import { cn } from '../lib/utils.ts';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';


export function MenubarComponent() {
  const linkStyle = cn(navigationMenuTriggerStyle(),"bg-slate-800 text-slate-100");

  const options = (
    <><NavigationMenuItem>
      <Link to="/" className={linkStyle}>
        Home
      </Link>
    </NavigationMenuItem><NavigationMenuItem>
      <Link to="/projects" className={linkStyle}>
        Projects
      </Link>
    </NavigationMenuItem><NavigationMenuItem>
      <Link to="/resume" className={linkStyle}>
        Resume
      </Link>
    </NavigationMenuItem><NavigationMenuItem>
      <Link to="/contact" className={linkStyle}>
        Contact
      </Link>
    </NavigationMenuItem><NavigationMenuItem>
      <Link to="/about" className={linkStyle}>
        About
      </Link>
    </NavigationMenuItem></>
  )

  return (
    <Fragment>
      <Flex justify="center" className={"w-full bg-slate-800 py-4 fixed z-50"}>
        <NavigationMenu >
          <NavigationMenuList>
            {options}
          </NavigationMenuList>
        </NavigationMenu>
      </Flex>
  <div className={"justify-start w-full bg-slate-800 p-4 fixed z-50 md:hidden"}>
    <NavigationMenu >
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Menu
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuList >
              <Flex direction="column" justify="space-evenly">
                {options}
              </Flex>
            </NavigationMenuList>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div></Fragment>
  );
}
