const VideoCard = () => {
    return (
      <div className="w-[360px] cursor-pointer">
        {/* Thumbnail */}
        <div className="relative">
          <img
            className="rounded-xl w-full h-[200px] object-cover"
            src="https://i.ytimg.com/vi/BolIRWWWQyY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBXstTn8bk8_k-Ngzx1QYTKH5d_Sg"
            alt="Video thumbnail"
          />
          {/* Duration tag bottom-right */}
          <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1.5 py-0.5 rounded">
            12:34
          </span>
        </div>
  
        {/* Details */}
        <div className="mt-3 flex">
          {/* Channel Avatar */}
          <img
            className="rounded-full w-10 h-10"
            src="https://yt3.ggpht.com/UnuKugcrttXJ0RSWWKxyQTQ1cphZCNhG-ZMLFMcDZehzZJKF-kziOhXrygESkzgW9ptJPOPBZw=s68-c-k-c0x00ffffff-no-rj"
            alt="Channel Avatar"
          />
  
          {/* Texts */}
          <div className="ml-3 flex flex-col">
            {/* Video Title */}
            <span className="text-sm font-medium text-[#0f0f0f] leading-5 line-clamp-2">
              PAK Army DG ISPR claimed PoJK is better than J&K
            </span>
  
            {/* Channel Name */}
            <span className="text-xs text-gray-600 mt-1">Majorly Right</span>
  
            {/* Views + Time */}
            <span className="text-xs text-gray-600">
              1.2M views • 2 days ago
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoCard;
  