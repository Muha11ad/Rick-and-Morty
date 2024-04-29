import "./SearchBar.scss"
export const SearchBar = () => {
  return (
    <div className="searchBar">
        <input className="search-input" type="text" placeholder="Search for characters" />
        <button className="search-btn">Search</button>
    </div>
    )
}
