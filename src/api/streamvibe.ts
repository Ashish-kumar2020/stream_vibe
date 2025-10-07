
import { apiClient } from "./client";

export interface StreamVibeResponse {
        position_on_page: number,
        title : string,
        link : string,
        serpapi_link: string,
        channel: {
            name: string,
            link: string,
            verified: boolean,
            thumbnail: string,
        };
        published_data: string,
        views: number,
        length: string,
        description: string,

        extensions: string[],
        thumbnail: {
            static: string,
            rich: string
        }
}

export const fetchStreamVibeVideo = async (videoId: string) : Promise<StreamVibeResponse> => {
    const res = await apiClient.get("/search.json", {
        params: {
            engine : "youtube_video",
            v : videoId,
            api_key: "9394ca499481640debff88c14bebd469eaaef755ae727875d1cfcb2cf67dfff4"
        }
    })
    return res.data as StreamVibeResponse;
}