// controllers/countEntriesController.js
const db = require('../db');

module.exports = {
  async countEntries(req, res) {
    const { date } = req.body;

    if (!date) {
      return res.status(400).send('Please provide a date in the body.');
    }

    try {
      const countQuery = 'SELECT COUNT(*) FROM ashram_visitors WHERE visit_date = $1';
      const countResult = await db.query(countQuery, [date]);

      return res.status(200).json({ count: parseInt(countResult.rows[0].count) });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).send('Internal Server Error');
    }
  },
};
