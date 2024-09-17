const { AssessmentService } = require(`../microservices`);
const { ResponseHandler } = require(`../utils`);

const { Router } = require(`express`);

const assessmentRouter = Router();

assessmentRouter.post(
  `/submit`,
  async (req, res, next) => {
    try {
      const assessment = await AssessmentService.submit(req.body);
      // eslint-disable-next-line no-console
      console.log(`Submitting the Assessment`);
      // verify that your data is making it here to the API by using console.log(assessment);
      // call the AssessmentService.submit function from packages/api/src/microservices/Assessment-Service.js and
      // supply the correct parameters

      ResponseHandler(
        res,
        `Submitted assessment`,
        { assessment },
      );
    } catch (err) {
      next(err);
    }
  },
);

assessmentRouter.get(
  `/list`,
  async (req, res, next) => {
    try {
      // verify that your data is making it here to the API by using console.log();
      // call the AssessmentService.getList function from packages/api/src/microservices/Assessment-Service.js
      const assessments = await AssessmentService.getList();

      ResponseHandler(
        res,
        `Fetched assessments`,
        { assessments },
      );
    } catch (err) {
      next(err);
    }
  },
);

assessmentRouter.get(
  `/listAll`,
  async (req, res, next) => {
    try {
      const assessments = await AssessmentService.listAll();

      ResponseHandler(
        res,
        `Fetched all assessments`,
        { assessments },
      );
    } catch (err) {
      next(err);
    }
  },
);

assessmentRouter.patch(
  `/:id/delete`,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await AssessmentService.softDelete(id);
      if (result === 0) {
        return res.status(404).json({ message: `Assessment not found` });
      }
      ResponseHandler(
        res,
        `Assessment soft deleted`,
        { result },
      );
    } catch (err) {
      next(err);
    }
  },
);

module.exports = { assessmentRouter };
