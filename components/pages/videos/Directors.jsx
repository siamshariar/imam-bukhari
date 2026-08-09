import MemberCard from "../../cards/MemberCardPrimary";

export default function HomeMembers({ members }) {
  return (
    <section id="members" className="properties">
      <div className="container">
        <h3 className="home_section__title1">পরিচালনা পর্ষদ</h3>
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
