import { Button, Select, ThemeWrapper } from "retro-ui";
const Header = () => {
  return (
    <div>
      This is header
      <ThemeWrapper>
        <Select name="select">
          <option label="<">{"back"}</option>
          <option label="X">{"stop"}</option>
          <option label=">">{"next"}</option>
        </Select>
      </ThemeWrapper>
    </div>
  );
};

export default Header;
