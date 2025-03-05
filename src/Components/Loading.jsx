import React from "react";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

function Loading() {
  const { loading } = useSelector((store) => store.product);
  return (
    <div>
      <Oval visible={loading} color="#3c9d9a" secondaryColor="#fff" height="150" width="150" strokeWidth="4" />
    </div>
  );
}

export default Loading;
