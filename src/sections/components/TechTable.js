import React from "react";
import { Table, Tbody, Tr, Td  } from '@chakra-ui/react'
import { about_me_tech } from "../../data/portfolio_data"
import { ChevronRightIcon } from '@chakra-ui/icons'


function TechTable() {
  return (
    <Table size="sm">
      <Tbody>
        {about_me_tech.map((rowContent, rowID) => (
          <TableRow rowContent={rowContent} key={rowID} />
        ))}
      </Tbody>
    </Table>
  );
}

function TableRow(props) {
  const { rowContent } = props;

  return (
    <Tr>
      {rowContent.map((val, rowID) => (
        <Td
          borderWidth="0"
          paddingLeft={"0"}
          fontSize='sm'
          w="20%"
          key={rowID}><ChevronRightIcon color='red.300' />{val}</Td>
      ))}
    </Tr>
  );
}

export default TechTable;