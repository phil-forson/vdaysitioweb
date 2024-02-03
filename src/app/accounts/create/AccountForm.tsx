"use client";
import DynamicInput from "@/components/Input";
import { ReactHTMLElement, useState } from "react";

export default function AccountForm() {
  const [inputs, setInputs] = useState({
    password: "",
    texts: [{ title: "" }],
  });

  const handleAddClick = () => {
    // Add a new text input field to the texts array
    setInputs({
      ...inputs,
      texts: [...inputs.texts, { title: "" }],
    });
  };

  const handleTextChange = (index: number, newValue: string) => {
    const newTexts = inputs.texts.map((item, i) => {
      if (i === index) {
        return { ...item, title: newValue };
      }
      return item;
    });

    setInputs({ ...inputs, texts: newTexts });
  };

  const handlePasswordChange = (e: any) => {
    setInputs({ ...inputs, password: e.target.value });
  };

  return (
    <form className="mb-4 w-full flex gap-x-2 items-center">
      <div className="grow">
        <DynamicInput
          name="Password"
          label="Password"
          value={inputs.password}
          onChange={handlePasswordChange}
        />
        {inputs.texts.map((input, index) => (
          <DynamicInput
            key={index}
            name={`text-${index}`}
            label={`Text ${index + 1}`}
            value={input.title}
            onChange={(e) => handleTextChange(index, e.target.value)}
          />
        ))}

        <button
          className="flex self-end bg-[#5f5c5c] rounded p-2 text-sm"
          type="button"
          onClick={handleAddClick}
        >
          Add Text
        </button>
      </div>
    </form>
  );
}
