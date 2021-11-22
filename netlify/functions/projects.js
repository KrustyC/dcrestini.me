const baseItems = [
  {
    title: "TRIPS by Culture Trip",
    year: 2020,
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    technologies: ["React", "Svelte", "Sapper"],
    company: "Culture Trip",
    links: {
      github: "",
      website: "",
    },
  },
  {
    title: "Ladders At Home",
    year: 2020,
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    technologies: ["React", "AWS Cognito"],
    company: "Learning Ladders",
    links: {
      github: "",
      website: "",
    },
  },
  {
    title: "Ladders At Home",
    year: 2020,
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    technologies: ["React", "CircleCI", "AWS Lambda", "Mongo DB", "Terraform"],
    company: "Learning Ladders",
    links: {
      github: "",
      website: "",
    },
  },
  {
    title: "Insights",
    year: 2020,
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    technologies: ["React", "Svelte", "Sapper"],
    company: "Learning Ladders",
    links: {
      github: "",
      website: "",
    },
  },
  {
    title: "School's Dashboard",
    year: 2020,
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    technologies: ["React", "AWS Cognito", "AWS DynamoDB"],
    company: "Learning Ladders",
    links: {
      github: "",
      website: "",
    },
  },
];

const projects = [...baseItems, ...baseItems, ...baseItems, ...baseItems];

exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({ projects }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
