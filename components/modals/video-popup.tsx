import ModalVideo from "react-modal-video"; 


const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "bgMEvrd2E", 
  
}:any ) => {
  return (
    <>
      <ModalVideo
        channel="youtube"
        // autoplay
        isOpen={isVideoOpen}
        videoId={videoId}
      />
    </>
  );
};

export default VideoPopup;

