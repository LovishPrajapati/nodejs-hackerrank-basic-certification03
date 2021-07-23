module.exports = (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 3;
  const skip = ((page-1) * limit) || 0;
  const searchTerm = req.query.q;
  const search = new RegExp(searchTerm)

  req.context = {page,limit,skip,searchTerm,search}
  next();
};
