const { Contact } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const result = await Contact.find({});
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
