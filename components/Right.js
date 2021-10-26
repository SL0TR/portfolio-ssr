import CoderIllustration from "../components/CoderIllustration";
import useParallax from "../libs/hooks/useParallax";

function Right() {

  const offsetY = useParallax()

  return (
    <div className="right">
      <CoderIllustration style={{ transform: `translateY(${offsetY * 0.5}px)` }} fill="#3498db" />
    </div>
  );
}

export default Right;
