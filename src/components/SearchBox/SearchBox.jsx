import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const onFilter = (value) => {
    dispatch(setStatusFilter(value));
  };

  return (
    <div className={css.searchBox}>
      <p>Сontact search</p>
      <input
        type="text"
        name="search"
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
