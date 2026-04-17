export const teamList = {
  name: 'teamList',
  title: 'Team List',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'List Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(100),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'creator',
      title: 'Creator',
      type: 'reference',
      to: [{type: 'player'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'game',
      title: 'Game',
      type: 'string',
      options: {
        list: [
          {title: 'Apex Legends', value: 'apex'},
          {title: 'Valorant', value: 'valorant'},
          {title: 'CS2', value: 'cs2'},
          {title: 'Overwatch', value: 'overwatch'},
          {title: 'Other', value: 'other'},
        ],
      },
      initialValue: 'apex',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isPublic',
      title: 'Public (Shareable)',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'nicknames',
      title: 'Nicknames',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'nickname'}]}],
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title',
      creator: 'creator.username',
    },
    prepare(selection: any) {
      return {
        title: selection.title,
        subtitle: `by ${selection.creator || 'Unknown'}`,
      }
    },
  },
}
