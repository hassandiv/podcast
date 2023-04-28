import { FC } from "react";
import Layout from "@/components/layout";
import PodcastList from "@/components/podcastList";
import LoadMore from "@/components/loadMore";
import { usePodcast } from "@/hooks/usePodcast";

const Home: FC = () => {
  const {
    searchQuery,
    podcasts,
    error,
    isLoading,
    handleClearSearch,
    handleChange,
    handleSubmit,
    handleLoadMore,
  } = usePodcast();

  return (
    <Layout>
      <form
        className="flex flex-col items-start px-5 py-6 mb-5 bg-sky-600 lg:w-1/2 w-full rounded-md text-white"
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
        <h5
          className="mt-2 underline cursor-pointer"
          onClick={handleClearSearch}
        >
          Clear search
        </h5>
      </form>
      <PodcastList podcasts={podcasts} />
      {podcasts.length > 0 && (
        <LoadMore handleLoadMore={handleLoadMore} isLoading={isLoading} />
      )}
      {error && <h3 className="text-lg">{error}</h3>}
    </Layout>
  );
};
export default Home;
