import CourseCard from "../../cards/CourseCard";

export default function HomeCourses({ courses }) {
  return (
    <section id="courses" className="home_courses">
      <div className="container">
        <h3 className="home_section__title1">কোর্স সমূহ</h3>
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
}
