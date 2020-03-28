export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7f608872cb41be42891e9e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3hfa1nqs',
                  apiId: 'f6116283-643c-4ddf-904f-59defc09ca80'
                },
                {
                  buildHookId: '5e7f6089b8d12ba0211c8cbf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-aemofhsh',
                  apiId: '6488baa7-b6f3-4efd-858f-3c956f67ad7c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/24proof/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-aemofhsh.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
