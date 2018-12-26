import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = (props) => {
    const {itemsCount, size, onPageChange, currentPage} = props;
    const pagesCount = Math.ceil(itemsCount / size);
    if(pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    return <nav>
        <ul className="pagination">
            { pages.map(page => (
                <li className = { page === currentPage ? "page-item active" : "page-active"} key = {page}>
                    <a 
                        className="page-link" 
                        onClick = { () => onPageChange(page)}>{ page }</a>
                </li>
            ))}
        </ul>
    </nav>;
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}
 
export default Pagination;