export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
      options: {
        hotspot: true, // Enables hotspot image cropping
      },
    },
    {
      name: 'lat',
      title: 'Latitude of Restaurent',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude of Restaurent',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Enter a Rating from (1-5 stars)',
      type: 'number',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Plaese enter Value Between between 1 and 5'),
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
}
