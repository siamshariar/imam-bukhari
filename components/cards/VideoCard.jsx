import Link from "next/link";
import { server } from "../../lib/config";
import Image from "next/image";
import { date } from "../../lib/format";

const VideoCard = ({ key, item, statistics }) => {
  const id = item.id;
  const image = item.image;
  const title = item.title;
  const publishedAt = date(item.date);
  const viewCount = statistics ? statistics[id] : "";

  return (
    <div className="property" key={key}>


        <Link href={`/videos/watch/${id}`} legacyBehavior>
            <a href="" className="property_link">
          <div className="property_img video_img">
            {/*<img src={member.imagePath} alt={member.imageAlt} />*/}
            <Image
                src={
                  image
                      ? `http://i.ytimg.com/vi/${id}/mqdefault.jpg`
                      : `${server}/img/post/youtube-default.jpg`
                }
                alt=""
                layout="fill"
                objectFit="cover"
                objectPosition="center center"
                loading="eager" unoptimized
            />
          </div>


        <div className="property_content">
          <div className="property_header">
            {/*<h3>{member.name}</h3>*/}
            {/*<div className="properties_grid_price">*/}
            {/*  {member.designation}*/}
            {/*</div>*/}
          </div>
          {/* <p className="property_address">
            3515 Ashbourne Circle, San Ramon, CA 94583
          </p> */}
          <p className="property_details">{title}</p>
          {/*<div className="properties_grid_footer">*/}
          {/*  <span className="link">বিস্তারিত জানুন</span>*/}
          {/*</div>*/}
        </div>
            </a>
        </Link>

    </div>
  );
};

export default VideoCard;
