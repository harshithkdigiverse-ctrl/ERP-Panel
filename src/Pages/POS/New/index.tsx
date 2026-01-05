import { MultiplePay, PosBody, PosHeader } from "../../../Components/POS/New";
import { useAppSelector } from "../../../Store/hooks";

const NewPos = () => {
  const { isMultiplePay } = useAppSelector((state) => state.pos);
  return (
    <>
      {isMultiplePay ? (
        <MultiplePay />
      ) : (
        <>
          <PosHeader />
          <PosBody />
        </>
      )}
    </>
  );
};

export default NewPos;
