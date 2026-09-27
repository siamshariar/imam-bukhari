import parse from "html-react-parser";
import { apiServer } from "../../lib/config";

export default function Features({ data, mosqueMainActivitiesData, kulliaMainActivitiesData }) {
  // Use API data if available, prioritize kullia data for kulliya page, otherwise use mosque data
  const apiData = kulliaMainActivitiesData || mosqueMainActivitiesData;
  
  const finalData = apiData ? {
    intro: {
      arabic: apiData.arabicTitle || data?.intro?.arabic || "",
      arabicBangla: apiData.bnText || data?.intro?.arabicBangla || "",
      ref: apiData.ref || data?.intro?.ref || "",
      title: apiData.title || data?.intro?.title || ""
    },
    features: (apiData.features || apiData.activities || []).map(activity => ({
      id: activity.id,
      iconURL: activity.image ? `${activity.image.url}` : "/img/icons/layer.png",
      iconAlt: activity.image?.alt || activity.title || "",
      text: activity.title
    })) || data?.features || []
  } : data;

  const { intro, features } = finalData || { intro: {}, features: [] };
  return (
    <div className="bukhari-features">
      <div className="bukhari-features__intro container">
        <h3 className="bukhari-features__arabic">{intro.arabic}</h3>
        <h4 className="bukhari-features__arabic-bangla">
          {intro.arabicBangla}
        </h4>
        <p className="bukhari-features__ref">{parse(intro.ref)}</p>
        <h2 className="bukhari-features__title">{intro.title}</h2>
      </div>
      <div className="bukhari-features__columns container">
        {features &&
          features.map((feature) => (
            <div className="bukhari-features__wrapper" key={feature.id}>
              <Feature data={feature} />
            </div>
          ))}
      </div>
    </div>
  );
}

const Feature = function ({ data }) {
  return (
    <div className="bukhari-feature">
      <div className="bukhari-feature__icon">
        <img src={data.iconURL} alt={data.iconAlt} />
      </div>
      <p className="bukhari-feature__text">{data.text}</p>
    </div>
  );
};
