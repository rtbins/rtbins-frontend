import * as types from './actionType';
import courseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSES_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSES_SUCCESS, course };
}

export function loadCourses() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return courseApi
      .getAllCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        dispatch(ajaxCallError());
        throw error;
      });
  };
}

export function saveCourse(course) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        return course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        dispatch(ajaxCallError());
        throw error;
      });
  };
}
