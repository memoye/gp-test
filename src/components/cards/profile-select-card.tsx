import { ChevronsDownUpIcon, ChevronsUpDownIcon, LogOut } from 'lucide-react';
import { CardContainer } from '../common/card-container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProfileSelectCard = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  function toggleShowOptions() {
    setShowOptions((prev) => !prev);
  }

  const logout = () => {
    navigate('/login');
  };

  return (
    <section className="relative flex cursor-pointer items-center justify-between gap-2 rounded-md p-4">
      <div className="flex items-center gap-2">
        <div className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-[#ECD348]">
          <img
            className="aspect-square w-full rounded-full"
            src="/images/user-wh.png"
            alt="user"
          />
        </div>
        <p className="mr-2">
          <strong className="text-sm font-medium tracking-wide">
            Jane Smith
          </strong>
        </p>
      </div>

      <button onClick={toggleShowOptions}>
        {showOptions ? (
          <ChevronsDownUpIcon size={18} />
        ) : (
          <ChevronsUpDownIcon size={18} />
        )}
      </button>

      <CardContainer
        className={`absolute left-4 top-1/2 flex w-3/5 -translate-y-1/2 flex-row items-center justify-between overflow-hidden bg-gray-200/60 text-center font-black ring-offset-1 backdrop-blur-md transition-all duration-100 hover:border-primary ${
          showOptions
            ? 'h-4/6 ring-2 ring-offset-primary hover:ring-white'
            : 'h-0 !p-0'
        }`}
        border={false}
      >
        <button
          onClick={logout}
          className="flex w-full items-center gap-2 text-center text-primary"
        >
          <span>
            <LogOut size={20} />
          </span>
          <span>Logout</span>
        </button>
      </CardContainer>
    </section>
  );
};
