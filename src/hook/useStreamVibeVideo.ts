import { useQuery } from "@tanstack/react-query";
import { fetchStreamVibeVideo } from "../api/streamvibe";


export const useStreamVibeVideo = (videoId: string) => {
  return useQuery({
    queryKey: ["youtube-video", videoId],
    queryFn: () => fetchStreamVibeVideo(videoId),
    enabled: !!videoId,
    staleTime: 1000 * 60 * 5,
  });
};
