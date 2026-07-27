import type { InputHTMLAttributes } from "react";

type AuthInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function AuthInput({
  label,
  id,
  ...inputProps
}: AuthInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-gray-300">
        {label}
      </label>

      <input
        id={id}
        {...inputProps}
        className="rounded-xl border border-[#32323d] bg-[#25252f] px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
      />
    </div>
  );
}
