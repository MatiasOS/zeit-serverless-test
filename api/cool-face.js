const cool = require('cool-ascii-faces');

module.exports = async (req, res) => {
    const { body } = req;
    console.log('body ->', body);
    const secret = process.env.SECRET_VALUE;

    res.status(200).json({ face: cool(), value: secret})
  }