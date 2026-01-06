import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Event Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Event Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "date",
      title: "Event Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "time",
      title: "Event Time",
      type: "string",
      description: "e.g. 6:30 PM",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
        name: "host",
        title: "Event Host",
        type: "reference",
        to: [{ type: "author" }],
        validation: (Rule) => Rule.required(),
      }),

    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "date",
      media: "image",
    },
  },
});
