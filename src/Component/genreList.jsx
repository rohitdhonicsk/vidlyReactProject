import React from "react";
const listOFGenre = (props) => {
  const { onGenreSelect, Genre, GenreId, GenreName, selectedGenre } = props;
  const it = { _id: "0", name: "All" };
  console.log(selectedGenre, it, selectedGenre === it);
  return (
    <ul className="list-group" style={{ color: "red" }}>
      {/* <li
        key={0}
        className={
          selectedGenre === it ? "list-group-item active" : "list-group-item"
        }
        onClick={() => onGenreSelect(it)}
      >
        All
      </li> */}
      {Genre.map((item) => (
        <li
          key={item[GenreId]}
          className={
            selectedGenre === item
              ? "list-group-item active"
              : "list-group-item "
          }
          onClick={() => onGenreSelect(item)}
        >
          {item[GenreName]}
        </li>
      ))}
    </ul>
  );
};
listOFGenre.defaultProps = {
  GenreId: "_id",
  GenreName: "name",
};

export default listOFGenre;
