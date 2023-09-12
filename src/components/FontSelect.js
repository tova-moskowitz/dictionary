import * as React from "react";
import PropTypes from "prop-types";
import { Select, selectClasses } from "@mui/base/Select";
import { Option, optionClasses } from "@mui/base/Option";
import { Popper } from "@mui/base/Popper";
import { styled } from "@mui/system";
import iconArrowDown from "../assets/images/icon-arrow-down.svg";

export default function UnstyledSelectControlled() {
  const [value, setValue] = React.useState("sansSerif");
  return (
    <div>
      <CustomSelect
        value={value}
        onChange={(_, newValue) => setValue(newValue)}
      >
        <StyledOption className="sans-serif" value={"sansSerif"}>
          Sans Serif
        </StyledOption>
        <StyledOption className="serif" value={"serif"}>
          Serif
        </StyledOption>
        <StyledOption className="mono" value={"mono"}>
          Mono
        </StyledOption>
      </CustomSelect>

      {/* <Paragraph>Selected value: {value}</Paragraph> */}
    </div>
  );
}

function CustomSelect(props) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <Select {...props} slots={slots} />;
}

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: PropTypes.shape({
    listbox: PropTypes.elementType,
    popper: PropTypes.func,
    root: PropTypes.elementType,
  }),
};

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-weight: 700;
  position: absolute;
  right: 550px;
  top:  35px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  width: 100px;
  padding: 8px 12px;
  border-radius: 8px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? "#0000" : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? "#A445ED" : "#ffff"};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 2px 6px ${
    theme.palette.mode === "light" ? "none" : "rgba(0,0,0, 0.05)"
  };

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    // background: ${theme.palette.mode === "dark" ? "black" : "white"};
    // border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

&::after {
    content: url(${iconArrowDown});
}

  &.${selectClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }

  &.${selectClasses.expanded} {
    &::after {
      content: url('../assets/images/icon-arrow-down.svg');
    }
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 150px;
  border-radius: 5px;
  overflow: auto;
  outline: 0px;
  box-shadow: 0px 6px 15px 6px rgba(164,69,237,0.56);
  background: black;
  color: white;
  `
);

const StyledOption = styled(Option)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  width: 100px;

 
  &.${optionClasses.disabled} {
    color: #A445ED;
  }

  &:hover:not(.${optionClasses.disabled}) {
    color: #A445ED;
  }
  `
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;

const Paragraph = styled("p")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  margin: 10px 0;
  color: ${theme.palette.mode === "dark" ? grey[400] : grey[700]};
  `
);
