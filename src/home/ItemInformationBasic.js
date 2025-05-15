import colors from "../style/colors";

export const ItemInformationBasic = ({
  detail,
  title,
  hasMarginRight = "10px",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.greyBg,
        borderRadius: "8px",
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
        paddingTop: "10px",
        paddingBottom: "10px",
        marginRight: hasMarginRight,
      }}
    >
      <p style={{ fontSize: "16px", color: "black", fontWeight: "500" }}>
        {detail}
      </p>
      <p style={{ fontSize: "12px", color: colors.greyDark, marginTop: "8px" }}>
        {title}
      </p>
    </div>
  );
};
