import { useNavigate } from "react-router-dom";

export function Contacts() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hello Contacts</h1>
      <button
        className="btn btn-mr"
        onClick={() => navigate(-1)}
      >
        назад
      </button>
    </>
  );
}
