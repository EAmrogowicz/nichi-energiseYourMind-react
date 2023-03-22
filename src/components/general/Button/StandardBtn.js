import Button from "@mui/material/Button";

export default function StandardBtn({ classCss, name }) {
  return <Button className={`btn btnPill ${classCss}`}>{name}</Button>;
}
