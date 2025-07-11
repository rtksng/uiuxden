import React, { useState } from 'react';
import VideoModal from '../components/videoModal';

interface VideoThumbnailProps {
  videoId: string;
  thumbnail: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ videoId, thumbnail }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full max-w-[1200px] mx-auto aspect-video bg-cover bg-center rounded-lg overflow-hidden mt-12"
        style={{ backgroundImage: `url(${thumbnail})` }}
        onClick={() => setModalOpen(true)}
      >
        <div className="w-full h-full flex items-center justify-center">
          <button className="bg-black w-[100px] h-[100px] bg-opacity-50 text-white px-4 py-2 rounded-full text-lg font-semibold">
            ▶
          </button>
        </div>
      </div>

      <VideoModal
        videoId={videoId}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default VideoThumbnail;
