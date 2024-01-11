import React from "react";
import { Meta, Story } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import Input, { InputProps } from "./Input";
import { EyeIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    styling: {
      type: "string",
      defaultValue: "default",
      options: [
        "default",
        "hover",
        "focus",
        "filled",
        "validation",
        "disabled",
      ],
      control: { type: "radio" },
    },
    // disabled: {
    //   type: Boolean,
    //   defaultValue: "false",
    //   options: ["true", "false"],
    //   control: { type: "radio" },
    // },
    // type: {
    //   type: "string",
    //   defaultValue: "button",
    //   options: ["button", "submit", "reset"],
    //   control: { type: "radio" },
    // },
    // variant: {
    //     type: "string",
    //     defaultValue: "primary",
    //     options: ["primary", "secondary", "outline", "text"],
    //     control: { type: "radio" },
    // },
    onChange: action("changed"),
  },
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
  styling: "default",
  iconStart: <MagnifyingGlassIcon />,
  iconEnd: <EyeIcon />,
};

export const Hover = Template.bind({});
Hover.args = {
  label: "Label",
  placeholder: "Placeholder",
  styling: "hover",
  iconStart: <MagnifyingGlassIcon />,
  iconEnd: <EyeIcon />,
};

export const Focus = Template.bind({});
Focus.args = {
  label: "Label",
  placeholder: "Placeholder",
  styling: "focus",
  value: "Value",
  iconStart: <MagnifyingGlassIcon />,
  iconEnd: <EyeIcon />,
};

export const Filled = Template.bind({});
Filled.args = {
  label: "Label",
  placeholder: "Placeholder",
  styling: "default",
  value: "Filled",
  iconStart: <MagnifyingGlassIcon />,
  iconEnd: <EyeIcon />,
};

export const Validation = Template.bind({});
Validation.args = {
  label: "Label",
  placeholder: "Placeholder",
  styling: "validation",
  value: "Validation",
  iconStart: <MagnifyingGlassIcon />,
  iconEnd: <EyeIcon />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  placeholder: "Placeholder",
  styling: "disabled",
  iconStart: <MagnifyingGlassIcon />,
  iconEnd: <EyeIcon />,
};
