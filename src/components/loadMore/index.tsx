interface LoadMore {
  handleLoadMore: () => void;
  isLoading: boolean;
}

const LoadMore = ({ handleLoadMore, isLoading }: LoadMore) => {
  return (
    <button
      className="p-2 bg-black text-white w-36 rounded-md mt-10 block mx-auto"
      onClick={handleLoadMore}
    >
      {isLoading ? "Loading..." : "Load more"}
    </button>
  );
};
export default LoadMore;
