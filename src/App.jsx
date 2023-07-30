import React, { useState } from 'react';
import './App.scss';
import AddCartButton from './components/AddCartButton';
import CartMenu from './components/CartMenu';
import Error from './components/Error';
import SizeButton from './components/SizeButton';
import Warning from './components/Warning';
import useFetch from './hooks/useFetch';

function App() {
  const { data, isError } = useFetch('live/product');
  const [sizeSelected, setSizeSelected] = useState(null);
  const [selectedItens, setSelectedItens] = useState([]);
  const [error, setError] = useState(false);

  const handleAddItem = () => {
    if (sizeSelected === null) {
      setError(true);
      return;
    }
    const isSizeSelected = selectedItens.find((item) => item.size === sizeSelected);
    if (isSizeSelected) {
      const newItens = selectedItens.map((item) => {
        if (item.size === sizeSelected) {
          return {
            ...item,
            total: item.total + 1,
          };
        }
        return item;
      });
      setSelectedItens(newItens);
      return;
    }

    setSelectedItens([...selectedItens, {
      name: data.title,
      total: 1,
      price: data.price,
      size: sizeSelected,
    }]);
  };

  const handleSizeSelected = (size) => {
    if (sizeSelected === size) {
      setSizeSelected(null);
      return;
    }
    setSizeSelected(size);
  };

  const handleCheckSize = (size) => sizeSelected === size;

  return (
    <div className="App">
      <head
        className="header"
        data-cy="header"
      >
        <CartMenu
          items={selectedItens}
        />
      </head>
      <main className="page">
        {isError ? <Error />
          : (
            <div
              className="page__content"
              data-cy="page-content"
            >
              <img
                src="/assets/classic-tee.jpg"
                alt="classic-tee"
                className="page__content__image"
                data-cy="product-image"
              />
              <div
                className="page__content__description"
                data-cy="page-content-description"
              >
                <h1
                  data-cy="title-product"
                >
                  {data?.title}
                </h1>
                <span
                  className="page__content__description--price"
                  data-cy="price-product"
                >
                  {`$ ${data?.price.toFixed(2)}`}
                </span>
                <p
                  className="page__content__description--text"
                  data-cy="description-product"
                >
                  {data?.description}
                </p>
                <span
                  className="page__content__description--size--title"
                  data-cy="size-product"
                >
                  Size
                  <span
                    className="required"
                  >
                    *
                  </span>
                  <b
                    data-cy="size-product-selected"
                  >
                    {` ${sizeSelected !== null ? sizeSelected : ''}`}
                  </b>
                </span>
                <div
                  className="page__content__description--size--buttons"
                  data-cy="size-product-buttons"
                >
                  {data?.sizeOptions.map((s) => (
                    <SizeButton
                      title={s.label}
                      onClick={() => handleSizeSelected(s.label)}
                      isActive={handleCheckSize(s.label)}
                    />
                  ))}
                </div>
                <AddCartButton
                  onClick={() => handleAddItem()}
                />
              </div>
            </div>
          )}
      </main>
      {error
        && (
          <Warning
            onClick={() => setError(false)}
            message="Please, select a size"
          />
        )}
    </div>
  );
}

export default App;
