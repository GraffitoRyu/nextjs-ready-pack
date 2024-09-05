"use client";

import { forwardRef, useCallback } from "react";
import type { SimpleBarOptions } from "simplebar-core";
import type SimpleBarCore from "simplebar-core";
import SimpleBar from "simplebar-react";

const ScrollContainer = forwardRef(
  (
    {
      className,
      children,
      styleOptions,
      scrollOptions,
    }: {
      className?: string;
      children: React.ReactNode;
      styleOptions?: React.CSSProperties;
      scrollOptions?: SimpleBarOptions;
    },
    ref: React.ForwardedRef<HTMLDivElement | null>,
  ) => {
    const syncRef = useCallback(
      (node: SimpleBarCore | null) => {
        if (node?.contentWrapperEl && typeof ref === "function") {
          ref(node.contentWrapperEl as HTMLDivElement);
        } else if (node?.contentWrapperEl && ref && "current" in ref) {
          ref.current = node.contentWrapperEl as HTMLDivElement;
        }
      },
      [ref],
    );
    return (
      <SimpleBar
        className={`scroll-container ${className ? className : ""}`}
        style={styleOptions}
        {...scrollOptions}
        ref={syncRef}
      >
        {children}
      </SimpleBar>
    );
  },
);

export default ScrollContainer;
