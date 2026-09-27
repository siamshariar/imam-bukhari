import Link from "next/link";
import { apiServer } from "../../lib/config";

const MemberCard = ({ member }) => {
  return (
    <div className="property">
      <Link href={`/members/${member.slug}`} legacyBehavior>
        <a className="property_link">
          <div className="property_img">
            <img src={`${member.imagePath}`} alt={member.imageAlt} />
          </div>
          <div className="property_content">
            <p className="property_details">{member.kulliyaDesignation}</p>
            <div className="property_header">
              <div className="properties_grid_price">{member.designation}</div>
              <h3>{member.name}</h3>
            </div>
            
          </div>
        </a>
      </Link>
      {/* Separate the "Learn More" button outside of the main link */}
      <div className="member-learnmore">
        <Link href={`/members/${member.slug}`} legacyBehavior>
          <a className="member-learnmore-btn">
            <div className="member-learnmore-btn__iconBox">
              <svg
                className="card-right-arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <circle className="cls-1" cx="10.06" cy="10.04" r="8.67" />
                <path
                  className="cls-2"
                  d="m10,20c5.52,0,10-4.48,10-10S15.52,0,10,0,0,4.48,0,10s4.48,10,10,10Zm-5.95-11h8.56l-2.27-2.26,1.41-1.41,4.74,4.73-4.74,4.73-1.41-1.41,2.38-2.37H4.05v-2h0Z"
                />
              </svg>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MemberCard;
