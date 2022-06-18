import React from "react";
import Pagination from "@mui/material/Pagination";

interface PaginationComponentProps {
  count: number;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({ count }) => {
  return <Pagination count={count} color="primary" />;
};

export default PaginationComponent;
