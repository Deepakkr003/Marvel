import { useNavigate } from "react-router-dom";

export default function BackButton({
  className = "",
  fallbackHref = "/timeline",
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallbackHref);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className={className}
    >
      ← Back
    </button>
  );
}