import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <Link href={`/courses/${course.slug}`} legacyBehavior>
      <a className="course_item">
        <div className="course_item_wrap">
          <h3>
            <span>{course.title}</span>
          </h3>
          <div className="course_item_text">{course.excerpt}</div>
          <div className="course_item_icon_wrap">
            <div className="course_item_icon">
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CourseCard;
