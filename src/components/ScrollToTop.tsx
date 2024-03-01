"use client";
import { useWindowScroll } from "@mantine/hooks";
import {
  IconSquareArrowUpFilled,
  IconSquareRoundedChevronUpFilled,
} from "@tabler/icons-react";

function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <>
      {scroll.y > 300 && (
        <IconSquareArrowUpFilled
          style={{
            position: "fixed",
            right: 15,
            bottom: 20,
            zIndex: 1000000,
            // backgroundColor: "blue",
          }}
          onClick={() => scrollTo({ y: 0 })}
          size={50}
        />
      )}
    </>
  );
}

export default ScrollToTop;
