import Data from '../../../public/mock/data.json';

const SearchTerm = (req, res) => {
  
  const term = req.query.term;
  res.statusCode = 200
  const data = Data.filter(item => {return item.title.includes(term) || item.category.includes(term)})
  const result = data.map(item => {
    delete item.category
    return item;
  })
  res.json(result);
}

export default SearchTerm
