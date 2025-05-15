import { IoMdClose } from "react-icons/io";
import colors from "../style/colors";
import { MdDone } from "react-icons/md";
import { AiOutlineEllipsis } from "react-icons/ai";
import { IoBook } from "react-icons/io5";
import { FcAlarmClock } from "react-icons/fc";
import { BiSolidCalendarCheck, BiSolidReport } from "react-icons/bi";
import { TbArrowBarToDown } from "react-icons/tb";

export const ItemLicencesView = ({ ok = false }) => {
  const IconDone = ok ? MdDone : IoMdClose;
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        backgroundColor: colors.greyBg,
        borderRadius: "10px",
        padding: "15px",
        marginTop: "20px",
        marginRight: ok ? "15px" : "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
          borderBottomWidth: "1px",
          borderBottomColor: colors.grey,
          borderBottomStyle: "dashed",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ fontSize: "16px", color: "black", fontWeight: "500" }}>
            Georgia State CNA License
          </p>
          <div
            style={{
              display: "flex",
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor: ok ? colors.green : colors.grey,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "5px",
            }}
          >
            <IconDone color="white" style={{ width: "10px", height: "10px" }} />
          </div>
        </div>
        <AiOutlineEllipsis
          color={colors.greyDark}
          style={{ width: "20px", height: "20px" }}
        />
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <ViewDetailLicense
          IconDetail={IoBook}
          title="license"
          detail="CN000405013"
        />
        <ViewDetailLicense
          IconDetail={FcAlarmClock}
          title="days"
          detail="455"
        />
      </div>
      <div style={{ display: "flex", marginTop: "20px", marginBottom: "20px" }}>
        <ViewDetailLicense
          IconDetail={BiSolidCalendarCheck}
          title="issue date"
          detail="12/03/2023"
        />
        <ViewDetailLicense
          IconDetail={BiSolidCalendarCheck}
          title="expiry date"
          detail="12/03/2023"
        />
      </div>
      <div style={{ display: "flex" }}>
        <BiSolidReport
          color={colors.iconSelected}
          style={{ width: "15px", height: "15px" }}
        />
        <p
          style={{
            fontSize: "13px",
            color: colors.iconSelected,
            fontWeight: "500",
            marginLeft: "5px"
          }}
        >
          GA_CNA_-_Bessie Cooper_Exp_03212025.pdf
        </p>
        <TbArrowBarToDown
          color={colors.iconSelected}
          style={{ width: "15px", height: "15px", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
};

function ViewDetailLicense({ IconDetail, title, detail }) {
  return (
    <div
      style={{
        display: "flex",
        flex: "1",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <div style={{ display: "flex", alignContent: "center" }}>
        <IconDetail
          color={colors.greyDark}
          style={{ width: "15px", height: "15px" }}
        />
        <p
          style={{
            fontSize: "11px",
            color: colors.greyDark,
            marginLeft: "5px",
            textTransform: "uppercase",
          }}
        >
          {title}
        </p>
      </div>
      <p style={{ fontSize: "12px", color: "black", marginTop: "3px" }}>
        {detail}
      </p>
    </div>
  );
}
