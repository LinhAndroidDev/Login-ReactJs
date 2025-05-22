import { FaUser } from "react-icons/fa";
import { InformationBodyView } from "./InformationBodyView";
import { BiSolidReport } from "react-icons/bi";
import { GiShoppingBag } from "react-icons/gi";
import colors from "../style/colors";
import { useState } from "react";
import ItemViewFeature from "./ItemViewFeature";
import { ItemCredentialView } from "./ItemCredentialView";
import { ItemLicencesView } from "./ItemLicencesView";

export const ViewBodyHome = () => {
  let credentials = [
    {
      title: "Professional Licences",
      quantity: 1,
    },
    {
      title: "Required Documents",
      quantity: 1,
    },
    {
      title: "Medical Documents",
      quantity: 2,
    },
    {
      title: "HR Documents",
      quantity: 1,
    },
    {
      title: "Orientation Packet",
      quantity: 0,
    },
  ];

  const [indexClickCredential, setClickCredential] = useState(0);

  const userData = JSON.parse(localStorage.getItem("user"));
  const { name } = userData;

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <InformationBodyView nameDoctor={name} />
      <ViewFeature />
      <div style={{ display: "flex", width: "100%", padding: "20px" }}>
        <div
          style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            gap: "5px",
            marginRight: "20px",
          }}
        >
          {credentials.map((item, index) => {
            return (
              <ItemCredentialView
                title={item.title}
                quantity={item.quantity}
                onClick={() => setClickCredential(index)}
                selected={indexClickCredential === index}
              />
            );
          })}
        </div>
        <div
          style={{ flex: "4", flexDirection: "column", justifyItems: "start" }}
        >
          <p style={{ fontSize: "16px", fontWeight: "500", color: "black" }}>
            {credentials[indexClickCredential].title}
          </p>
          <div style={{ display: "flex", width: "100%" }}>
            <ItemLicencesView ok={true} />
            <ItemLicencesView ok={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

function ViewFeature() {
  let features = [
    {
      Icon: FaUser,
      title: "Details",
    },
    {
      Icon: BiSolidReport,
      title: "Credetials",
    },
    {
      Icon: GiShoppingBag,
      title: "Experience",
    },
  ];

  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        padding: "10px 30px 10px 20px",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBlockColor: colors.greyDivider,
      }}
    >
      {features.map((item, index) => {
        return (
          <ItemViewFeature
            key={index}
            IconComponent={item.Icon}
            title={item.title}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            colorHover={colors.iconSelected}
            colorNormal={colors.greyDark}
            bgColorHover={colors.blue30}
          />
        );
      })}
    </div>
  );
}
