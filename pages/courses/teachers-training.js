import { getCourseDetails } from "../../lib/fetch3";
import CourseDetailTemplate from "../../components/pages/courses/CourseDetailTemplate";

const fallbackSections = [
  {
    title: "ভর্তির শর্তাবলী",
    chars: [
      "কুল্লিয়া স্তরে ভর্তির জন্য সানাবিয়্যাহ/আলিম/মেশকাত/এইচএসসি পাশ হতে হবে।",
      "শিক্ষার্থীকে অবশ্যই চরিত্রবান ও আদব-কায়দা সম্পন্ন হতে হবে।",
      "পূর্ববর্তী সকল সনদপত্র ও নম্বরপত্র সত্যায়ন করে আবেদন পত্রের সাথে জমা দিতে হবে।",
      "ভর্তি পরীক্ষায় উত্তীর্ণ হতে হবে।",
      "পূর্ণকালীন শিক্ষার্থী হিসেবে ভর্তি হতে হবে।",
      "ক্লাসে শতভাগ উপস্থিত নিশ্চিত করতে হবে।",
      "কুল্লিয়ার নিয়ম-কানুন ও সকল নির্দেশনা মেনে চলতে হবে।",
    ],
  },
  {
    title: "প্রত্যাশিত প্রাপ্তি",
    chars: [
      "ইসলামী শারিয়া জ্ঞান ও আরবি ভাষায় পূর্ণ দক্ষতা অর্জন।",
      "কমপক্ষে ৫ পারা কুরআন হিফয করা।",
      "বিষয়ভিত্তিক হাদিস হিফয করা।",
      "বিভিন্ন সফটস্কিল শেখা এবং তা জীবনে প্রয়োগ করতে পারা ।",
      "বহুমূখী দক্ষতা বৃদ্ধির জন্য বক্তৃতা, বিতর্ক ও লেখনীর ক্ষেত্রে প্রশিক্ষণ।",
      "একাডেমিক ও সাংস্কৃতিক প্রতিযোগিতার মাধ্যমে শিক্ষার্থীদের সৃজনশীলতার বিকাশ।",
      "উচ্চতর ডিগ্রি অর্জনের জন্য বিশ্বের স্বনামধন্য বিশ্ববিদ্যালয়ের সাথে ক্রেডিট ট্রান্সফার।",
    ],
  },
];

export default function CourseDetail({ details }) {
  return (
    <CourseDetailTemplate
      details={details}
      fallbackTitle="শিক্ষক প্রশিক্ষণ কোর্স"
      fallbackSections={fallbackSections}
    />
  );
}

export async function getStaticProps({ params }) {
  const slug = "teachers-training";
  const details = await getCourseDetails(slug);

  return {
    props: {
      details,
    },
    revalidate: 60,
  };
}
