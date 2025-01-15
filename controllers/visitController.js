const db = require('../db');
const helpers = require('../helpers');

module.exports = {
  async handleVisit(req, res) {
    const { date, place } = req.body;
    console.log('Received request data:', { date, place });

    if (!date || !place) {
      return res.status(400).send('Please provide both date and place.');
    }

    try {
      const token_number = await helpers.getTokenNumber(db, date);

      const insertQuery = `
        INSERT INTO ashram_visitors (token_number, visit_date, place)
        VALUES ($1, $2, $3)
        RETURNING *;
      `;

      const insertResult = await db.query(insertQuery, [token_number, date, place]);
      
      return res.status(201).json(insertResult.rows[0]);

    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send('Internal Server Error');
    }
  }
};
