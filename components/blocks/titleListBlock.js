export default function TitleListBlock({ title, lists, apiData }) {
  // Use API data if available, otherwise use static props
  const finalTitle = apiData?.title || title;
  const finalLists = apiData?.items ? apiData.items.map(item => item.item) : lists;

  return (
    <div className="titleListBlock">
      <div className="titleListBlock__wrapper container">
        <h3 className="titleListBlock__title">{finalTitle && finalTitle}</h3>
        <ul className="titleListBlock__list">
          {finalLists &&
            finalLists.map((listItem, index) => <li key={index}>{listItem}</li>)}
        </ul>
      </div>
    </div>
  );
}
