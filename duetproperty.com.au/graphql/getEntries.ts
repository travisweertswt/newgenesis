import { client } from "./client";
const getEntriesInSection = `
query MyQuery {
  entries(section: "test") {
    slug
    url
    uri
    uid
    ... on test_default_Entry {
      title
      testField
    }
  }
}
`;

const getEntryInSection = (slug: string)=> `
query MyQuery {
  entry(section: "test", slug: "${slug}") {
    slug
    url
    uri
    uid
    ... on test_default_Entry {
      title
      testField
    }
  }
}
`

export interface Entry {
  slug: string;
  url: string;
  uri: string;
  uid: string;
  title: string;
  testField: string;
  __typename: string;
}

export const getEntries = async () => {
  const request = await client
    .query<{ entries: Entry[] }>(getEntriesInSection)
    .toPromise();
  // console.log("getting", request.data?.entries);
  return request.data?.entries;
};

export const getEntry = async (slug: string) => {
  const request = await client
    .query<{ entry: Entry }>(getEntryInSection(slug))
    .toPromise();
  // console.log("getting etnry", request.data?.entry);
  return request.data?.entry;
};
