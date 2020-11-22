const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              draft
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges
      .filter(({ node }) => !node.frontmatter.draft)
      .forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: blogPostTemplate,
          slug: node.fields.slug,
          context: {},
        })
      })
  })
}

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const projectsTemplate = path.resolve(`src/templates/projects.js`)

//   const res = await graphql(`
//     query {
//       allMarkdownRemark(
//         filter: { frontmatter: { category: { eq: "projects" } } }
//         sort: { fields: frontmatter___date, order: DESC }
//       ) {
//         edges {
//           node {
//             fields {
//               slug
//             }
//             frontmatter {
//               title
//             }
//           }
//         }
//       }
//     }
//   `)

//   const posts = res.data.allMarkdownRemark.edges

//   posts.forEach((post, index) => {
//     const previous = index === posts.length - 1 ? null : posts[index + 1].node
//     const next = index === 0 ? null : posts[index - 1].node

//     createPage({
//       path: `${post.node.fields.slug}`,
//       component: projectsTemplate,
//       context: {
//         slug: `${post.node.fields.slug}`,
//         previous,
//         next,
//       },
//     })
//   })
// }
