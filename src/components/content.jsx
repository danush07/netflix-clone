import "./content.css";
import Row from "./Row";
import RowData from "../constants/urls";

export default function Content() {
  return (
    <div className='content-wrapper'>
      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />;
      })}
    </div>
  );
}

//6e2328b668ebf5e68ec5eafdefee28ac
