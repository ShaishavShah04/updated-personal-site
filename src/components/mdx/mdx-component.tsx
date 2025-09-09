"use client";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "next/image";
import { ImgHTMLAttributes, useMemo } from "react";
import { CustomCode, Pre } from "./custom-code";
import CustomLink from "./custom-link";
import { 
  ColorText, 
  ColorBackground, 
  ColorBorder, 
  RedText, 
  BlueText, 
  GreenText, 
  YellowText, 
  PurpleText, 
  OrangeText, 
  Highlight 
} from "./color-components";

const MDXComponentsMap = {
  a: CustomLink,
  Image,
  img: ({ ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="border rounded-lg" {...props} />
  ),
  pre: Pre,
  code: CustomCode,
  // Color components
  ColorText,
  ColorBackground,
  ColorBorder,
  // Preset color components
  RedText,
  BlueText,
  GreenText,
  YellowText,
  PurpleText,
  OrangeText,
  Highlight,
};

type MDXComponentProps = {
  content: string;
  components?: Record<string, any>;
};

export const MDXComponent = ({
  content,
  components = {},
}: MDXComponentProps) => {
  const Component = useMemo(() => getMDXComponent(content), [content]);

  return (
    <Component
      components={
        {
          ...MDXComponentsMap,
          ...components,
        } as any
      }
    />
  );
};

export default MDXComponent;
