export default function IframeVideo({ title, videoId }) {
  return (
    <div className="iframeVideo">
      <div className="iframeVideo__wrapper container">
        <h2 className="iframeVideo__title">{title}</h2>
        <div className="iframeVideo__container">
          <iframe
            width="100%"
            height="100"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
