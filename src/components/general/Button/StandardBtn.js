import Button from "@mui/material/Button";

export default function StandardBtn({ classCss, name, ...props }) {
  return (
    <Button className={`btn btnPill ${classCss}`} {...props}>
      {name}
    </Button>
  );
}
