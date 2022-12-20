// @ts-nocheck
import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

export type ScrollProps = {
  children: React.ReactNode;
};

export const Scroll = ({ children }: ScrollProps) => (
  <Scrollbars
    renderTrackVertical={(props: any) => (
      <div
        {...props}
        style={{
          width: "3px",
          opacity: 0,
          position: "absolute",
          transition: "opacity 200ms ease 0s",
          right: "2px",
          bottom: "2px",
          top: "2px",
          borderRadius: "3px",
        }}
      />
    )}
    renderThumbHorizontal={(props: any) => (
      <div
        {...props}
        style={{ backgroundColor: "#cccccc", borderRadius: 8, width: "3px" }}
      />
    )}
    renderThumbVertical={(props: any) => (
      <div
        {...props}
        style={{ backgroundColor: "#cccccc", borderRadius: 8, width: "3px" }}
      />
    )}
    universal
    style={{ height: "100%", overflowY: "hidden !important" }}
    autoHide
    autoHideTimeout={1000}
    autoHideDuration={200}
  >
    {children}
  </Scrollbars>
);

export default Scroll;
