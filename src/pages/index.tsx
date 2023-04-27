import { useEffect, useState } from "react";
import { FC } from "react";
import { get } from "@/utils/api/get";
import Layout from "@/components/layout";
import PodcastList from "@/components/podcastList";
import LoadMore from "@/components/loadMore";

export interface Podcast {
  audio_length_sec: number;
  description_highlighted: string;
  description_original: string;
  earliest_pub_date_ms: number;
  explicit_content: boolean;
  genre_ids: number[];
  id: string;
  image: string;
  itunes_id: number;
  latest_episode_id: string;
  latest_pub_date_ms: number;
  listennotes_url: string;
  publisher_highlighted: string;
  publisher_original: string;
  thumbnail: string;
  title_highlighted: string;
  title_original: string;
  total_episodes: number;
  update_frequency_hours: number;
  website: string;
}

interface Podcasts {
  count: number;
  next_offset: number;
  results: Podcast[];
  took: number;
  total: number;
}

const Home: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [pageSize, setPageSize] = useState<number>(10);

  const searchPodcasts = async () => {
    const { data } = await get(
      `search?q=${searchQuery}&type=podcast&page_size=${pageSize}`
    );
    // const { results } = data ?? {};
    setPodcasts([...podcasts, ...(data.results ?? [])]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setSearchQuery(value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchQuery) {
      searchPodcasts();
    }
  };

  const handleLoadMore = (): void => {
    setPageSize(pageSize + 10);
  };

  useEffect(() => {
    if (podcasts.length > 0) {
      searchPodcasts();
    }
  }, [pageSize]);

  console.log(podcasts);

  const handleClearSearch = (): void => {
    setPodcasts([]);
  };

  return (
    <Layout>
      <form
        className="flex flex-col items-start px-5 py-6 bg-sky-600 lg:w-1/2 w-full rounded-md text-white"
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
        <h5 className="mt-2 underline" onClick={handleClearSearch}>
          Clear search
        </h5>
      </form>
      <PodcastList podcasts={podcasts} />
      {podcasts.length > 0 && <LoadMore handleLoadMore={handleLoadMore} />}
    </Layout>
  );
};
export default Home;
