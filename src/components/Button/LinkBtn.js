import { Link } from "react-router-dom";
import StandardBtn from "./StandardBtn";

export default function LinkBtn({ link, name }) {
  return (
    <Link to={link}>
      <StandardBtn name={name} />
    </Link>
  );
}
