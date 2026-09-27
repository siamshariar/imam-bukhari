import { getAllPlaylists2, getYoutubeVideoListByUrl } from "../../lib/fetch";
import { server, youtube, constants } from "../../lib/config";
import { useState, useEffect, useRef } from "react";
import Loader from "../../components/loader";
import fetcher from "../../lib/lecturesFetcher";
import useOnScreen from "../../hooks/useOnScreen";
import useSWRInfinite from 'swr/infinite';
import Meta from "../../components/core/Meta";
import Banner from "../../components/ui/BannerPrimary";
import VideoCard from "../../components/cards/VideoCard";
import { getMenu, filterMetaInfo } from "../../lib/fetch3";

const getKey = (pageIndex, previousPageData, playlistId) => {
    let pageToken = "";
    if (
        previousPageData !== null &&
        previousPageData.videoLists.nextPageToken !== null
    ) {
        pageToken = `&pageToken=${previousPageData.videoLists.nextPageToken}`;
    }

    return `${youtube.url}/playlistItems?key=${youtube.key}&part=snippet&playlistId=${playlistId}&maxResults=${constants.DEFAULT_PAGE_LIMIT}${pageToken}`;
};

export default function MembersList({
    initialVideos,
    initPlaylistId,
    playlists,
    pageInfo,
}) {
    const ref = useRef();
    const catRef = useRef();
    const isVisible = useOnScreen(ref);

    const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
        (...args) => getKey(...args, initPlaylistId),
        fetcher,
        { initialData: initialVideos, revalidateOnMount: true }
    );

    const datas = data ? [].concat(...data) : [];
    const isLoadingInitialData = !data && !error;
    const isLoadingMore =
        isLoadingInitialData ||
        (size > 0 && data && typeof data[size - 1] === "undefined");
    // const isEmpty = data?.[0]?.length === 0
    const numberOfPages = data?.[0]?.videoLists?.numberOfPages || 0;
    const isReachingEnd = size === numberOfPages;
    const isRefreshing = isValidating && data && data.length === size;

    const [catOpen, setCatOpen] = useState(false);

    const handleCatOpen = async () => {
        catOpen ? setCatOpen(false) : setCatOpen(true);
    };

    const getCategorizedVideos = async (id, pageTitle) => {
        setCatOpen(false);
        setSize(1);
    };

    useEffect(() => {
        let handler = (e) => {
            if (catRef.current != null && !catRef.current.contains(e.target)) {
                setCatOpen(false);
            }
        };
        document.body.addEventListener("mousedown", handler);

        if (isVisible && !isReachingEnd && !isRefreshing) {
            setSize(size + 1);
        }
    }, [isVisible, isRefreshing]);

  return (
    <>
      <Meta
		    title={pageInfo?.metaInfo?.title ?? "ভিডিও সমূহ"}
		    description={pageInfo?.metaInfo?.description ?? "ভিডিও সমূহ - কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ"}
        url={`${server}/videos`}
          image={`${server}/img/logo/logo.png`}
        type="website"
      />

      <div className="page_wrapper members_page">
        <Banner
          title={pageInfo?.metaInfo?.title ?? "ভিডিও সমূহ"}
          subTitle=""
          bgImage="/img/banner/photo.jpg"
        />

          <section id="members" className="properties" style={{backgroundColor:`#f8f8f8`}}>
              <div className="container">
                  {/*<h3 className="home_section__title1">সদস্যবৃন্দ</h3>*/}
                  <div className="properties_wrapper col4">
                      {/*{isEmpty ? <p>No records found!</p> : null}*/}
                      {(datas.length > 0 ? datas : initialVideos).map((data) =>
                          data.videoLists.videos.map((item, index) => (
                                <VideoCard
                                    key={item.id + index}
                                    item={item}
                                    statistics={data.videoLists.videoStats}
                                />
                            ))
                          )}
                    </div>
                  <div className="opt_lecture_loader" ref={ref}>
                      {isLoadingMore ? (
                          <div className="loader">
                              <Loader />
                          </div>
                      ) : (
                          ""
                      )}
                  </div>

                  {isReachingEnd ? (
                      ""
                  ) : (
                      <div className="opt_lecture_more">
                          <center>
                              <button onClick={() => setSize(size + 1)}>
                                  আরও দেখুন
                              </button>
                          </center>
                      </div>
                  )}
              </div>
          </section>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
    const playlistId = params.pid;
    const url = `${youtube.url}/playlistItems?key=${youtube.key}&part=snippet&playlistId=${playlistId}&maxResults=${constants.DEFAULT_PAGE_LIMIT}`;
    const videoLists = await getYoutubeVideoListByUrl(url);
    const playlists = await getAllPlaylists2();
    const menuItems = await getMenu();
    const pageInfo = await filterMetaInfo(menuItems, 'videos');

    return {
        props: {
            initialVideos: [videoLists],
            initPlaylistId: playlistId,
            playlists,
            menuItems,
            pageInfo
        },
        revalidate: 60,
    };
}

export async function getStaticPaths() {
    const playlists = await getAllPlaylists2();

    const paths = playlists.playlists.map((playlist) => ({
        params: { pid: playlist.id },
    }));

    return {
        paths,
        fallback: "blocking",
    };
}
