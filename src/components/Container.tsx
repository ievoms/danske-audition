import styled from "@emotion/styled"

export const Container = styled.div<{
  horizontalScroll?: boolean
  row?: boolean
  alignLeft?: boolean
}>`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ alignLeft }) => (alignLeft ? "left" : "center")};

  gap: 50px;
  overflow-x: ${({ horizontalScroll }) =>
    horizontalScroll ? "scroll" : "hidden"};
  overflow-y: ${({ horizontalScroll }) =>
    horizontalScroll ? "hidden" : "scroll"};
  max-width: 80%;
  width: 100%;
  margin: 50px;
`
