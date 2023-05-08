import { Podcast } from "@/hooks/usePodcasts";
import Image from "next/image";
import Link from "next/link";

interface PodcastCard {
  podcast: Podcast;
}

const PodcastCard = ({ podcast }: PodcastCard) => {
  return (
    <li className="flex flex-col sm:flex-row w-full sm bg-white shadow-lg rounded-lg mb-5 overflow-hidden">
      <Image
        className="w-full sm:w-40"
        src={podcast?.thumbnail}
        alt={podcast.title_original}
        width={150}
        height={150}
      />
      <div className="p-4">
        <h3 className="font-bold text-2xl mb-2">{podcast?.title_original}</h3>
        <p>
          <span className="text-slate-500 mr-1">By</span>
          {podcast?.publisher_original}
        </p>
        <div className="flex mt-4">
          <Link legacyBehavior href={`${podcast?.website}`}>
            <a
              target="_blank"
              className="flex items-center justify-center bg-slate-200 rounded-md w-24 mr-2 text-sm"
            >
              <span className="text-lg mr-1">&#x2709;</span> Email
            </a>
          </Link>
          <Link legacyBehavior href={`${podcast?.website}`}>
            <a
              target="_blank"
              className="flex items-center justify-center bg-slate-200 rounded-md w-24 mr-2 text-sm"
            >
              <span className="text-lg mr-1">&#x1F517;</span> Web
            </a>
          </Link>
          <Link legacyBehavior href={`${podcast?.website}`}>
            <a
              target="_blank"
              className="flex items-center justify-center bg-slate-200 rounded-md w-24 mr-2 text-sm"
            >
              <span className="text-lg mr-1">&#x1F310; </span> RSS
            </a>
          </Link>
        </div>
        <div className="mt-3">
          <Link legacyBehavior href={`${podcast?.listennotes_url}`}>
            <a target="_blank" className="underline text-sm">
              Listen notes link
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PodcastCard;
