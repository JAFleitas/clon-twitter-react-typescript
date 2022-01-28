import React from "react";

import { Container, Stack, Text } from "@chakra-ui/react";

const Layout: React.FC = ({ children }) => {
  return (
    <Container maxWidth="container.md" alignSelf="center">
      <Stack direction="row">
        <Stack>
          <Text>Logo de Twitter</Text>
        </Stack>

        {children}
      </Stack>
    </Container>
  );
};
export default Layout;
