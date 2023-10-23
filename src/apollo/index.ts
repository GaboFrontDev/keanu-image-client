import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache: new InMemoryCache(),
});

export const getImage = async (width: string, height: string, options: string) => {  
  const results = await client.query<{
    data: {
      image: {
        url: string
      }
    }
  }>({
    query: gql`
      query GetImage {
        image(width: "${width}", height: "${height}", options: "${options}") {
          url
        }
      }
    `,
  });

  return results;
};
