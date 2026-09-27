import { getCourseDetails } from "../../lib/fetch3";
import CourseDetailTemplate from "../../components/pages/courses/CourseDetailTemplate";

const fallbackSections = [
  {
    title: "কোর্স পরিচিতি",
    chars: [
      "আরবি ভাষায় দক্ষতা অর্জনের লক্ষ্যে কুল্লিয়াতুল কুরআনিল কারীম-এর আরবি ভাষা ইনস্টিটিউট ‘দাওরাতুল লুগা আল-আরাবিয়্যাহ লিল আগরাদ আল-একাডেমিয়্যাহ' (একাডেমিক অ্যারাবিক ল্যাঙ্গুয়েজ কোর্স) অফার করেছে।",
      "অ্যারাবিক ল্যাঙ্গুয়েজ কোর্সটি ১ বছর মেয়াদী, ৬ মাসের দুই সেমিস্টারে বিভক্ত।",
      "প্রথম সেমিস্টারে প্রায় ৩০০ টি ক্লাস এবং দ্বিতীয় সেমিস্টারে প্রায় ৩৮০ টি ক্লাস।",
      "প্রতিটি ক্লাসের ব্যাপ্তি ১ ঘন্টা করে সপ্তাহে ৫ দিন ক্লাস।                  ",
      "কুল্লিয়াতুল কুরআনিল কারীম-এর ক্যাম্পাসে উপস্থিত থেকে সরাসরি ক্লাস।",
      "কোর্সের টেক্সট বুক প্রদান।",
      "সাফল্যের সাথে কোর্স সমাপ্তির পর সার্টিফিকেট প্রদান।",
      "আরবি ভাষা কোর্স সমাপ্ত করার পর শিক্ষাগত যোগ্যতা অনুযায়ী সানাবিয়্যাহ কিংবা কুল্লিয়ার স্তরে ভর্তির সুযোগ রয়েছে।",
    ],
  },
  {
    title: "ভর্তির যোগ্যতা",
    chars: [
      "একাডেমিক অ্যারাবিক ল্যাঙ্গুয়েজ কোর্সে ভর্তির জন্য দাখিল/ মুতাওয়াসসিতাহ/ কাফিয়া পর্যায়ের জ্ঞান থাকতে হবে ।",
    ],
  },
];

const fallbackFee = [
  { title: "ভর্তি ফি", amount: "৫০০০/" },
  { title: "সেমিস্টার ফি", amount: "৩০,০০০/- (৫০০০ x ৬)" },
];

export default function CourseDetail({ details }) {
  return (
    <CourseDetailTemplate
      details={details}
      fallbackTitle="একাডেমিক অ্যারাবিক ল্যাঙ্গুয়েজ কোর্স"
      fallbackSections={fallbackSections}
      fallbackFee={fallbackFee}
      feeNote="প্রথম ৩০ জনের জন্য ৫০% ছাড়।"
      admissionLink="https://forms.gle/StKr9sHnQUhz2i3c6"
      admissionNote="কুল্লিয়ার অফিস থেকেও ভর্তি ফরম সংগ্রহ করা যাবে।"
    />
  );
}

export async function getStaticProps({ params }) {
  const slug = "academic-arabic-language";
  const details = await getCourseDetails(slug);

  return {
    props: {
      details,
    },
    revalidate: 60,
  };
}
