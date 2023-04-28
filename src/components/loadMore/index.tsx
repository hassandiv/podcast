const LoadMore = ({
  handleLoadMore,
  isLoading,
}: {
  handleLoadMore: () => void;
  isLoading: boolean;
}) => {
  return (
    <button
      className="p-2 bg-black text-white w-36 rounded-md mt-5"
      onClick={handleLoadMore}
    >
      {isLoading ? "Loading..." : "LoadMore"}
    </button>
  );
};
export default LoadMore;
