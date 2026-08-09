import Link from "next/link";
import MemberCard from "../../cards/MemberCardSecondary";

export default function HomeMembers({ members, title = '' }) {
  return (
    <section id="members" className="properties">
      <div className="container">
        {!!title && <h3 className="home_section__title1">{title}</h3>}
        <div className="properties_wrapper col4">
          {members &&
            members.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
        </div>
      </div>


    </section>
  );
}
