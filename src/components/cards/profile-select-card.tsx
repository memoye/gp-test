import { ChevronsDownUpIcon, ChevronsUpDownIcon, LogOut } from "lucide-react";
import { CardContainer } from "../common/card-container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProfileSelectCard = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  function toggleShowOptions() {
    setShowOptions((prev) => !prev);
  }

  const logout = () => {
    navigate("/login");
  };

  return (
    <section className="flex relative cursor-pointer items-center justify-between p-4 gap-2 rounded-md">
      <div className="flex gap-2 items-center">
        <div className="size-10 flex items-center justify-center overflow-hidden bg-[#ECD348] rounded-full">
          <img
            className="w-full aspect-square rounded-full"
            src="/images/user-wh.png"
            alt="user"
          />
        </div>
        <p className="mr-2">
          <strong className="font-medium text-sm tracking-wide">
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
        className={`bg-gray-200/60 backdrop-blur-md hover:border-primary text-center flex items-center flex-row justify-between transition-all ring-offset-1 duration-100 overflow-hidden left-4 absolute font-black top-1/2 w-3/5 -translate-y-1/2
           ${
             showOptions
               ? "h-4/6 ring-offset-primary ring-2 hover:ring-white "
               : "h-0 !p-0"
           }`}
        border={false}
      >
        <button
          onClick={logout}
          className="flex items-center gap-2 text-center w-full text-primary"
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
