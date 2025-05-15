import colors from "../style/colors";

export const ItemCredentialView = ({ title, quantity, onClick, selected = false }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        backgroundColor: selected ? colors.greyBg : "transparent",
        borderRadius: "8px",
        padding: "8px 10px 8px 10px",
        justifyContent: "space-between",
      }}
      onClick={onClick}
    >
      <p style={{ fontSize: "12px", fontWeight: "500" }}>{title}</p>
      <p
        style={{
          fontSize: "10px",
          color: selected ? colors.iconSelected : colors.greyDark,
          fontWeight: "600",
          backgroundColor: selected ? colors.blue30 : colors.greyBg,
          borderRadius: "7px",
          padding: "3px 8px 3px 8px",
        }}
      >
        {quantity}
      </p>
    </div>
  );
};
