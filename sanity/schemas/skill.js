export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of skill",
      type: "string",
    },

    {
      name: "year",
      title: "Year",
      type: "number",
      description: "Number of experience years of skill",
      validation: (Rule) => Rule.min(0).max(100),
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
