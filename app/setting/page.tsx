"use client";

import React, { useEffect, useState } from "react";
import { Button, Input } from "@nextui-org/react";

const Setting = () => {
  const [id, setId] = useState("");
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newName, setNewName] = useState("");
  async function getData() {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/getuser");
    const data = await res.json();
    setId(data[0]._id);
    setUrl(data[0].url);
    setName(data[0].name);
  }
  console.log(id);

  useEffect(() => {
    getData();
  }, [url, id, name]);
  const postData = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const req = await fetch(process.env.NEXT_PUBLIC_API_URL + "/createuser", {
      method: "POST",
      body: JSON.stringify({ url: url, name: name }),
    });
    const res = await req.json();
    setNewUrl("");
    setNewName("");
    console.log(res);
    getData();
  };
  const update = async (id: string) => {
    const req = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/updateuser/" + id,
      {
        method: "PUT",
        body: JSON.stringify({ url: newUrl, name: newName }),
      }
    );
    const res = await req.json();
    console.log(res);
    setNewUrl("");
    setNewName("");
    getData();
  };
  return (
    <div className="w-full flex justify-center items-center">
      <form action="" className="lg:w-[400px] bg-[#151C39] rounded-2xl p-3">
        <Input value={url} readOnly label="URL" />
        <Input value={name} readOnly label="Name" className="my-2" />
        <Input
          onChange={(e) => setNewUrl(e.target.value)}
          value={newUrl}
          label="URL"
          placeholder="Enter Image URL"
        />
        <Input
          className="my-3"
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          label="Name"
          placeholder="Enter your User Name"
        />
        {id ? (
          <Button color="secondary" onClick={() => update(id)}>
            update
          </Button>
        ) : (
          <Button color="primary" onClick={postData}>
            submit
          </Button>
        )}
      </form>
    </div>
  );
};

export default Setting;
