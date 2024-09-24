/// bg-blue-950 border-blue-950
/// bg-zinc-900 border-zinc-900
/// bg-rose-950 border-rose-950

import { PROCDUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Blue", value: "blue", tw: "blue-950" },
  {
    label: "Rose",
    value: "rose",
    tw: "rose-950",
  },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      vlaue: "iphonex",
    },
    {
      label: "iPhone 11",
      vlaue: "iphone11",
    },
    {
      label: "iPhone 12",
      vlaue: "iphone12",
    },
    {
      label: "iPhone 13",
      vlaue: "iphone13",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: undefined,
      price: PROCDUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "polycarbonate",
      description: "Scratch resistant coating",
      price: PROCDUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "smooth",
      description: undefined,
      price: PROCDUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      description: "Soft grippy texture",
      price: PROCDUCT_PRICES.finish.textured,
    },
  ],
} as const;
