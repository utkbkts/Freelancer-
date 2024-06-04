import ReactPlayer from "react-player";

interface Props {
  handleCloseClick: () => void;
}

const ModalVideo = ({ handleCloseClick }: Props) => {
  return (
    <>
      <div className="modal-video">
        <div>
          <span className="close" onClick={handleCloseClick}>
            Close
          </span>
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=msWsKLdNnwg"}
            height={"85vh"}
            width={"70vw"}
            controls={true}
            className="overflow-hidden  bg-secondary"
          />
        </div>
      </div>
      <div className="video-bg"></div>
    </>
  );
};

export default ModalVideo;
