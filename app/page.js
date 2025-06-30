import React from "react";
import Logo from "./components/logo";
import Projekte from "./components/projekte";
import Spenden from "./components/spenden";
import Dokumente from "./components/dokumente";

export default function Page() {
  return (
    <>
      <Logo />
      <Projekte />
      <Spenden />
      <Dokumente />
    </>
  );
}
