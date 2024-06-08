import { NavLink } from "react-router-dom";
import { navItems, shortcutItems } from "../lib/data";

export const Nav = () => {
  return (
    <nav>
      <ul className="space-y-2 lg:space-y-[0.5rem]">
        {navItems.map(({ icon, name, href, alerts }) => (
          <li
            className="flex items-center text-white/70 justify-between"
            key={name}
          >
            <NavLink
              to={href}
              className={({ isActive }) =>
                `flex group w-full justify-between items-center gap-3 ${
                  isActive && "text-white"
                }`
              }
            >
              <span className="inline-flex items-center gap-3">
                <img className="size-6" src={icon} />
                <span className="animated-underline">{name}</span>
              </span>

              {alerts && (
                <span className="flex items-center justify-center size-6 tracking-[0] leading-[0] pt-px pr-px font-medium rounded-full  bg-warning ">
                  {alerts}
                </span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h3 className="text-white/80 tracking-wider mb-1 text-stroke font-semibold">
          SHORTCUT
        </h3>
        <ul className="space-y-2 text-white/70 lg:space-y-[0.5rem]">
          {shortcutItems.map(({ icon, name, href }) => (
            <li className="flex items-center justify-between" key={name}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  `flex items-center gap-3 ${isActive && "text-white"}`
                }
              >
                <img className="size-6 object-contain" src={icon} />{" "}
                <span>{[name]}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
