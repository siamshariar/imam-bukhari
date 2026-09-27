import CharSection from "../../ui/CharSection";

export default function Characteristics({ characteristicsKulliaData }) {
  // Use API data if available, otherwise use static data
  const apiData = characteristicsKulliaData;
  
  // Static fallback data structure that matches exactly the hardcoded data
  const defaultData = [
    {
      title: "কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ' এর বৈশিষ্ট্য",
      chars: [
        "মদীনা ইসলামী বিশ্ববিদ্যালয় ও আল-আযহার বিশ্ববিদ্যালয় হতে প্রখ্যাত ইসলামী বিশ্ববিদ্যালয়সমূহ হতে ডিগ্রিপ্রাপ্ত স্কলার ও শিক্ষাবিদগণের পাঠদান",
        "সৌদী আরবের সানাবিয়্যাহ কারিকুলাম ও সৌদী বিশ্ববিদ্যালয়সমূহের কারিকুলামের আলোকে প্রণীত শিক্ষাক্রম।",
        "উচ্চতর শিক্ষার পথ সুগম করার লক্ষ্যে আরবী ভাষায় দক্ষ করে তোলা",
        "আন্তর্জাতিক বিশ্ববিদ্যালয়সমূহের সাথে একাডেমিক ইকুইভ্যালেন্স",
        "উচ্চশিক্ষার জন্য সৌদি আরব, মিশর, মরক্কো, আলজেরিয়া, মালয়েশিয়া ও ইন্দোনেশিয়ার বিভিন্ন বিশ্ববিদ্যালয়ে স্কলারশিপ পেতে সহযোগিতা করা",
        "আলিমের সিলেবাসের সাথে সমন্বয় করে সানাবিয়্যার সিলেবাস তৈরি এবং বোর্ড পরীক্ষা দেওয়ার সুব্যবস্থা",
        "আরবীসহ একাধিক ভাষার বইসমৃদ্ধ ফিজিক্যাল এবং ডিজিটাল লাইব্রেরি",
        "ছাত্র ও ছাত্রী উভয়ের জন্য উচ্চশিক্ষা গ্রহণের সম্পূর্ণ পৃথক ব্যবস্থা থাকবে",
      ],
      reverse: true
    },
    {
      title: "কুল্লিয়াতুল কুরআনিল কারীম ওয়াদ-দিরাসাতিল ইসলামিয়্যাহ' এর শিক্ষামূলক কর্মসূচি",
      chars: [
        "কুল্লিয়া (স্নাতক)",
        "সানাবিয়্যাহ (উচ্চ মাধ্যমিক)",
        "আরবি ভাষা কোর্স",
        " শিক্ষক প্রশিক্ষণ কোর্স",
        "ডিপ্লোমা ও সার্টিফিকেট কোর্স",
        "রিসার্চ সেন্টার (গবেষণা কেন্দ্র)",
        "কো-কারিকুলার কার্যক্র",
      ],
      reverse: false
    }
  ];

  // Use API data if available, otherwise use static data
  // Note: API returns 'listItems' array, each with 'text' property containing the list item text
  const sections = apiData?.items ? apiData.items.map((item, index) => ({
    title: item.title,
    chars: item.listItems?.map(listItem => listItem.text).filter(Boolean) || [],
    reverse: index === 0 // First section has reverse=true, second has reverse=false
  })) : defaultData;

  return (
    <section className="home_char_section">
      <div className="center-line"></div>
      <div className="basic_paddings">
        <div className="container">
          {sections.map((section, index) => (
            <CharSection
              key={index}
              reverse={section.reverse}
              title={section.title}
              chars={section.chars}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
