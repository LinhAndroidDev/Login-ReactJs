import { GrFormAdd } from "react-icons/gr";
import colors from "../style/colors";
import { ListFunctionHome } from "./ListFunctionHome";
import { LuChevronsUpDown } from "react-icons/lu";

export const NavigationDrawer = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        marginRight: "30px",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <GrFormAdd
          color={colors.iconSelected}
          style={{ width: "40px", height: "40px" }}
        />
        <p
          style={{
            flex: "1",
            fontSize: "18px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Nursing Home
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: colors.iconUnSelected,
            borderRadius: "2px",
            marginLeft: "30px",
          }}
        >
          <LuChevronsUpDown
            color={colors.background}
            style={{ width: "16px" }}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "0.5px",
          backgroundColor: colors.iconSelected,
          marginLeft: "10px",
        }}
      />
      <ListFunctionHome />
    </div>
  );
};
