import {
  getUploadPlaylistVideos,
  getRelatedYoutubeVideoListByUrl,
  getYoutubeVideoDetailsByUrl,
  getAllPlaylists2,
} from "../../../lib/fetch";
import { server, youtube } from "../../../lib/config";
import { useRef } from "react";
import Image from "next/image";
import { date } from "../../../lib/format";
import Meta from "../../../components/core/Meta";
import Banner from "../../../components/ui/BannerPrimary";
import VideoCard from "../../../components/cards/VideoCard";
import Loader from "../../../components/loader";

export default function VideoDetail({ id, data, playlists }) {
  // const fetcher = (...args) => fetch(...args).then(res => res.json())
  // const url = `${youtube.url}/videos?key=${youtube.key}&part=snippet,statistics&id=${id}&maxResults=${constants.YOUTUBE_RELATED_VIDEOS_PAGE_LIMIT}`
  // const {data} = useSWR(url, fetcher, {initialData: detail, revalidateOnMount: true });
  // if (!data) return <div>Loading...</div>

  const preImage = useRef(null);
  const iframe = useRef(null);

  const title = data.title;
  const description = data.description;
  const publishedDate = date(data.publishedDate);
  const image = data.image;
  const viewCount = data.viewCount;

  const handleLoadIframe = () => {
    preImage.current.style.display = "none";
    iframe.current.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=0`;
  };

  return (
    <>
      <Meta
          title={title}
          description={description}
          url={`${server}/videos`}
          image={`${server}/img/logo/logo.png`}
          type="website"
      />

      <div className="page_wrapper members_page">
        <Banner
            title="ভিডিও সমূহ"
            subTitle=""
            bgImage="/img/banner/photo.jpg"
        />


        <section id="services">
          <div className="services basic_paddings">
            <div className="container">
              <div className="services__wrapper">
                <div id="services__outer_row" className="content_row">
                  <div id="services__outer_cell" className="content_cell">

                    <div className="video-wrap">
                      <div className="video-wrap-image" ref={preImage}>
                        <button onClick={handleLoadIframe}>
                          <PlayIcon />
                        </button>
                        <Image
                            src={
                              image
                                  ? `http://i.ytimg.com/vi/${id}/maxresdefault.jpg`
                                  : `${server}/img/post/youtube-default.jpg`
                            }
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center center"
                            loading="eager" unoptimized
                        />
                      </div>
                      <iframe
                          //src={`https://www.youtube.com/embed/${id}?autoplay=0&mute=0`}
                          ref={iframe}
                          allow="autoplay; fullscreen;"
                      ></iframe>
                    </div>

                    <div id="services_header" style={{borderBottom:`1px solid #e2e8f0;`}}>
                      <h2 style={{marginBottom: `0`}}>{title}</h2>

                      <div className="data-line-left">
                        <span className="view-r">{viewCount} views</span>
                        <span className="dot"></span>
                        <span className="date-r">{publishedDate}</span>
                      </div>
                    </div>
                    <p style={{fontSize:`18px`, marginTop:`20px`}}>
                      {description &&
                        description.split("\n").map(function (item, idx) {
                          return (
                              <span key={idx}>
                            {item}
                                <br />
                          </span>
                          );
                        })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const url = `${youtube.url}/videos?key=${youtube.key}&part=snippet,statistics&id=${id}`;
  const detail = await getYoutubeVideoDetailsByUrl(url);
  const playlists = await getAllPlaylists2();

  // const relatedVideosUrl = `${youtube.url}/search?key=${youtube.key}&part=snippet&relatedToVideoId=${id}&type=video&maxResults=${constants.YOUTUBE_RELATED_VIDEOS_PAGE_LIMIT}`
  // const videoLists = await getRelatedYoutubeVideoListByUrl(relatedVideosUrl)

  return {
    props: {
      id,
      data: detail,
      playlists: playlists.playlists,
      // relatedVideos: JSON.parse(JSON.stringify(videoLists))
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const data = await getUploadPlaylistVideos();

  const paths = data.videoIdList.map((video) => ({
    params: { id: video.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

const PlayIcon = () => {
  return (
    <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
      <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path>
      <path d="M 45,24 27,14 27,34" fill="#fff"></path>
    </svg>
  );
};
