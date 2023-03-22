import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function StandardBtn({ classCss, link, name }) {
  return (
    <Button className={classCss}>
      <Link to={link} className="btn">
        {name}
      </Link>
    </Button>
  );
}
