import { navItems, shortcutItems } from "../lib/data";

export const Nav = () => {
  return (
    <nav>
      <ul className="space-y-2 lg:space-y-0.5">
        {navItems.map(({ icon: Icon, name, href, alerts }) => (
          <li className="flex items-center justify-between" key={name}>
            <a href={href} className="flex items-center gap-3">
              <Icon /> <span>{name}</span>
            </a>
            {alerts && (
              <span className="inline-flex items-center justify-center size-5 font-medium p-1.5 rounded-full  bg-yellow-500">
                {alerts}
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h3 className="text-gray-300 mb-1">SHORTCUT</h3>
        <ul className="space-y-2 lg:space-y-0.5">
          {shortcutItems.map(({ icon: Icon, name, href }) => (
            <li className="flex items-center justify-between" key={name}>
              <a href={href} className="flex items-center gap-3">
                <Icon /> <span>{[name]}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
