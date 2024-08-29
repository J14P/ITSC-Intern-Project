import sequelize from 'sequelize';
import { Assessment } from '../database/models';

exports.submit = async (assessment) => {
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
  await sequelize.createSchema(`AssessmentDB`, Assessment);
  await sequelize.create(assessment);
};

exports.getList = () => {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];
  sequelize.model(`AssessmentDB`);

  return assessments;
};
