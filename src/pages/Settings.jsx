import React from "react";
import Button from "@/components/Button";

export default function Settings() {
  return (
    <div className="">
      <div>
        <h3>Settings</h3>
        <Button
          onClick={() => {
            throw new Error("Not Implemented");
          }}
        >
          throw error
        </Button>
      </div>
    </div>
  );
}
