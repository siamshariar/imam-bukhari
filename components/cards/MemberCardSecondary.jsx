import Link from "next/link";

const MemberCard = ({ member }) => {
  return (
    // <div className="property" key={member.id}>
    //   <a href="/member-detail.html" className="property_link">
    //     <div className="property_img">
    //       <img src={member.imagePath} alt={member.imageAlt} />
    //     </div>
    //     <div className="property_content">
    //       <div className="property_header">
    //         <h3>{member.name}</h3>
    //         <div className="properties_grid_price">
    //           {member.designation}
    //         </div>
    //       </div>
    //       {/* <p className="property_address">
    //         3515 Ashbourne Circle, San Ramon, CA 94583
    //       </p> */}
    //       <p className="property_details">{member.excerpt}</p>
    //       <div className="properties_grid_footer">
    //         <span className="link">বিস্তারিত জানুন</span>
    //       </div>
    //     </div>
    //   </a>
    // </div>

    <div className="ex-com-item">
      <div className="ex-com-img">
        <Link href={`members/${member.slug}`} legacyBehavior>
          <a>
            <img src={member.imagePath} alt={member.imageAlt} />
          </a>
        </Link>
      </div>

      <div className="ex-com-detail">
        <h3>
          <Link href={`members/${member.slug}`} legacyBehavior>
            <a>{member.name}</a>
          </Link>
        </h3>
        <h4>{member.excerpt}</h4>
        {/*<ul className="ex-com-social">*/}
        {/*  <li>*/}
        {/*    <a className="facebook" href="#">*/}
        {/*      <i className="fab fa-facebook-f"></i>*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <a className="twitter" href="#">*/}
        {/*      <i className="fab fa-twitter"></i>*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*  <li>*/}
        {/*    <a className="linkedin" href="#">*/}
        {/*      <i className="fab fa-linkedin-in"></i>*/}
        {/*    </a>*/}
        {/*  </li>*/}
        {/*</ul>*/}
      </div>
    </div>
  );
};

export default MemberCard;
