import ReactPaginate from 'react-paginate';

const Pagination = ({ total, onPageChange, itemsPerPage }) => {
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    const endOffset = newOffset + itemsPerPage;
    onPageChange(newOffset, endOffset);
  };

  return (
    <div className="navigation-bar">
      <ReactPaginate
        breakLabel="..."
        previousLabel={'← Prev'}
        nextLabel="Next →"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={Math.ceil(total / itemsPerPage)}
        containerClassName={'pagination'}
        previousLinkClassName={'waves-effect'}
        pageClassName={'waves-effect'}
        nextLinkClassName={'waves-effect'}
        disabledClassName={'disabled'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Pagination;
