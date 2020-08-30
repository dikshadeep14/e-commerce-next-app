import Data from '../../../public/mock/data.json';

const Details = (req, res) => {
  
  const id = req.query.id;
  res.statusCode = 200
  const data = Data.filter(item => {return item.id == id});
  res.json(data);
}

export default Details
