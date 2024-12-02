import { HeaderContainer } from "./header-container";
import { MaximizeBtn } from "./maximize-btn";
import { SettingsDialog } from "./settings-dialog";
import { TimeTableDialog } from "./timetable-dialog/timetable-dialog";

export function Header() {
  return (
    <HeaderContainer>
      <div className="flex-1" />

      <ul className="flex items-center gap-4">
        <li>
          <TimeTableDialog />
        </li>

        <li>
          <MaximizeBtn />
        </li>

        <li>
          <SettingsDialog />
        </li>
      </ul>
    </HeaderContainer>
  );
}
