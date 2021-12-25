import styled from "styled-components";

const TypographyStyle = styled.p`
`;

const Typography = ({children}) => {
    return (
        <TypographyStyle>{children}</TypographyStyle>
    )
}

export default Typography;