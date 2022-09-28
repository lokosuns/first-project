import styles from "./paginator.module.css"
import React, {useEffect, useState} from "react";
import cn from "classnames";


const Paginator = (props) => {
    const {totalItemCount, pageSize, currentPage, onPageChanged, portionSize = 10} = props

    const pagesCount = Math.ceil(totalItemCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    useEffect(() => setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage])

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return <>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>Назад</button>}
        {pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map((page, index) => {
                return <span
                    key={index}
                    className={ cn ({[styles.selectedPage]: currentPage === page},styles.pageNumber)}
                    onClick={(e) => {
                        onPageChanged(page)
                    }}>{page}</span>
            })}
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>Вперед</button>}
    </>
}

export default Paginator;
