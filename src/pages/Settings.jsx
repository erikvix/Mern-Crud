import React from "react";
import Button from "@/components/Button";
import { captureException } from "@sentry/react";

export default function Settings() {
  return (
    <div className="">
      <div>
        <h3>Settings</h3>
        <Button
          onClick={() => {
            captureException(new Error("Not Implemented"));
            throw new Error("Not Implemented");
          }}
        >
          throw error
        </Button>
      </div>
    </div>
  );
}
