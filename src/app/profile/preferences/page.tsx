"use client"
import { Box, Button, Container, Fieldset, Input, Spacer, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

export default function ProfilePreferences() {
    return (
    <Container as="div">
        <Box display="flex" justifyContent="center" bg="black" color="white" p={6} borderRadius="lg" boxShadow="lg" width="full" margin="20px auto" gap={4}>
            <Fieldset.Root size="lg" maxW="md" border="1px solid white" p={6} borderRadius="lg">
                <Stack>
                    <Fieldset.Legend>Preferences</Fieldset.Legend>
                    <Fieldset.HelperText>
                        Your preferences will be used to personalize your experience.
                    </Fieldset.HelperText>
                </Stack>

                <Fieldset.Content>
                    <Field label="Cuisines">
                        <Input name="cuisines" />
                    </Field>
                </Fieldset.Content>
                <Spacer />

                <Button type="submit" alignSelf="flex-start" bg="white" color="black" _hover={{bg: "gray.800", color: "white"}} width="full">
                    Submit
                </Button>
            </Fieldset.Root>
        </Box>
    </Container>
    );
}
