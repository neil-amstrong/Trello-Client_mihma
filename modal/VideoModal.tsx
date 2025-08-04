
'use client';

import { RxCross1 } from 'react-icons/rx';

interface VideoModalProps {
  onClose: () => void;
}

export default function VideoModal({ onClose }: VideoModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative w-[90%] max-w-3xl aspect-video">
    
        <button
          onClick={onClose}
          className="absolute -top-5 -right-5 text-white bg-black/60 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600"
          aria-label="Close"
        >
          <RxCross1 size={20} />
        </button>

        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/xky48zyL9iA?autoplay=1"
          title="Trello Intro Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
