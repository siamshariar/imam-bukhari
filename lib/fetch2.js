import { courses } from "../data/courses";
import { members, advisoryCouncils } from "../data/members";
import { faqs } from "../data/faqs";

// courses
const filterCourses = (items) => {
  let filtered = [];
  items.forEach((item) => {
    let obj = {
      id: item.id,
      imagePath: item.imagePath,
      title: item.title,
      code: item.code,
      slug: item.slug,
      excerpt: item.excerpt,
      description: item.description,
    };
    filtered.push(obj);
  });
  return filtered;
};

export const getHomeCourses = async () => {
  const items = courses.filter((item) => item.home === true);
  return filterCourses(items);
};

export const getAllCourses = async () => {
  return filterCourses(courses);
};

export const getCourseDetails = async (slug) => {
  const items = courses.filter((item) => item.slug === slug);
  return items[0];
};

// members
const filterMembers = (items) => {
  let filtered = [];
  items.forEach((item) => {
    let obj = {
      id: item.id,
      imagePath: item.imagePath,
      imageAlt: item.imageAlt,
      name: item.name,
      designation: item.designation,
      slug: item.slug,
      excerpt: item.excerpt,
      description: item.description,
      boardOfDirectorDesignation: item.boardOfDirectorDesignation || null,
    };
    filtered.push(obj);
  });
  return filtered;
};

export const getHomeMembers = async () => {
  const items = members.filter((item) => item.home === true);
  return filterMembers(items);
};

export const getBoardOfDirectors = async () => {
  const items = members.filter((item) => item.isBoardOfDirector === true);
  return filterMembers(items);
};

export const getAdvisoryCouncils = async () => {
  return advisoryCouncils;
};

export const getTeachers = async () => {
  const items = members.filter((item) => item.isTeacher === true);
  return filterMembers(items);
};

export const getAllMembers = async () => {
  return filterMembers(members);
};

export const getMemberDetails = async (slug) => {
  const items = members.filter((item) => item.slug === slug);
  return items[0];
};

// faqs
const filterFaqs = (items) => {
  let filtered = [];
  items.forEach((item) => {
    let obj = {
      id: item.id,
      question: item.question,
      answer: item.answer,
    };
    filtered.push(obj);
  });
  return filtered;
};

export const getHomeFaqs = async () => {
  const items = faqs.filter((item) => item.home === true);
  return filterFaqs(items);
};

export const getAllFaqs = async () => {
  return filterFaqs(faqs);
};
