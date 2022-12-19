import { Reveal } from "@progress/kendo-react-animation";
import {
  ExpansionPanel,
  ExpansionPanelContent,
} from "@progress/kendo-react-layout";
import React, { useState } from "react";
import data from "./data.json";
export const Expansion = () => {
  const [expanded, setExpanded] = useState("1");
  const showdata = data;
  const data1 = showdata.map((element) => {
    // console.log("testing", element.subaddress, "abc");
  });

  console.log(data1, "test");
  return (
    <div>
      {data.map((item) => (
        <ExpansionPanel
          title={item.id}
          onAction={(event) => {
            setExpanded(event.expanded ? "" : item.id);
          }}
        >
          <Reveal>
            {expanded === item.id && (
              <ExpansionPanelContent>
                {item.username}
                <br />
                {item.branchid}
                <br />
                {/* {data.map((element) => {
                  <div>{element.subaddress}</div>;
                })} */}
                i need to show respective subaddress data here
              </ExpansionPanelContent>
            )}
          </Reveal>
        </ExpansionPanel>
      ))}
    </div>
  );
};
