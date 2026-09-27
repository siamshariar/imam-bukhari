export default function TitleListBlock({ title, lists, apiData }) {
  // Use API data if available, otherwise use static props
  const finalTitle = apiData?.title || title;
  const apiItems = apiData?.items?.map(item => item.item).filter(Boolean);
  const finalLists = apiItems && apiItems.length > 0 ? apiItems : lists;

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
