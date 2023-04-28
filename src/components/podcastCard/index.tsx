import { Podcast } from "@/hooks/usePodcast";

interface PodcastCard {
  podcast: Podcast;
}

const PodcastCard = ({ podcast }: PodcastCard) => {
  return <li>{podcast?.id}</li>;
};

export default PodcastCard;
