import { ViewBodyHome } from "./ViewBodyHome";
import { ViewTopHome } from "./ViewTopHome";

export const ContentHome = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: "5",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: "20px",
        alignItems: "start",
      }}
    >
      <ViewTopHome />
      <ViewBodyHome />
    </div>
  );
};
