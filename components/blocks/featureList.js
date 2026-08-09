export default function FeatureList({ title, para, list, mosqueComplexData }) {
  // Use API data if available, otherwise use static props
  const apiData = mosqueComplexData;
  
  const finalTitle = apiData?.title || title;
  const finalPara = apiData?.details || para;
  const finalList = apiData?.items ? apiData.items.map(item => item.title) : list;

  return (
    <div className="featureList">
      <div className="featureList__wrapper container">
        <h2 className="featureList__title">{finalTitle && finalTitle}</h2>
        <p className="featureList__para">{finalPara && finalPara}</p>
        <ul className="featureList__list">
          {finalList &&
            finalList.map((item, index) => (
              <li key={index}>
                <div className="featureList__iconBox">
                  <svg
                    className="featureList__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 20 20"
                  >
                    <defs></defs>
                    <circle className="cls-1" cx="10.06" cy="10.04" r="8.67" />
                    <path
                      className="cls-2"
                      d="m10,20c5.52,0,10-4.48,10-10S15.52,0,10,0,0,4.48,0,10s4.48,10,10,10Zm-5.95-11h8.56l-2.27-2.26,1.41-1.41,4.74,4.73-4.74,4.73-1.41-1.41,2.38-2.37H4.05v-2h0Z"
                    />
                  </svg>
                </div>
                <div className="featureList__listItem">{item}</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
