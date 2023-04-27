import { useState, useEffect } from "react";
import { get } from "@/utils/api/get";
import Layout from "@/components/layout";
import { FC } from "react";

interface Podcast {
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
  const [podcasts, setPodcasts] = useState<Podcasts[]>([]);

  const searchPodcasts = async () => {
    const { data } = await get(`search?q=${searchQuery}&type=podcast`);
    setPodcasts(data);
  };

  useEffect(() => {
    if (searchQuery) {
      searchPodcasts();
    }
  }, [searchQuery]);

  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};
export default Home;
