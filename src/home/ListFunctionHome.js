import { AiFillSchedule } from "react-icons/ai";
import { BiSolidReport } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import { IoTime } from "react-icons/io5";
import {
  RiBillFill,
  RiDashboardHorizontalFill,
  RiResetLeftFill,
} from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import colors from "../style/colors";
import { useState } from "react";

export const ListFunctionHome = () => {
  const items = [
    { Icon: RiDashboardHorizontalFill, title: "Dashboard" },
    { Icon: AiFillSchedule, title: "Schedule" },
    { Icon: RiResetLeftFill, title: "Shifts" },
    { Icon: BiSolidReport, title: "Reports" },
    { Icon: FaUser, title: "Providers" },
    { Icon: HiMiniChatBubbleLeftRight, title: "Chats" },
    { Icon: IoTime, title: "Time & Attendance" },
    { Icon: RiBillFill, title: "Billing" },
    { Icon: TiGroup, title: "Facility Users" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "25px",
        paddingLeft: "10px",
      }}
    >
      {items.map((item, index) => {
        const IconComponent = item.Icon;
        const isHovered = hoveredIndex === index;
        return (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 10px 10px 20px",
              borderRadius: "10px",
              backgroundColor: isHovered
                ? "rgba(190, 190, 190, 0.1)"
                : "transparent",
              transition: "background-color 0.2s ease",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <IconComponent
              color={isHovered ? colors.iconSelected : colors.iconUnSelected}
              style={{
                width: isHovered ? "21px" : "17px",
                height: isHovered ? "21px" : "17px",
                transition: "all 0.2s ease",
              }}
            />
            <span style={{ fontSize: "13px", color: "white" }}>
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};
