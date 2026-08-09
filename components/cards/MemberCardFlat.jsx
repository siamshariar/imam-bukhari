const MemberCard = ({ member }) => {
  return (
    <div className="property">
      <div className="property_box">
        {member.imagePath && <div className="property_img">
          <img src={member.imagePath} alt={member.imageAlt} />
        </div>}
        <div className="property_content property_content_wide">
          <div className="property_header">
            <h3>{member.name}</h3>
            <div className="properties_grid_price">{member.designation}</div>
          </div>
          <p className="property_details">{member.excerpt}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
