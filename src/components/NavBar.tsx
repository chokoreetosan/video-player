import * as React from "react"
import styled from "styled-components"
//@ts-expect-error
import icon from "../images/gatsby-icon.png"
const Bar = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  border-bottom: 1px solid grey;
`

const StyledButton = styled.button`
  color: grey;
  font-size: 1.5em;
  background: rgba(0, 0, 0, 0);
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  &:hover {
    color: black;
  }
`

interface NavBarProps {}

/**
 *
 * Navigation buttons do nothing yet. In the future, they will allow the user to switch component views between the player, the library, and other options.
 *
 *
 */

const NavBar = ({}: NavBarProps) => (
  <Bar id={"navbar"}>
    <img src={icon} style={{ height: "6vh", width: "auto" }} />
    <div
      style={{
        marginLeft: "20px",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <StyledButton
        onClick={() => {
          console.log("navigates to Watching Tab")
        }}
      >
        Watching
      </StyledButton>
      <StyledButton
        onClick={() => {
          console.log("navigates to Discover Tab")
        }}
      >
        Discover
      </StyledButton>
      <StyledButton
        onClick={() => {
          console.log("navigates to Library Tab")
        }}
      >
        Library
      </StyledButton>
      <StyledButton
        onClick={() => {
          console.log("navigates to Calendar Tab")
        }}
      >
        Calendar
      </StyledButton>
    </div>
  </Bar>
)

export default NavBar
