const LoadMore = ({ handleLoadMore }: { handleLoadMore: () => void }) => {
  return (
    <button
      className="p-2 bg-black text-white w-36 rounded-md"
      onClick={handleLoadMore}
    >
      LoadMore
    </button>
  );
};
export default LoadMore;
