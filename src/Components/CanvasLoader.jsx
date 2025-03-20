import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const progress = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p className="text-3xl font-bold text-black p-48">
        {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
      </p>
    </Html>
  );
}
