type AuthSubmitButtonProps = {
  isLoading: boolean;
  defaultText: string;
  loadingText: string;
};

export default function AuthSubmitButton({
  isLoading,
  defaultText,
  loadingText,
}: AuthSubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="rounded-xl bg-purple-500 px-4 py-3 font-semibold text-white transition hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isLoading ? loadingText : defaultText}
    </button>
  );
}
