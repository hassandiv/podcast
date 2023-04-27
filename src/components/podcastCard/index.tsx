import { Podcast } from "@/pages/index";

interface PodcastCard {
  podcast: Podcast;
}

const PodcastCard = ({ podcast }: PodcastCard) => {
  return <li>{podcast?.description_highlighted}</li>;
};

export default PodcastCard;
