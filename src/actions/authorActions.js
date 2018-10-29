import * as types from './actionType';
// import authorApi from '../api/mockAuthorApi';
// import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return 1; /* authorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            dispatch(ajaxCallError());
        });
        */
  };
}
