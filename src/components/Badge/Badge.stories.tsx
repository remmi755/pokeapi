import * as React from "react";
import { Meta, Story, StoryFn } from "@storybook/react";
import Badge, { BadgeProps } from "./Badge";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    color: {
      type: "string",
      defaultValue: "gray",
      options: [
        "gray",
        "red",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "pink",
        "dark",
        "orange",
      ],
      control: { type: "radio" },
    },
    variant: {
      type: "string",
      defaultValue: "sm",
      options: ["none", "sm", "md", "xl"],
      control: { type: "radio" },
    },
    isDismiss: {
      type: "boolean",
      defaultValue: "false",
      options: ["false", "true"],
      control: { type: "radio" },
    },
    isIconStart: {
      type: "boolean",
      defaultValue: "false",
      options: ["false", "true"],
      control: { type: "radio" },
    },
    onChange: action("changed"),
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default",
  color: "gray",
  isDismiss: true,
  variant: "md",
};

export const Green = Template.bind({});
Green.args = {
  text: "Green",
  color: "green",
  isDismiss: false,
  variant: "md",
};
