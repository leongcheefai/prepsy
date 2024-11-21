"use client"
import Form from "next/form";
import Recipes from "@/components/Recipes";
import { Field } from "@/components/ui/field";
import { Box, Container, Button, Input } from "@chakra-ui/react";

export default function Home() {
  function handleSubmit(formData: FormData) {
    const ingredients = formData.get("ingredients");
  }

  return (
    <Container as="div">
        <Form action={handleSubmit}>
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
                <Field label="Ingredients" helperText="Enter ingredients separated by commas">
                  <Input type="text" name="ingredients" bgColor="gray.100" variant="flushed" />
                </Field>
                <Button type="submit" colorPalette="blue" bgColor="black" color="white" size="lg" variant="solid" width="full" _hover={{bg: "gray.800"}}>
                  Submit
                </Button>
          </Box>
        </Form>
        <Recipes />
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </Container>
  );
}