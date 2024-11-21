import { Button, Card, createListCollection, Grid, GridItem } from "@chakra-ui/react";

export default function Recipes() {
    return (
    <div>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {recipes && recipes.items.map((recipe) => (
                <GridItem key={recipe.value} colSpan={{base: 3, lg: 2, xl: 1}}>
                    <Card.Root bgColor="white" color="black" height="200px" size="lg">
                    <Card.Body gap={3}>
                        <Card.Title mt={2}>{recipe.label}</Card.Title>
                        <Card.Description>{recipe.description}</Card.Description>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <Button bgColor="black" color="white" p={3} _hover={{bg: "gray.800"}}>View Recipe</Button>
                    </Card.Footer>
                    </Card.Root>
                </GridItem>
            ))}
        </Grid>
    </div>
)}

export async function getRecipes(ingredients: string) {
    console.log(ingredients);
}

const recipes = createListCollection({
    items: [
        { value: "recipe1", label: "Recipe 1 title", description: "Recipe 1 description rendered" },
        { value: "recipe2", label: "Recipe 2 title", description: "Recipe 2 description rendered" },
        { value: "recipe3", label: "Recipe 3 title", description: "Recipe 3 description rendered" },
        { value: "recipe4", label: "Recipe 4 title", description: "Recipe 4 description rendered" },
        { value: "recipe5", label: "Recipe 5 title", description: "Recipe 5 description rendered" },
        { value: "recipe6", label: "Recipe 6 title", description: "Recipe 6 description rendered" },
    ],
});