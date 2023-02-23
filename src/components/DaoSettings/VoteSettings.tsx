import React from "react";
import { Table } from "@nextui-org/react";

export function VoteSettings() {
  return (
    <Table bordered compact aria-label="DAO Contracts Table">
      <Table.Header>
        <Table.Column>
          <div className="font-mono text-lg">Vote Settings</div>
        </Table.Column>
        <Table.Column>
          <div className="flex justify-end pr-2 font-mono text-xs"></div>
        </Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <div className="font-mono text-sm">Support Required</div>
          </Table.Cell>
          <Table.Cell
            css={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div className="font-mono text-sm font-thin">50 %</div>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <div className="font-mono text-sm">Minimum Quorum</div>
          </Table.Cell>
          <Table.Cell
            css={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div className="font-mono text-sm font-thin">5 %</div>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            <div className="font-mono text-sm">Vote Duration</div>
          </Table.Cell>
          <Table.Cell
            css={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div className="font-mono text-sm font-thin">3 Days</div>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
