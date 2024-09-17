/* eslint-disable no-console */
import Axios from '../utils/http.config';

export class AssessmentService {
  static submit(assessment) {
    try {
      // Choose the correct method, url, and data to send
      // in a request to the express packages/api/src/routes/assessment.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      return Axios.post(`/assessment/submit`, assessment)
        .then(response => response.data);
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }

  static getList() {
    try {
      // Choose the correct method, url, and data to send
      // in a request to the express packages/api/src/routes/assessment.js
      // NOTE: the http.config file automatically adds /api to the front of your url
      return Axios.get(`/assessment/list`, {
        params: {
        },
      })
        .then(response => response.data.data.assessment);
    }
    catch (err) {
      throw new Error(`${err.response.statusText} - ${err.response.data.message}`);
    }
  }

  static deleteAssessment(assessmentId) {
    return Axios.patch(`/assessment/${assessmentId}/delete`)
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch(err => {
        console.error(err);
        throw new Error(`${err.response?.statusText ||
          `Error`} - ${err.response?.data?.message || `An error occurred`}`);
      });
  }
}
