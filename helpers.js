module.exports = {
  getTokenNumber: async (db, visitDate) => {
    try {
      const checkQuery = 'SELECT COUNT(*) FROM ashram_visitors WHERE visit_date = $1';
      const checkResult = await db.query(checkQuery, [visitDate]);

      let token_number = 1;  // Default token if no entry found

      if (parseInt(checkResult.rows[0].count) > 0) {
        const tokenQuery = 'SELECT MAX(token_number) FROM ashram_visitors WHERE visit_date = $1';
        const tokenResult = await db.query(tokenQuery, [visitDate]);
        token_number = tokenResult.rows[0].max + 1;
      }

      return token_number;
    } catch (error) {
      throw error;
    }
  }
};
