interface SearchForm {
  searchQuery: string;
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearSearch: () => void;
}

const SearchForm = ({
  searchQuery,
  handleSubmit,
  handleChange,
  handleClearSearch,
}: SearchForm) => {
  return (
    <form
      className="flex flex-col items-start px-5 py-6 mb-10 bg-sky-600 w-full rounded-md text-white"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search" className="mb-3 text-xl">
        Search Podcasts
      </label>
      <div className="flex w-full">
        <input
          type="text"
          name="search"
          id="search"
          value={searchQuery}
          onChange={handleChange}
          className="focus:outline-none p-2 block w-4/5 mr-2 rounded-md text-black"
          placeholder="Enter keyword"
        />
        <button className="p-2 bg-black w-1/5 rounded-md">Search</button>
      </div>
      <h5 className="mt-2 underline cursor-pointer" onClick={handleClearSearch}>
        Clear search
      </h5>
    </form>
  );
};
export default SearchForm;
