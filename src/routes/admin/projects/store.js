// store.js
import { writable } from "svelte/store";

export const project = writable({
  title: "Places To Stay by Culture Trip",
  year: 2020,
  description:
    "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  technologies: ["React", "AWS Cognito"],

  company: "Culture Trip",
  links: {
    github: "",
    website: "https://www.learningladders.info/",
  },
});
