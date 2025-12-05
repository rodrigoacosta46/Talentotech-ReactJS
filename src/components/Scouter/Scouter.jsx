import * as Styles from "./Scouter.styles";
import { useState } from "react";
import { Stack } from "react-bootstrap";

export default function Scouter({ view, data}) {
  const [showScouter, setShowScouter] = useState(false);
  return (
    <Styles.Scouter
      as={Stack}
      className="p-2"
      onClick={() => setShowScouter((prev) => !prev)}
    >
      <Styles.Scan $show={showScouter} $play={view} className="p-5 display-3">
        Poder:
        <br />
        {view ? data?.ki : "--:--:--"}
      </Styles.Scan>
    </Styles.Scouter>
  );
}
