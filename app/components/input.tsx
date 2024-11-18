import React from "react";

interface InputProps {
  type: "text" | "email" | "textarea";
  name: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
}) => {
  if (type === "textarea") {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="border-primary-black focus:ring-primary-black w-full rounded-md border p-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100 dark:placeholder:text-zinc-400"
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="border-primary-black focus:ring-primary-black w-full rounded-md border p-3 text-sm text-zinc-900 focus:outline-none focus:ring-2 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-100 dark:placeholder:text-zinc-400"
    />
  );
};

export default Input;
