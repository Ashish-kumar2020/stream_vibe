const VideoCard = ({d}) => {
    return (
      <div className="w-[360px] cursor-pointer">
        {/* Thumbnail */}
        <div className="relative">
          <img
            className="rounded-xl w-full h-[200px] object-cover"
            src={d.thumbnail.static}
            alt={d.title}
          />
          {/* Duration tag bottom-right */}
          <span className="absolute bottom-2 right-2 bg-black text-white text-xs px-1.5 py-0.5 rounded">
            {d.length}
          </span>
        </div>
  
        {/* Details */}
        <div className="mt-3 flex">
          {/* Channel Avatar */}
          <img
            className="rounded-full w-10 h-10"
            src={d.channel.thumbnail}
            alt="Channel Avatar"
          />
  
          {/* Texts */}
          <div className="ml-3 flex flex-col">
            {/* Video Title */}
            <span className="text-sm font-medium text-[#0f0f0f] leading-5 line-clamp-2">
              {d.title}
            </span>
  
            {/* Channel Name */}
            <span className="text-xs text-gray-600 mt-1">{d.channel.name}</span>
  
            {/* Views + Time */}
            <span className="text-xs text-gray-600">
              {d.views} • {d.published_date}
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoCard;
  