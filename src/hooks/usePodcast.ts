import { useEffect, useState } from "react";
import { get } from "@/utils/api/get";

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

export const usePodcast = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [error, setError] = useState<string>("");
  const [offsetLimit, setOffsetLimit] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const searchPodcasts = async () => {
    setIsLoading(true);
    const { data, message } = await get(
      `search?q=${searchQuery}&type=podcast&offset=${offsetLimit}&page_size=5`
    );
    setPodcasts([...podcasts, ...(data?.results ?? [])]);
    if (message) {
      setError(message);
    }
    setIsLoading(false);
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
    setOffsetLimit(offsetLimit + 5);
  };

  useEffect(() => {
    if (podcasts.length > 0) {
      searchPodcasts();
    }
  }, [offsetLimit]);

  const handleClearSearch = (): void => {
    setPodcasts([]);
    setSearchQuery("");
  };

  return {
    isLoading,
    podcasts,
    searchQuery,
    error,
    handleClearSearch,
    handleChange,
    handleSubmit,
    handleLoadMore,
  };
};
