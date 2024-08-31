import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu.tsx';
import Flex from './Flex.tsx';
import { cn } from '../lib/utils.ts';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

export function MenubarComponent() {
  const linkStyle = cn(
    navigationMenuTriggerStyle(),
    'bg-slate-800 bg-opacity-0 hover:opacity-100 text-slate-100'
  );
  const linkStyleMobile = cn(
    navigationMenuTriggerStyle(),
    'bg-slate-800 text-slate-100'
  );

  const options = (
    <>
      <NavigationMenuItem>
        <Link to="/" className={linkStyle}>
          Home
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/projects" className={linkStyle}>
          Projects
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/resume" className={linkStyle}>
          Resume
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/contact" className={linkStyle}>
          Contact
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/about" className={linkStyle}>
          About
        </Link>
      </NavigationMenuItem>
    </>
  );
  const optionsMobile = (
    <>
      <NavigationMenuItem>
        <Link to="/" className={linkStyleMobile}>
          Home
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/projects" className={linkStyleMobile}>
          Projects
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/resume" className={linkStyleMobile}>
          Resume
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/contact" className={linkStyleMobile}>
          Contact
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link to="/about" className={linkStyleMobile}>
          About
        </Link>
      </NavigationMenuItem>
    </>
  );

  return (
    <Fragment>
      <Flex
        justify="center"
        className="w-full bg-slate-800/50 py-4 fixed z-50 backdrop-blur-xl backdrop-filter shadow-lg"
      >
        <NavigationMenu>
          <NavigationMenuList>{options}</NavigationMenuList>
        </NavigationMenu>
      </Flex>
      <div
        className={
          'justify-start w-full bg-slate-800/50 p-4 fixed z-50 backdrop-blur-xl backdrop-filter shadow-lg md:hidden'
        }
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuList>
                  <Flex direction="column" justify="space-evenly">
                    {optionsMobile}
                  </Flex>
                </NavigationMenuList>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </Fragment>
  );
}
