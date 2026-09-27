import CourseCard from "../../cards/CourseCard";

const CoursesList = ({ courses }) => {
  return (
    <section id="courses" className="home_courses">
      <div className="container">
        <h3 className="home_section__title1">কোর্স সমূহ</h3>
        <h3 className="home_section__title1_sub">
          বর্তমান যুগের শ্রেষ্ঠ ইসলামী বিদ্যাপীঠ মদিনা ইসলামী বিশ্ববিদ্যালয়ের
          সিলেবাস ও কারিকুলাম অনুযায়ী- এর প্রাথমিক শিক্ষাক্রম ও পদ্ধতি
          নির্ধারিত হয়। সে আলোকে এই কুল্লিয়ায় নিম্নবর্ণিত ৬টি প্রোগ্রাম চালু
          করা হয়েছে।
          <br />
          <br />
          ইনশা-আল্লাহ উল্লিখিত সকল একাডেমিক কার্যক্রম, ছাত্র-শিক্ষক ও গবেষকদের
          ইলমী চাহিদা পূরণ করবে এবং মুসলিমদের সার্বিক উন্নয়ন এবং দ্বীন-দুনিয়ার
          সাথে সংশ্লিষ্ট সকল সমস্যার কুরআন-সুন্নাহ ভিত্তিক সমাধান দেওয়ার জন্যে
          বিশেষ অবদান রাখবে।
        </h3>
        <div className="courses_container">
          <div className="courses_list">
            {courses &&
              courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
