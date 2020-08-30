import Data from '../../public/mock/data.json'

const Products = (req, res) => {
  res.statusCode = 200
  // const newData = Array.from(new Set(Data.map(x => x.category)))
  // .map(category => {
  //   return {
  //     category: category,
  //     id: Data.find(s => s.category === category).id,
  //     image: Data.find(s => s.category === category).image,
  //   };
  // });
  res.json(Data);
}

export default Products
