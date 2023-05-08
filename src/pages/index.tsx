import { FC } from "react";
import { usePodcast } from "@/hooks/usePodcasts";
import Layout from "@/components/layout";
import SearchForm from "@/components/searchForm";
import PodcastList from "@/components/podcastList";
import LoadMore from "@/components/loadMore";

const Home: FC = () => {
  const {
    searchQuery,
    podcasts,
    error,
    isLoading,
    totalResults,
    handleClearSearch,
    handleChange,
    handleSubmit,
    handleLoadMore,
  } = usePodcast();

  return (
    <Layout>
      <div className="search-container">
        <SearchForm
          searchQuery={searchQuery}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleClearSearch={handleClearSearch}
        />
        <PodcastList podcasts={podcasts} />
        {podcasts.length < (totalResults ?? 0) && (
          <LoadMore handleLoadMore={handleLoadMore} isLoading={isLoading} />
        )}
        {podcasts.length === totalResults && podcasts.length > 0 && (
          <h3 className="text-md text-center mt-10">No more podcasts</h3>
        )}
        {totalResults === 0 && (
          <h3 className="text-md text-center mt-10">
            No podcasts found, please try a different search.
          </h3>
        )}
        {error && <h3 className="text-md">{error}</h3>}
      </div>
    </Layout>
  );
};
export default Home;
