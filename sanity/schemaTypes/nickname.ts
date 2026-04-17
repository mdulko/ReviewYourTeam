export const nickname = {
  name: 'nickname',
  title: 'Nickname Entry',
  type: 'document',
  fields: [
    {
      name: 'nickname',
      title: 'Player Nickname',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(50),
    },
    {
      name: 'reason',
      title: 'Reason / Notes',
      type: 'text',
      rows: 3,
    },
    {
      name: 'list',
      title: 'List',
      type: 'reference',
      to: [{type: 'teamList'}],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'addedAt',
      title: 'Added At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      nickname: 'nickname',
      list: 'list.title',
    },
    prepare(selection: any) {
      return {
        title: selection.nickname,
        subtitle: `in "${selection.list || 'Unknown List'}"`,
      }
    },
  },
}
