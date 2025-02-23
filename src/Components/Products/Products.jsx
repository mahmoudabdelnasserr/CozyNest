import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { getProducts } from '../../redux/productsSlice';
import { CartContext } from '../../stores/CartContext';

export default function Products() {
  let { products, isLoading } = useSelector((store) => store.productReducer);
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { addItemToCart } = useContext(CartContext);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);


  useEffect(() => {
    if (searchInput.trim() === '') {
      setFilteredProducts(products); 
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchInput, products]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='flex p-4 w-full justify-center'>
            <input
              placeholder='Search for products'
              className='p-2 w-full md:w-1/2 border rounded-sm focus:border-gray'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="flex flex-col md:flex-wrap md:flex-row gap-y-4 py-8 justify-center">
            {filteredProducts.length > 0 ? (
              filteredProducts?.map((product) => (
                <div key={product.id} className="w-full md:w-1/6 p-4">
                  <div className="product p-2 rounded-lg">
                    <Link to={`/productdetails/${product.id}`}>
                      <img
                        src={product.imageCover}
                        className="w-full"
                        alt={product.title}
                      />
                      <p className="text-sm text-main">{product.category.name}</p>
                      <h3 className="text-xl">
                        {product.title.split(' ').slice(0, 2).join(' ')}
                      </h3>
                      <div className="flex justify-between">
                        <span>{product.price}</span>
                        <span>
                          <i className="fas fa-star rating-color"></i>
                          {product.ratingsAverage}
                        </span>
                      </div>
                    </Link>
                    <button
                      onClick={() => addItemToCart(product.id)}
                      className="btn w-full"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No products found, try another search keywords</p>
            )}
          </div>
        </>
      )}
    </>
  );
}
