import { HiArrowLongLeft } from "react-icons/hi2";
import colors from "../style/colors";
import { GoHomeFill } from "react-icons/go";
import { GrNext } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmLogoutDialog } from "./ConfirmLogoutDialog";

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
  const [isHovered, setIsHovered] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    setShowConfirm(true);
  };

  const handleConfirm = () => {
    setShowConfirm(false);
    navigate(-1); // Quay lại trang trước
  };

  const handleCancel = () => {
    setShowConfirm(false); // Đóng dialog
  };

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
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            display: "inline-block",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.2s ease-in-out",
          }}
          onClick={handleBack}
        >
          <HiArrowLongLeft
            style={{
              width: "35px",
              height: "35px",
              backgroundColor: isHovered ? "#f0f0f0" : colors.greyBg,
              borderRadius: "10px",
              padding: "8px",
            }}
          />
        </div>
        <ConfirmLogoutDialog
          showConfirm={showConfirm}
          handleCancel={handleCancel}
          handleConfirm={handleConfirm}
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <FiSearch
          color={colors.greyDark}
          style={{ width: "20px", height: "20px" }}
        />
        <BsQuestionCircleFill
          color={colors.greyDark}
          style={{ width: "17px", height: "17px", marginLeft: "30px" }}
        />
        <IoNotifications
          color={colors.greyDark}
          style={{ width: "20px", height: "20px", marginLeft: "30px" }}
        />
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: colors.greyDivider,
            marginLeft: "20px",
          }}
          alt="Avatar"
        />
      </div>
    </div>
  );
}
