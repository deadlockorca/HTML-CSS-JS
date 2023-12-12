import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { AdvanceButton, Icon, Label, LemonButton, Link, NormalButton, Rotate, TextDetail, ThemeButton, TomatoButton, advanceTheme, buttonDarkTheme, buttonTheme, inverTheme } from "./StyledComponents";

const StyledComponents = () => {
    const [isDarkTheme, setDarkTheme] = useState(false);
    return (
        <>
        {/* Demo7 */}
        <BlockTitle>Demo 7 Hovering parent changes child's style
            <Link href= "#">
                <Icon viewBox = "0 0 20 20">
                <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
                </Icon>
                <Label>Hovering my parent to change my style</Label>
            </Link>
        </BlockTitle>
        {/* Demo6 */}
        <BlockTitle>Demo6 animation style</BlockTitle>
        <Rotate>&lt;  ❤️ &gt;</Rotate>
        {/* Demo 5 - NestedTheme */}
        <BlockTitle>Demo5 - Theme nested</BlockTitle>
        <ThemeProvider theme={advanceTheme}>
            <AdvanceButton>Default advance</AdvanceButton>
            <ThemeProvider theme={inverTheme}>
                <AdvanceButton>Invert Theme</AdvanceButton>
            </ThemeProvider>
        </ThemeProvider>
        <hr />

        {/* Demo4 */}
        <BlockTitle>Demo3 styled-custom button</BlockTitle>
        <BlockTitle>Demo4</BlockTitle>
        <button className="btn btn-success" onClick={() => setDarkTheme((prevState) => !prevState)}>Toggle Theme</button>
        <ThemeButton>Theme Normal</ThemeButton>
        <ThemeProvider theme={!isDarkTheme ? buttonTheme : buttonDarkTheme}>
            <ThemeButton>Theme colored</ThemeButton>
            <TextDetail>Lorem ipsum dolor sit amet.</TextDetail>
        </ThemeProvider>
        <hr />
        <div>
            <h4>Demo 3 Lemon button</h4>
            <LemonButton primary>Yellow</LemonButton>
            <LemonButton>Black</LemonButton>
        </div>
        <hr />
        <div>
            <h4>Demo 3 Lemon button</h4>
            <TomatoButton primary>Tomato</TomatoButton>
            <TomatoButton>While</TomatoButton>
        </div>
        {/* {Demo3} */}
        <BlockTitle>Demo2 styled-button</BlockTitle>
        <NormalButton type={"primary"}>Normal</NormalButton>
        <NormalButton>Colored</NormalButton>
        <NormalButton type={"dark"}>Dark</NormalButton>
        <BlockTitle>Demo1</BlockTitle>
        <Wrapper>
            <PageTitle>
            Welcome <strong>to StyledComponent Lib</strong>
            </PageTitle>
        </Wrapper>
        <section style={{padding: "4rem", backgroundColor: "papayawhip"}}>
            <h2 style={{fontSize: "1.5rem", textAlign: "center", color: "#bf4f74"}}>Welcome <strong>to StyledComponent Lib</strong></h2>
        </section>
        </>
    );
};

export default StyledComponents;

const Wrapper = styled.section`
    padding: 4rem;
    background-color: papayawhip;
`;

const PageTitle = styled.h2`
font-size: 1.5rem;
text-align: "center";
color: #bf4f74;
`;

const BlockTitle = styled.h3`
color: red`