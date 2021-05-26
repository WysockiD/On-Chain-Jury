import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/WysockiD/Jury-On-Chain/tree/main" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🧑‍⚖️ 🏛️ On-Chain-Jury"
        subTitle="Law and Order - Chained to Technology"
        style={{ cursor: 'cell'}}
      />
    </a>
  );
}
