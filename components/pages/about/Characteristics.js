import CharSection from "../../ui/CharSection";

export default function Characteristics({ characteristics }) {
  return (
    <section className="home_char_section">
      <div className="center-line"></div>
      <div className="basic_paddings">
        <div className="container">
        {characteristics?.items?.map((char, index) => (
            <CharSection
              key={char.id}
              reverse={index % 2 === 0}
              title={char.title}
              chars={char.listItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
