module.exports = async (req, res) => {
    const { body, query, cookies } = req;
    res.status(200).json({ body, query, cookies });
  }