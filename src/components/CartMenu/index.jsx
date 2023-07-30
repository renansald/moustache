import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './CartMenu.scss';

function CartMenu({ items }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const getTotalItens = () => items.reduce((acc, item) => acc + item.total, 0);

  return (
    <>
      <button
        className={`menu__button${anchorEl !== null ? '__active' : ''}`}
        data-cy="cart-menu"
        onClick={handleOpen}
        type="button"
      >
        <span
          className="menu__button__lg"
          data-cy="cart-button-lg"
        >
          {`Cart (${getTotalItens()})`}
        </span>
        <span
          className="menu__button__sm"
          data-cy="cart-button-sm"
        >
          <ShoppingCartIcon
            style={{ fontSize: '14px' }}
            data-cy="cart-icon"
          />
          {` (${getTotalItens()})`}
        </span>
      </button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleClose}
            data-cy="cart-item"
          >
            <div
              className="cart-item"
            >
              <img
                src="/assets/classic-tee.jpg"
                alt={item.name}
                style={{ width: '100px', height: '150px' }}
                data-cy="cart-item-image"
              />
              <div
                className="cart-item__description"
                data-cy="cart-item-description"
              >
                <span
                  data-cy="cart-item-name"
                >
                  {item.name}
                </span>
                <span
                  data-cy="cart-item-total"
                >
                  {item.total}
                  {' x '}
                  <b>
                    $
                    {item.price}
                  </b>
                </span>
                <span
                  data-cy="cart-item-size"
                >
                  Size:
                  {' '}
                  {item.size}
                </span>
              </div>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

CartMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CartMenu;
