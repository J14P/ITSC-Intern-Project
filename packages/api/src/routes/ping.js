const { Router } = require(`express`);

const pingRouter = Router();

pingRouter.get(`/ping`, (req, res) => res.json({ ping: `pong` }));

module.exports = { pingRouter };
