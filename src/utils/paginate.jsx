import _ from "lodash";
export default function paginate(items, pageSize, pageNumber) {
  const startIndex = pageSize * (pageNumber - 1);

  // const newd = items.slice(startIndex, startIndex + pageSize);
  // return newd;
  return _(items).slice(startIndex).take(pageSize).value();
}
