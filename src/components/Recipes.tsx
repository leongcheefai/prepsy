import { Button, Card, Grid, GridItem } from "@chakra-ui/react";

export default function Recipes() {
    return (
    <div>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem>
                <Card.Root bgColor="white" color="black" height="200px" size="lg">
                    <Card.Body gap={3}>
                        <Card.Title mt={2}>Recipe 1 title</Card.Title>
                        <Card.Description>Recipe 1 description</Card.Description>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <Button bgColor="black" color="white" p={3} _hover={{bg: "gray.800"}}>View Recipe</Button>
                    </Card.Footer>
                </Card.Root>
            </GridItem>
            <GridItem>
                <Card.Root bgColor="white" color="black" height="200px" size="lg">
                    <Card.Body gap={3}>
                        <Card.Title mt={2}>Recipe 2 title</Card.Title>
                        <Card.Description>Recipe 2 description</Card.Description>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <Button bgColor="black" color="white" p={3} _hover={{bg: "gray.800"}}>View Recipe</Button>
                    </Card.Footer>
                </Card.Root>
            </GridItem>
            <GridItem> 
                <Card.Root bgColor="white" color="black" height="200px" size="lg">
                    <Card.Body gap={3}>
                        <Card.Title mt={2}>Recipe 3 title</Card.Title>
                        <Card.Description>Recipe 3 description</Card.Description>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <Button bgColor="black" color="white" p={3} _hover={{bg: "gray.800"}}>View Recipe</Button>
                    </Card.Footer>
                </Card.Root>
            </GridItem>
            <GridItem> 
                <Card.Root bgColor="white" color="black" height="200px" size="lg">
                    <Card.Body gap={3}>
                        <Card.Title mt={2}>Recipe 4 title</Card.Title>
                        <Card.Description>Recipe 4 description</Card.Description>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <Button bgColor="black" color="white" p={3} _hover={{bg: "gray.800"}}>View Recipe</Button>
                    </Card.Footer>
                </Card.Root>
            </GridItem>
        </Grid>
    </div>
)}