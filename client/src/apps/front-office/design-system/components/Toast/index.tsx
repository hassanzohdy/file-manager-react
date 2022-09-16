import {
  NotificationProps,
  showNotification,
  updateNotification,
} from "@mantine/notifications";
import { Random } from "@mongez/reinforcements";
import { IconCheck, IconX } from "@tabler/icons";
import React from "react";

export function toastLoading(title: React.ReactNode, message: React.ReactNode) {
  const id = Random.id();
  showNotification({
    id,
    loading: true,
    title,
    message,
    autoClose: false,
    disallowClose: true,
  });

  return {
    success: (
      title: React.ReactNode,
      message: React.ReactNode,
      notificationProps: Partial<NotificationProps> = {
        color: "green",
        autoClose: 5000,
      },
    ) => {
      updateNotification({
        id,
        title,
        message,
        icon: <IconCheck size={16} />,
        ...notificationProps,
      });
    },
    error: (
      title: React.ReactNode,
      message: React.ReactNode,
      notificationProps: Partial<NotificationProps> = {
        color: "red",
        autoClose: 5000,
      },
    ) => {
      updateNotification({
        id,
        title,
        message,
        icon: <IconX size={16} />,
        ...notificationProps,
      });
    },
  };
}
