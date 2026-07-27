type AuthMessageProps = {
  type: "error" | "success";
  message: string;
};

export default function AuthMessage({ type, message }: AuthMessageProps) {
  const styles =
    type === "error"
      ? "border-red-500/30 bg-red-500/10 text-red-400"
      : "border-green-500/30 bg-green-500/10 text-green-400";

  return (
    <p className={`rounded-xl border px-4 py-3 text-sm ${styles}`}>{message}</p>
  );
}
