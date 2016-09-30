// import QuestionApi from '../api/mockQuestionApi';
// import * as types from './actionTypes';
// import {initiateAjaxRequest} from './ajaxStatusActions';

// export function loadQuestionsSuccess(questions) {
//     return {type: types.LOAD_QUESTIONS_SUCCESS, questions};
// }

// export function loadQuestions() {
//     return dispatch => {
//         dispatch(initiateAjaxRequest());
//         return QuestionApi.getAllQuestions().then(questions => {
//             dispatch(loadQuestionsSuccess(questions));
//         }).catch(error => {
//             throw(error);
//         });
//     };
// }