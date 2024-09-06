/* eslint-disable no-console */
/* eslint-disable sort-keys */
const { Sequelize } = require(`sequelize`);
const { sequelize } = new Sequelize(`ocat`, `postgres`, `postgres`, {
  host: `localhost`,
  dialect: `postgres`,
});
const Assessment = require(`../database/models/Assessment`);

sequelize
  .authenticate()
  .then(() => { console.log(`connected to the db.`); })
  .catch(err => { console.error(`Unable to connect to the database:`, err); });

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);
  });

exports.submit = async (assessment) => {
  // use the sequelize model Assessments from packages/api/src/database/models to save
  // the assessment data in the PostgreSQL database
  console.log(`you made it to the assessment-service`);
  await Assessment.create({
    instrument_type: assessment.instrument_type,
    score: assessment.score,
    risk_level: assessment.risk_level,
    cat_name: assessment.cat_name,
    cat_date_of_birth: assessment.cat_date_of_birth,
    created_at: assessment.created_at,
    updated_at: assessment.updated_at,
    deleted_at: assessment.deleted_at,
  });
};

exports.getList = () => {
  // use the sequelize model Assessments from packages/api/src/database/models to fetch
  // the assessment data from the PostgreSQL database
  const assessments = [];
  Sequelize.model(`AssessmentDB`);

  return assessments;
};
