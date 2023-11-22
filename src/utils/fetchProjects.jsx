import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "x6ojpky2r8vk",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});
