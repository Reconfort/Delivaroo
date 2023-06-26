import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title:"Name of Dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_descriprion",
      type: "string",
      title:"Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      title:"Price of dish",
    },
    {
      name: "image",
      type: "image",
      title:"Image of the  dish",
    },
    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
