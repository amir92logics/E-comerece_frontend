import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsSelector, getProducts } from './productsSlice';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import './products.css';

const Dashboard = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { isFetching, isError, products } = useSelector(productsSelector);
  useEffect(() => {
    dispatch(getProducts({ token: localStorage.getItem('token') }));
  }, []);
 console.log(products)
  return (
    <div className="container mx-auto">
      {isFetching ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      ) : (
        <Fragment>
          <div className="container mx-auto">
            All Products:
          </div>
         {products.length != 0 ? products.map((item, index) => {
          return(<div key={index} class="card">
  <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style={{width:'100%'}} />
  <h1>{item.name}</h1>
  <p class="price">{item.price}</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
  <p><button>Add to Cart</button></p>
</div>)}): null}

          
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
