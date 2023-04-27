import { Podcast } from "@/pages/index";
import PodcastCard from "../podcastCard/index";

interface Podcasts {
  podcasts: Podcast[];
}

const PodcastList = ({ podcasts }: Podcasts) => {
  return (
    <ul>
      {podcasts.length > 0 &&
        podcasts?.map((podcast: Podcast, index) => (
          <PodcastCard key={index} podcast={podcast} />
        ))}
    </ul>
  );
};
export default PodcastList;
