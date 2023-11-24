import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "x6ojpky2r8vk",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });
      const projects = response.items.map((item) => {
        const { sys, fields } = item;
        const { title, url, github, description } = fields;
        const image = fields.image.fields.file.url;
        const id = sys.id;
        return { id, image, title, url, github, text: description };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { isLoading, projects };
};
