import { useOutletContext } from "react-router-dom";
import { LayoutContextType } from "../components/layout";

export const useLayoutContext = () => {
  const layoutcontext = useOutletContext<LayoutContextType>();

  return layoutcontext;
};
