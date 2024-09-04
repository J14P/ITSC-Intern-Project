const { Sequelize } = require(`sequelize`);
const Assessment = require(`../database/models`);

exports.submit = async (assessment) => {
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
  console.log(`you made it to the assessment service`);
  console.log(assessment);
  await Sequelize.createSchema(`AssessmentDB`, Assessment);
  await Sequelize.create(assessment);
};

exports.getList = () => {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];
  Sequelize.model(`AssessmentDB`);

  return assessments;
};
