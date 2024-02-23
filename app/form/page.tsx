"use client";
import { Input, Textarea, Button } from "@nextui-org/react";
import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const postData = async (e: { preventDefault: () => void }) => {
    console.log(email, message);

    e.preventDefault();
    const req = await fetch(process.env.NEXT_PUBLIC_API_URL + "/postmail", {
      method: "POST",
      body: JSON.stringify({ email: email, message: message }),
    });
    const res = await req.json();
    console.log(res);
    setEmail("");
    setMessage("");
  };
  return (
    <div className="w-full flex justify-center">
      <form
        action=""
        className="lg:w-[400px] mt-2 h-max bg-[#151C39] rounded-2xl p-3"
      >
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          placeholder="Enter your email"
        />
        <Textarea
          label="Description"
          placeholder="Enter your description"
          className="max-w-xs my-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={postData} color="primary">
          submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
