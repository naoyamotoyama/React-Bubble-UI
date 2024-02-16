declare module "react-bubble-ui" {
  import { Component, HTMLAttributes } from "react";

  interface BubbleUIProps extends HTMLAttributes<HTMLElement> {
    options: {
      size: number;
      minSize: number;
      gutter: number;
      provideProps: boolean;
      numCols: number;
      fringeWidth: number;
      yRadius: number;
      xRadius: number;
      cornerRadius: number;
      showGuides: boolean;
      compact: boolean;
      gravitation: number;
    };
  }

  export default class BubbleUI extends Component<BubbleUIProps> {}
}
