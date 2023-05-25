import { useDispatch, useSelector } from "react-redux";

export const useRename = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.rename);

  return {
    counter,
  };
};
