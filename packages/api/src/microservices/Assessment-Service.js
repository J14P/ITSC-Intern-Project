/* eslint-disable sort-keys */
/* eslint-disable no-console */
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

exports.getList = async () => {
  try {
    const assessments = await Assessment.findAll({
      where: { deletedAt: null },
    });
    return assessments;
  } catch (error) {
    console.error(`Unable to fetch assessments:`, error);
    throw error;
  }
};

exports.listAll = async () => {
  try {
    const assessments = await Assessment.findAll();
    return assessments;
  } catch (error) {
    console.error(`Unable to fetch all assessments`, error);
    throw error;
  }
};

exports.softDelete = async (assessmentId) => {
  try {
    console.log(`Deleting assessment: `, assessmentId);
    const result = await Assessment.update(
      { deletedAt: new Date() },
      { where: { id: assessmentId } },
    );
    return result;
  } catch (error) {
    console.error(`Unable to delete the assessment:`, error);
    throw error;
  }
};
