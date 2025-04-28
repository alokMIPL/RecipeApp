import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>This page can not be Found</h1>
      <Link href={"/"}>Go Back to Home</Link>
    </div>
  );
};

export default NotFound;
