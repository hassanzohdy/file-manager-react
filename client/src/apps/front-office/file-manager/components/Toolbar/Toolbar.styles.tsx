import styled from "@emotion/styled";
import { ActionIcon, ActionIconProps, Card, CardProps } from "@mantine/core";
import { FC } from "react";

// 👇🏻 We need to add FC<CardProps> to make it work with styled
export const ToolbarWrapper = styled<FC<CardProps>>(Card)`
  label: ToolbarWrapper;
  overflow: visible; ;
`;

// 👇🏻 the wrapper that will be used to wrap the icon and the text
export const ToolBarButtonWrapper = styled.div`
  label: ToolBarButtonWrapper;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
`;

// 👇🏻 We need to add FC<ActionIconProps> to make it work with styled
export const ToolbarIcon = styled<FC<ActionIconProps>>(ActionIcon)`
  label: ToolbarIcon;
  width: 100%;
`;

// 👇🏻 the button text that will be displayed below the icon
export const ToolbarButtonText = styled.div`
  label: ToolbarButtonText;
  color: ${({ theme }) => theme.colors.gray[5]};
  font-weight: bold;
  font-size: 13px;
`;
