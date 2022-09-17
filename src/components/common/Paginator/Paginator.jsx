import styles from "./paginator.module.css"
import React from "react";


const Paginator = (props) => {
    const {usersPageCount, pageSize, currentPage, onPageChanged} = props

    let pagesCount = Math.ceil(usersPageCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        if (i === 20) break;
    }

    return <>
        {pages.map((page, index) => <span
            key={index}
            className={currentPage === page && styles.selectedPage}
            onClick={(e) => {
                onPageChanged(page)
            }}>{page}</span>
        )}
    </>
}

export default Paginator;
