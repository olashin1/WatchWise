import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function AuthCard({
  title,
  description,
  children,
}: AuthCardProps) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#101014] px-4">
      <div className="w-full max-w-md rounded-3xl border border-[#2b2b36] bg-[#1b1b22] p-8 shadow-2xl">
        <div className="mb-6 space-y-2 text-center">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-purple-400">Watch</span>Wise
          </h1>

          <h2 className="text-lg font-semibold text-gray-200">{title}</h2>

          <p className="text-sm text-gray-400">{description}</p>
        </div>

        {children}
      </div>
    </div>
  );
}
