import { HiArrowLongLeft } from "react-icons/hi2";
import colors from "../style/colors";
import { GoHomeFill } from "react-icons/go";
import { GrNext } from "react-icons/gr";

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
      <Top />
    </div>
  );
};

function Top() {
  return (
    <div
      style={{
        padding: "20px",
        width: "100%",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: colors.greyDivider,
        display: "flex",
        alignItems: "start",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <HiArrowLongLeft
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: colors.greyBg,
            borderRadius: "10px",
            padding: "10px",
          }}
        />
        <div
          style={{
            width: "1px",
            height: "25px",
            backgroundColor: colors.greyDivider,
            marginLeft: "10px",
            marginRight: "10px",
          }}
        />
        <GoHomeFill
          color={colors.grey}
          style={{ width: "15px", height: "15px" }}
        />
        <GrNext
          color={colors.grey}
          style={{ width: "14px", height: "14px", marginLeft: "10px" }}
        />
        <p
          style={{
            fontSize: "13px",
            color: "grey",
            fontWeight: "500",
            marginLeft: "10px",
          }}
        >
          Providers
        </p>
        <GrNext
          color={colors.grey}
          style={{ width: "14px", height: "14px", marginLeft: "10px" }}
        />
        <p
          style={{
            fontSize: "13px",
            color: "black",
            fontWeight: "500",
            marginLeft: "10px",
          }}
        >
          Bessie Coooper
        </p>
      </div>
    </div>
  );
}
