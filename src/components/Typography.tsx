import styled from "@emotion/styled"

export const Text = styled.p<{ bold?: boolean }>`
  font-size: 16px;
  font-weight: ${({ bold }) => bold && "bold"};
`
