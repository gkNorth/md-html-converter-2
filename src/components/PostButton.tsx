type PostButtonProps = {
  handler: () => void;
  isConverting: boolean;
};

export default function PostButton({ handler, isConverting }: PostButtonProps) {
  return (
    <button
      className="px-4 py-2 w-[64px] h-[48px] bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
      onClick={handler}
    >
      {isConverting ? (
        <div className="flex justify-center" aria-label="読み込み中">
          <div className="animate-ping h-1 w-1 bg-gray-100 rounded-full flex-shrink-0"></div>
          <div className="animate-ping h-1 w-1 bg-gray-100 rounded-full mx-2 flex-shrink-0"></div>
          <div className="animate-ping h-1 w-1 bg-gray-100 rounded-full flex-shrink-0"></div>
        </div>
      ) : (
        <span>変換</span>
      )}
    </button>
  );
}
