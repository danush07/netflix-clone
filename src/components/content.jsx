import "./content.css";
import axios from "axios";
import Row from "./Row";
import RowData from "../constants/urls";
import { useEffect, useState } from "react";export default function Content() {
  return (
    <div className='content-wrapper'>
      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />;
      })}
    </div>
  );
}

//6e2328b668ebf5e68ec5eafdefee28ac
