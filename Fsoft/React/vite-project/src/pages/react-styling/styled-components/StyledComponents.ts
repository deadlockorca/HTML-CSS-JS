import { keyframes, styled } from "styled-components";
//Demo2
interface ButtonProps {
    primary?: boolean;
    type?: string;
}
interface stringColor {
    [key: string]: string;
}
interface ThemeProps {
    main?: string;
    color?: string;
}
interface ThemeProps {
    main?: string;
    color?: string;
}
interface ThemeAdvancedProps {
    bg?: string;
    clr?: string;
}
//Demo7
export const Link = styled.a`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    backfround: papayawhip;
    color: #bf4f74;
    text-decoration: none;
`;
export const Icon = styled.svg`
    flex: none;
    transition: fill 0.25s;
    width: 48px;
    height: 48px;
    ${Link}: hover & {
        fill: rebecapurple;
    }
`;
export const Label = styled.span`
    display: flex;
    aligin-items: center;
    line-height: 1.2;
    &:: before {
        content: "◀";
        margin: 0 10px;
    }
`
//Demo6
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg)
    }
`;

export const Rotate = styled.div`
    animation: ${rotate} 5s linear infinite;
    padding: 2rem 1rem;
    font-size: 2rem;`
//Demo5
export const AdvanceButton = styled.button<ThemeAdvancedProps>`
color: ${(props) => props.theme.clr};
border: ${(props) => props.theme.bh};
background: ${(props) => props.theme.bg};
font-size: 1em;
margin: 0.25em 1em;
border-radius: 3px;
`
export const advanceTheme = {
    clr: "red",
    bg: "yellow",
};

export const inverTheme = ({ clr, bg}: ThemeAdvancedProps) => ({
    clr: bg,
    bg: clr,
});
const color: stringColor = {
    while: "#fff",
    primary: "#bf4f74",
    dark: "#000",
};
const lightningColor: stringColor = {
    primary: "yellow",
    secondary: "back",
};
const tomatoColor: stringColor = {
    primary: "tomato",
    secondary: "white",
};


export const ThemeButton = styled.button<ThemeProps>`
    font-size: 1rem;
    margin: 1rem;
    padding: .25rem 1rem;
    border-radius: 3px;
    color: ${(props) => props.theme.color};
    border: 2px dotted ${(props) => props.theme.main};
    &:hover {
        color: while;
        background-color: ${(props) => props.theme.color};
        border: 2px dotted ${(props) => props.theme.main};
    }
`;

export const TextDetail = styled.p`
    color: ${(props) => props.theme.color};
`

ThemeButton.defaultProps = {
    theme: {
        main: "green",
        color: "green"
    },
}
export const buttonTheme = {
    main: "chocolate",
    color: "chocolate"
}
export const buttonDarkTheme = {
    main: "black",
    color: "black"
}
export const NormalButton = styled.button<ButtonProps>`
    background-color: ${(props) => props.type ? color[props.type] : color.while};
    color: ${(props) => (props.type ? color.while : color["primary"])};
    font-size: 1rem;
    margin: 1rem;
    padding: .25rem 1rem;
    border: 2px solid ${(props) => (props.type ? color[props.type] : color.while)};
    border-radius: 3px;
    &:hover {
        color: ${(props) => (props.type ? color[props.type] : color.while)};
        background-color: ${(props) => (props.type ? color.while : color.primary)};
        border-color: ${(props) => (props.type ? color[props.type] : color.primary)};
    }
`;
// Tomato Button
export const TomatoButton = styled(NormalButton)`
    background-color: ${(props) => props.primary ? tomatoColor.primary : tomatoColor.secondary};
    color: ${(props) => props.primary ? tomatoColor.secondary : tomatoColor.primary};
    border 2px solid : ${(props) => !props.primary ? tomatoColor.primary : tomatoColor.secondary};
    &:hover {
        color: ${(props) => props.primary ? tomatoColor.primary : tomatoColor.secondary};
        background-color: ${(props) => !props.primary ? tomatoColor.primary : tomatoColor.secondary};
        border-color: ${(props) => props.primary ? tomatoColor.primary : tomatoColor.secondary};
    }
`
export const LemonButton = styled(NormalButton)`
    background-color: ${(props) => props.primary ? lightningColor.primary : lightningColor.secondary};
    color: ${(props) => props.primary ? lightningColor.primary : lightningColor.secondary};
    border 2px solid : ${(props) => !props.primary ? lightningColor.primary : lightningColor.secondary};
    &:hover {
        color: ${(props) => props.primary ? lightningColor.primary : lightningColor.secondary};
        background-color: ${(props) => !props.primary ? lightningColor.primary : lightningColor.secondary};
        border-color: ${(props) => props.primary ? lightningColor.primary : lightningColor.secondary};
    }
`

//Demo1
export const BlockTitle = styled.h3`
color: red
`;