import { useState } from "react";
import { useStreamVibeVideo } from "../hook/useStreamVibeVideo";
import VideoCard from "../pages/Video/VideoCard";

export default function VideoFeed() {
  const videoId = "vFcS080VYQ0";
  const { data, isLoading, isError } = useStreamVibeVideo(videoId);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  if (isLoading) return <p className="text-gray-500">Loading Video....</p>;

  if (isError) return <p className="text-red-500">Failed to fetch video...</p>;
  if (!data) return <p>No Video Found</p>;

  const startIndex = (currentPage - 1) * pageSize;
  const currentVideos = data.related_videos.slice(
    startIndex,
    startIndex + pageSize
  );
  const totalPages = Math.ceil(data.related_videos.length / pageSize);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentVideos.map((video) => (
          <VideoCard key={video.video_id} d={video} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
          <button onClick={()=> setCurrentPage(p => Math.max(p - 1,1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
