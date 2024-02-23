import { Button } from "@nextui-org/react";
import { MdDelete } from "react-icons/md";

const Card = ({ email, message }: { email: string; message: string }) => {
  console.log(email, message);

  return (
    <div className="flex items-center bg-[#151C39] p-2 gap-3 rounded-3xl w-max">
      <span>1</span>
      <h1>{email}</h1>
      <p className="max-w-[500px]">{message}</p>
      <Button isIconOnly color="danger">
        <MdDelete />
      </Button>
    </div>
  );
};

export default Card;
