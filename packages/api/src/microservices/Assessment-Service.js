
/* eslint-disable sort-keys */
const { Assessment } = require(`../database/models`);

exports.submit = async (assessment) => {
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
  await Assessment.create({
    instrumentType: assessment.instrumentType,
    score: assessment.score,
    riskLevel: assessment.riskLevel,
    catName: assessment.catName,
    catDateOfBirth: assessment.catDateOfBirth,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};

exports.getList = () => {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database
  const assessments = Assessment.findAndCountAll({
    attributes: [ `id`, `catName`, `catDateOfBirth`, `instrumentType`, `score`, `createdAt`, `updatedAt` ],
    order: [[ `createdAt`, `DESC` ]],
  });

  return assessments;
};
