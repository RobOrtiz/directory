import React, { useContext } from "react";
import "./NameSearch.css";
import EmployeeDataContext from "../../utils/EmployeeDataContext";

const NameSearch = () => {
    const context = useContext(EmployeeDataContext);

    return (
        <div className="searchField">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                 </button>
            </form>
        </div>
    );
}
export default NameSearch;