import { Box, Flex, Text, Grid, Card, Switch, Button } from "@radix-ui/themes";
import './App.scss'
import {useEffect} from "react";

function App() {

  useEffect(() => {
    const modal = document.querySelector('.modal') as HTMLElement
    const automatorModal = document.querySelector('#human-automator-modal') as HTMLElement

    if (modal && automatorModal) {
      automatorModal.style.height = `${modal.offsetHeight}px`
    }
  })

  return (
    <>
      <Box className="modal">
        <Card size="2">
          <Flex direction="column" gap="3">
            <Grid gap="1">
              <Text as="div" weight="bold" size="2" mb="1">
                Feedback
              </Text>
            </Grid>
            <Flex asChild justify="between">
              <label>
                <Text color="gray" size="2">
                  Attach screenshot?
                </Text>
                <Switch size="1" defaultChecked />
              </label>
            </Flex>
            <Grid columns="2" gap="2">
              <Button variant="surface">Back</Button>
              <Button>Send</Button>
            </Grid>
          </Flex>
        </Card>
      </Box>
    </>
  )
}

export default App
