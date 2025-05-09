import React, { memo } from "react";
import styles from "./Pagination.module.css";

const Pagination = memo(
  ({
    totalCount,
    countPerPage,
    currentPage,
    onChangePage,
    portionNumber,
    setPortionNumber,
  }) => {
    const totalPages = Math.ceil(totalCount / countPerPage);
    const totalPortions = Math.ceil(totalPages / 10);
    const left = (portionNumber - 1) * 10 + 1;
    const right = portionNumber * 10;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return (
      <div className={styles.pagination}>
        {portionNumber > 1 && (
          <button
            className={styles.button}
            onClick={() => setPortionNumber(portionNumber - 1)}
          >
            Prev
          </button>
        )}

        {pages
          .filter((p) => p >= left && p <= right)
          .map((p) => (
            <button
              key={p}
              className={`${styles.button} ${
                p === currentPage ? styles.active : ""
              }`}
              onClick={() => onChangePage(p)}
            >
              {p}
            </button>
          ))}

        {portionNumber < totalPortions && (
          <button
            className={styles.button}
            onClick={() => setPortionNumber(portionNumber + 1)}
          >
            Next
          </button>
        )}
      </div>
    );
  },
  (prevProps, nextProps) =>
    JSON.stringify(prevProps) === JSON.stringify(nextProps)
);

export default Pagination;
