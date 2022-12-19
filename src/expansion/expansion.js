import { Reveal } from "@progress/kendo-react-animation";
import {
  Card,
  ExpansionPanel,
  ExpansionPanelContent,
} from "@progress/kendo-react-layout";
import { BiRightArrow } from "react-icons/bi";
import React, { useState } from "react";
import data from "./data.json";
import { Button } from "@progress/kendo-react-buttons";
export const Expansion = () => {
  const [expanded, setExpanded] = useState("1");

  return (
    <div>
      <Card
        style={{
          display: "flex",
        }}
      >
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
                  {item.subaddress.map((address) => {
                    return (
                      <Card>
                        <div>
                          <strong>
                            PROPERTY
                            {address.PROPERTY}
                          </strong>
                          <br />
                          {address.street},{address.colony},{address.city},
                          {address.pincode}
                          <Button>
                            <BiRightArrow />
                          </Button>
                        </div>
                      </Card>
                    );
                  })}
                </ExpansionPanelContent>
              )}
            </Reveal>
          </ExpansionPanel>
        ))}
      </Card>
    </div>
  );
};
