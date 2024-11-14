"use client"
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"
import Recipes from "@/components/Recipes";
import { Box, Container, createListCollection, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container as="div">
          <Box
            bg="white"
            color="black"
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="full"
            margin="20px auto"
            gap={4}
          >
            <SelectRoot collection={ingredients} size="lg" p={6} multiple>
              <SelectTrigger>
                <SelectValueText placeholder="Select an ingredient" />
              </SelectTrigger>
              <SelectContent bg="white" color="black">
                {ingredients.items.map((ingredient) => (
                  <SelectItem item={ingredient} key={ingredient.value}>
                    {ingredient.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
            <Button colorPalette="blue" bgColor="black" color="white" size="lg" variant="solid" width="full">
              Submit
            </Button>
          </Box>
          <Recipes />
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </Container>
  );
}

const ingredients = createListCollection({
  items: [
    { value: "tomato", label: "Tomato" },
    { value: "onion", label: "Onion" },
    { value: "garlic", label: "Garlic" },
  ],
});
