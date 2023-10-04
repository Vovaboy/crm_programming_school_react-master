import React, { FC } from 'react';
import ReactPaginate from 'react-paginate';

import css from './pagination.module.css';

interface IProps {
    pageCount: number;
    currentPage: number;
    onPageChange: (selectedPage: number) => void;
    isFirstPage: boolean;
    isLastPage: boolean;
}

const Pagination: FC<IProps> = ({ pageCount, currentPage, onPageChange }) => {

    const handlePageClick = (data: { selected: number }) => {
        onPageChange(data.selected + 1);
    };

    const goToFirstPage = () => {
        onPageChange(1); // Перехід на першу сторінку
    };

    return (
        <div className={css.pagination}>

            <ReactPaginate
                key={currentPage}
                pageCount={pageCount}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                onPageChange={handlePageClick}
                initialPage={currentPage - 1}
                className={'pagination'}
                activeClassName={css.active}
                nextLabel=">"
                previousLabel="<"
            />
        </div>
    );
};

export { Pagination };