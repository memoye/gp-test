import { useOutletContext } from "react-router-dom";
import { type InAppLayoutContextType } from "../components/layouts/in-app-layout";

export const useLayoutContext = () => {
  const layoutcontext = useOutletContext<InAppLayoutContextType>();

  return layoutcontext;
};
