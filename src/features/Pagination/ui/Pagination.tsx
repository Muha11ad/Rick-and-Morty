//imports start
import { FC } from "react";
import ReactPaginate from "react-paginate";
import { useAppDispatch} from "../../../shared/store/store.js";
import { getPage } from "../model/PaginationSlice.js";
import "./Pagination.scss";
//imports end

interface PaginationProps {
	pageCount?: any;
}
export const Pagination: FC<PaginationProps> = ({ pageCount }) => {
	const dispatch = useAppDispatch();
	return (
		<ReactPaginate
			pageCount={pageCount}
			pageClassName="page-item"
			pageLinkClassName="page-link"
			className="pagination__list"
			previousLinkClassName="previos-link"
			previousClassName="previos-btn"
			nextClassName="next-btn"
			nextLinkClassName="next-link"
			disabledClassName="disabled-btn"
			activeClassName="active-link"
			onPageChange={(selectedPage: { selected: number }) => {
				dispatch(getPage(selectedPage.selected + 1));
			}}
		/>
	);
};
