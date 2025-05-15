import { AiOutlineEllipsis } from "react-icons/ai";
import { ItemInformationBasic } from "./ItemInformationBasic";
import colors from "../style/colors";

export const InformationBodyView = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBlockColor: colors.greyDivider,
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          width: "100%",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://watermark.lovepik.com/photo/20211210/large/lovepik-youth-female-nurse-professional-image-picture_501779592.jpg"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "15px",
              alignItems: "start",
            }}
          >
            <div style={{ display: "flex" }}>
              <p
                style={{ fontSize: "18px", color: "black", fontWeight: "500" }}
              >
                Bessie Cooper
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgb(240, 100, 0)",
                  fontWeight: "500",
                  backgroundColor: "rgba(216, 90, 0, 0.1)",
                  borderRadius: "8px",
                  padding: "0px 10px 0px 10px",
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                LPN
              </p>
            </div>
            <p
              style={{
                fontSize: "12px",
                color: colors.greyDark,
                marginTop: "5px",
              }}
            >
              Rehabilitation
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AiOutlineEllipsis
            color={colors.greyDark}
            style={{
              width: "35px",
              height: "35px",
              backgroundColor: colors.greyBg,
              borderRadius: "10px",
              padding: "5px",
            }}
          />
          <div
            style={{
              width: "1px",
              height: "25px",
              backgroundColor: colors.greyDivider,
              marginLeft: "10px",
            }}
          />
          <p
            style={{
              fontSize: "14px",
              color: "black",
              fontWeight: "500",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            Reject
          </p>
          <button
            style={{
              fontSize: "14px",
              color: "white",
              fontWeight: "500",
              backgroundColor: colors.iconSelected,
              padding: "8px 15px 8px 15px",
              borderRadius: "8px",
              border: "none",
            }}
          >
            Approve Request
          </button>
        </div>
      </div>
      <ListInformationBasicUser />
    </div>
  );
};

function ListInformationBasicUser() {
  return (
    <div style={{ display: "flex", marginLeft: "20px", marginRight: "20px" }}>
      <ItemInformationBasic detail="100%" title="Attendance Score" />
      <ItemInformationBasic detail="4.5/5" title="Evaluation Rating" />
      <ItemInformationBasic detail="120:34" title="Hours Worked" />
      <ItemInformationBasic detail="99%" title="On-time Rate" />
      <ItemInformationBasic detail="100" title="Shifts Completed" />
      <ItemInformationBasic
        detail="99%"
        title="Show Rate"
        hasMarginRight="0px"
      />
    </div>
  );
}
