import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

export default function Logo() {
  return (
    <Card className="logo">
      <CardContent>
        <img
          src={process.env.PUBLIC_URL + "/NichiLogo4.png"}
          srcSet={process.env.PUBLIC_URL + "/NichiLogo4.png"}
          alt="Nichi Logo"
          loading="lazy"
        />
      </CardContent>
    </Card>
  );
}
