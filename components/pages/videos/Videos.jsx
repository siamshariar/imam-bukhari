import Link from "next/link";
import VideoCard from "../../cards/VideoCard";

export default function Videos({ members }) {
  return (
    <section id="members" className="properties" style={{backgroundColor:`#f8f8f8`}}>
      <div className="container">
        {/*<h3 className="home_section__title1">সদস্যবৃন্দ</h3>*/}
        <div className="properties_wrapper col4">
          {members &&
            members.map((member) => (
              <VideoCard key={member.id} member={member} />
            ))}
        </div>
      </div>
    </section>
  );
}
