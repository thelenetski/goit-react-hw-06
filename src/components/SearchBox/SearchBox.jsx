import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterNmae = useSelector(selectNameFilter);

  const onFilter = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={css.searchBox}>
      <p>Сontact search</p>
      <input
        type="text"
        name="search"
        value={filterNmae}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
