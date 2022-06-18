import Typography from "components/atoms/typography";
import React from "react";
interface ParagraphProps {
  variant: string;
  children: string | number | JSX.Element;
}

const Paragraph: React.FC<ParagraphProps> = ({ variant, children }) => {
  return <Typography variant={variant} children={children} />;
};

export default Paragraph;
