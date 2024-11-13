"use client"
import { Box, createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Box
          bg="gray.600"
          p={6}
          borderRadius="lg"
          boxShadow="lg"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="500px"
          margin="0 auto"
        >
          <SelectRoot collection={ingredients} size="lg" width="100%">
            <SelectTrigger>
              <SelectValueText placeholder="Select an ingredient" />
            </SelectTrigger>
            <SelectContent>
              {ingredients.items.map((ingredient) => (
                <SelectItem item={ingredient} key={ingredient.value}>
                  {ingredient.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
          <Button colorPalette="whiteAlpha" variant="solid" mt={4}>
            Submit
          </Button>
        </Box>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}

const ingredients = createListCollection({
  items: [
    { value: "tomato", label: "Tomato" },
    { value: "onion", label: "Onion" },
    { value: "garlic", label: "Garlic" },
  ],
});
