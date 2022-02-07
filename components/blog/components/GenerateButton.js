import React from "react";

import Loader from "@/components/common/Loader";
import { GenButton } from "../styles";

const GenerateButton = ({ loading, onClick }) => {
  return (
    <GenButton
      disabled={loading}
      loading={loading.toString()}
      onClick={onClick}
    >
      {loading ? (
        <div style={{ display: "flex" }}>
          Generating <Loader style={{ marginLeft: "5px" }} size="10px" />
        </div>
      ) : (
        "Generate"
      )}
    </GenButton>
  );
};

export default GenerateButton;
