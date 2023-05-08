import { useEffect, useState } from "react";
import { get } from "@/utils/api/get";

export interface Podcast {
  rss: string;
  description_highlighted: string;
  description_original: string;
  title_highlighted: string;
  title_original: string;
  publisher_highlighted: string;
  publisher_original: string;
  image: string;
  thumbnail: string;
  itunes_id: number;
  latest_episode_id: string;
  latest_pub_date_ms: number;
  earliest_pub_date_ms: number;
  id: string;
  genre_ids: number[];
  listennotes_url: string;
  total_episodes: number;
  audio_length_sec: number;
  update_frequency_hours: number;
  email: string;
  explicit_content: boolean;
  website: string;
  listen_score: string;
  listen_score_global_rank: string;
}

export const usePodcast = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [error, setError] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [totalResults, setTotalResults] = useState<number | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const limit = 5;

  const searchPodcasts = async () => {
    setIsLoading(true);
    const { data, message } = await get(
      `search?q=${searchQuery}&type=podcast&offset=${offset}&page_size=${limit}`
    );
    setTotalResults(data?.total);
    setPodcasts([...podcasts, ...(data?.results ?? [])]);
    if (message) {
      setError(message);
    }
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchQuery && podcasts.length === 0) {
      searchPodcasts();
    }
  };

  const handleLoadMore = (): void => {
    setOffset(offset + limit);
  };

  useEffect(() => {
    if (offset) {
      searchPodcasts();
    }
  }, [offset]);

  const handleClearSearch = (): void => {
    setPodcasts([]);
    setSearchQuery("");
    setTotalResults(undefined);
  };

  return {
    isLoading,
    podcasts,
    searchQuery,
    error,
    totalResults,
    handleClearSearch,
    handleChange,
    handleSubmit,
    handleLoadMore,
  };
};
