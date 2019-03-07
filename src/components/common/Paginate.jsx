import React from 'react';
import _ from 'lodash';

const Pagination = ({ productCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(productCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  if (pageSize.length === 1) {
    return null;
  }

  return (
    <div className="pagination">
      <div className="ui pagination menu">
        {pages.map(page => {
          return (
            <a
              key={page}
              onClick={() => onPageChange(page)}
              className={currentPage === page ? 'active item' : 'item'}
            >
              {page}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
