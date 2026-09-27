import { getCourseDetails } from "../../lib/fetch3";
import CourseDetailTemplate from "../../components/pages/courses/CourseDetailTemplate";

const fallbackSections = [
  {
    title: "কোর্স পরিচিতি",
    chars: [
      "আরবি ভাষায় দক্ষতা অর্জনের লক্ষ্যে কুল্লিয়াতুল কুরআনিল কারীম-এর আরবি ভাষা ইনস্টিটিউট ‘দাওরাতুল লুগা আল-আরাবিয়্যাহ আল-‘আম্মাহ’ (জেনারেল অ্যারাবিক ল্যাঙ্গুয়েজ কোর্স) অফার করেছে।",
      "জেনারেল অ্যারাবিক ল্যাঙ্গুয়েজ কোর্সটি ১ বছর মেয়াদী, ৪ মাসের তিন সেমিস্টারে বিভক্ত।",
      "প্রথম সেমিস্টারে প্রায় ১৩৫ টি ক্লাস, দ্বিতীয় সেমিস্টারে প্রায় ১৩৫ টি ক্লাস এবং তৃতীয় সেমিস্টারে প্রায় ১৪০ টি ক্লাস।",
      "প্রতিদিন ৩ ঘন্টা করে সপ্তাহে ৩ দিন ক্লাস, প্রতিটি ক্লাসের ব্যাপ্তি ১ ঘন্টা।                  ",
      "কুল্লিয়াতুল কুরআনিল কারীম-এর ক্যাম্পাসে উপস্থিত থেকে সরাসরি ক্লাস।",
      "কোর্সের টেক্সট বুক প্রদান।",
      "সাফল্যের সাথে কোর্স সমাপ্তির পর সার্টিফিকেট প্রদান।",
    ],
  },
  {
    title: "ভর্তির যোগ্যতা",
    chars: [
      "জেনারেল অ্যারাবিক ল্যাঙ্গুয়েজ কোর্সে ভর্তির জন্য আরবি ভাষার প্রাথমিক ও মৌলিক জ্ঞান থাকতে হবে।",
    ],
  },
];

const fallbackFee = [
  { title: "ভর্তি ফি", amount: "৫০০০/" },
  { title: "সেমিস্টার ফি", amount: "২০,০০০/- (৫০০০ x 4)" },
];

export default function CourseDetail({ details }) {
  return (
    <CourseDetailTemplate
      details={details}
      fallbackTitle="জেনারেল অ্যারাবিক ল্যাঙ্গুয়েজ কোর্স"
      fallbackSections={fallbackSections}
      fallbackFee={fallbackFee}
      feeNote="প্রথম ৩০ জনের জন্য ৫০% - ৬০% ছাড়।"
      admissionLink="https://forms.gle/StKr9sHnQUhz2i3c6"
      admissionNote="কুল্লিয়ার অফিস থেকেও ভর্তি ফরম সংগ্রহ করা যাবে।"
    />
  );
}

export async function getStaticProps({ params }) {
  const slug = "general-arabic-language";
  const details = await getCourseDetails(slug);

  return {
    props: {
      details,
    },
    revalidate: 60,
  };
}
