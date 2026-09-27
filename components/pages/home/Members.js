import MemberCard from "../../cards/MemberCardPrimary";

export default function HomeMembers({ members, title = "" }) {
  return (
    <section id="members" className="properties">
      <div className="container">
        {!!title && <h2>{title}</h2>}
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
