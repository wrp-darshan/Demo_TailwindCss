import React, { useState } from 'react';

function FullscreenVideo() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const openModal = () => {
    setVideoSrc('https://www.youtube.com/embed/hXAdt5w3sPQ');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoSrc('');
  };

  return (
    <div>
      <section className="relative h-full md:py-60 py-40 bg-fixed bg-cover bg-center bg-[url(../public/img/video-one.jpg)]">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(16,55,182,0.65)] to-[rgba(16,55,182,0)]"></div>
        <div className="relative z-[1] flex items-center justify-center h-full">
          <button
            onClick={openModal}
            className="md:w-40 md:h-40 w-20 h-20 bg-yellow flex justify-center items-center rounded-full"
          >
            <span className="block relative z-[1]">
              <img src="./img/play.png" alt="Play Button" className='md:h-[32px] md:w-[32px] w-6 h-6'/>
            </span>
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-4 rounded-md w-11/12 md:w-2/3">
            <div className="flex justify-between items-center">
              <h5 className="text-xl text-black font-bold">Watch Video</h5>
              <button
                onClick={closeModal}
                className="text-black text-2xl font-bold"
              >
                &times;
              </button>
            </div>
            <div className="mt-4">
              <iframe
                width="100%"
                height="315"
                src={videoSrc}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FullscreenVideo;
