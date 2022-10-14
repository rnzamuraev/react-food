import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hello About</h1>
      <button
        className="btn btn-mr"
        onClick={() => navigate(-1)}
      >
        назад
      </button>
    </>
  );
}
