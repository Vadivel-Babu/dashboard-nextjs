"use client";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { MdDelete } from "react-icons/md";

type data = {
  _id: string;
  email: string;
  message: string;
};

const page = () => {
  const [datas, setDatas] = useState<data[]>([]);
  async function getData() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/getmail");
    const data = await res.json();
    setDatas(data);
  }
  console.log(datas);

  useEffect(() => {
    getData();
  }, []);
  async function remove(id: any) {
    const req = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/postmail/" + id,
      {
        method: "DELETE",
        body: JSON.stringify(id),
      }
    );
    getData();
  }
  return (
    <div className="flex flex-col mt-3  items-center w-full">
      {datas.length === 0 ? (
        <h1>No message found</h1>
      ) : (
        datas.map((data, i) => (
          <div
            className="flex items-center bg-[#151C39] p-2 gap-3 rounded-3xl w-max"
            key={data._id}
          >
            <span>{i + 1}</span>
            <h1>{data.email}</h1>
            <p className="max-w-[500px]">{data.message}</p>
            <Button isIconOnly color="danger" onClick={() => remove(data._id)}>
              <MdDelete />
            </Button>
          </div>
        ))
      )}
    </div>
  );
};

export default page;
