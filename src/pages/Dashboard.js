import PageContainer from "../components/general/PageContainer";
import PageTitle from "../components/general/Typography/Title";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const username = JSON.parse(localStorage.getItem("userData")).username;
  const navigate = useNavigate();

  if (localStorage.getItem("userData") === null) {
    navigate("/user-login");
  }
  return (
    <PageContainer>
      <div>
        <PageTitle text={`Hello, ${username}`} />
      </div>
    </PageContainer>
  );
}
