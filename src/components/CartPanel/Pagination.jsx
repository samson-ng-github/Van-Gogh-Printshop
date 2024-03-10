import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../redux/cartSlice';

const Pagination = ({ totalPages, itemsPerPage }) => {
  const { currentPage } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  if (totalPages <= 1) return '';
  else
    return (
      <div id="cartPagination">
        {currentPage === 1 ? (
          ''
        ) : (
          <div
            className="pageButton"
            onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          >
            &#x3c;
          </div>
        )}

        {pages.map((pageNumber) => {
          return (
            <div
              key={pageNumber}
              className="pageButton"
              onClick={() => dispatch(setCurrentPage(pageNumber))}
              style={
                currentPage === pageNumber
                  ? { color: '#ffce01', backgroundColor: 'black' }
                  : { color: 'black', backgroundColor: '#ffce01' }
              }
            >
              {pageNumber}
            </div>
          );
        })}

        {currentPage === totalPages ? (
          ''
        ) : (
          <div
            className="pageButton"
            onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          >
            &#62;
          </div>
        )}
      </div>
    );
};
export default Pagination;
