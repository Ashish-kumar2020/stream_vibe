import { useStreamVibeVideo } from "../hook/useStreamVibeVideo";
import VideoCard from "../pages/Video/VideoCard";

export default function VideoFeed() {
  const videoId = "vFcS080VYQ0";
  const { data, isLoading, isError } = useStreamVibeVideo(videoId);

  if (isLoading) return <p className="text-gray-500">Loading Video....</p>;

  if (isError) return <p className="text-red-500">Failed to fetch video...</p>;
  if (!data) return <p>No Video Found</p>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
     {
      data.related_videos.map((video) => (
        <VideoCard key={video.video_id} d={video} />

      ))
     }
    </div>
  );
}
