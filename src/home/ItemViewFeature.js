import React from "react";

const ItemViewFeature = ({ IconComponent, title, isHovered, onMouseEnter, onMouseLeave, colorHover, colorNormal, bgColorHover }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: isHovered ? bgColorHover : "transparent",
        borderRadius: "8px",
        padding: "10px 15px",
        marginRight: "5px",
        cursor: "pointer",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <IconComponent
        color={isHovered ? colorHover : colorNormal}
        style={{ width: "17px", height: "17px" }}
      />
      <p
        style={{
          fontSize: "14px",
          color: isHovered ? colorHover : colorNormal,
          fontWeight: "500",
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default ItemViewFeature;
