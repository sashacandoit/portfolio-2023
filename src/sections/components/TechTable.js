import React from "react";
import { SimpleGrid, Box } from '@chakra-ui/react'
import { about_me_tech } from "../../data/portfolio_data"
import { ChevronRightIcon } from '@chakra-ui/icons'


function TechTable() {
  return (
    <SimpleGrid marginTop={3} minChildWidth="140px" columns={5} spacingX={4} spacingY={1}>
      {about_me_tech.map((itemContent, itemId) => (
          <TechItem itemContent={itemContent} key={itemId} />
        ))}
    </SimpleGrid>
  );
}

function TechItem(props) {
  const { itemContent } = props;

  return (
    <Box>
      {itemContent.map((val, itemId) => (
        <Box textStyle={'secondary'} color='black' fontSize='xs' key={itemId} minH="2em"><ChevronRightIcon color='brandRed.900' />{val}</Box>
      ))}
    </Box>
  );
}

export default TechTable;