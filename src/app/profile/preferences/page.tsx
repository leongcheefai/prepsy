"use client"
import { Box, Button, Container, createListCollection, Fieldset, SelectLabel, Spacer, Stack } from "@chakra-ui/react";
import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select"

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
                    <SelectRoot collection={cuisines} size="lg" p={6} multiple>
                        <SelectLabel>Cuisines</SelectLabel>
                        <SelectTrigger clearable>
                            <SelectValueText placeholder="Select your preferred cuisines" />
                        </SelectTrigger>
                        <SelectContent bg="white" color="black">
                            {cuisines.items.map((cuisine) => (
                                <SelectItem item={cuisine} key={cuisine.value} _hover={{ bg: "black", color: "white" }}>
                                {cuisine.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </SelectRoot>
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

const cuisines = createListCollection({
    items: [
        { value: "italian", label: "Italian" },
        { value: "french", label: "French" },
        { value: "german", label: "German" },
        { value: "chinese", label: "Chinese" },
        { value: "japanese", label: "Japanese" },
        { value: "korean", label: "Korean" },
        { value: "thai", label: "Thai" },
    ],
});