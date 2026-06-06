import GeneralInformation from "./GeneralInformation";
import { useState } from "react";

export default function Home() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });
  const [submit,toggleSubmit] = useState(false);

  return (
    <div className="bg-slate-900 min-h-screen">
      <GeneralInformation
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        submit = {submit}
        toggleSubmit = {toggleSubmit}
      />
    </div>
  );
}
