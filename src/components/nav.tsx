import { NavLink } from 'react-router-dom';
import { navItems, shortcutItems } from '../lib/data';

export const Nav = () => {
  return (
    <nav>
      <ul className="space-y-2 lg:space-y-[0.5rem]">
        {navItems.map(({ icon, name, href, alerts }) => (
          <li
            className="flex items-center justify-between text-white/70"
            key={name}
          >
            <NavLink
              to={href}
              className={({ isActive }) =>
                `group flex w-full items-center justify-between gap-3 ${
                  isActive && 'text-white'
                }`
              }
            >
              <span className="inline-flex items-center gap-3">
                <img className="size-6" src={icon} />
                <span className="animated-underline">{name}</span>
              </span>

              {alerts && (
                <span className="flex size-6 items-center justify-center rounded-full bg-warning pr-px pt-px font-medium leading-[0] tracking-[0]">
                  {alerts}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h3 className="text-stroke mb-1 font-semibold tracking-wider text-white/80">
          SHORTCUT
        </h3>
        <ul className="space-y-2 text-white/70 lg:space-y-[0.5rem]">
          {shortcutItems.map(({ icon, name, href }) => (
            <li className="flex items-center justify-between" key={name}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  `flex items-center gap-3 ${isActive && 'text-white'}`
                }
              >
                <img className="size-6 object-contain" src={icon} />{' '}
                <span>{[name]}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
