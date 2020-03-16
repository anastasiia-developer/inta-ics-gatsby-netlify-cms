const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const locales = require('./src/data/locales')


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              locale
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge, index) => {
      const locale = edge.node.frontmatter.locale;
      if (edge.node.frontmatter.templateKey != null) {
        const id = edge.node.id;

        const contextPost = edge.node.frontmatter.templateKey === 'blog-post' && {
          next: index === 0 ? null : posts[index - 1].node.fields.slug,
          prev: index === (posts.length - 1) ? null : posts[index + 1].node.fields.slug,
        };

        createPage({
          path: edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
              `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
            locale,
            ...contextPost
          },
        })
      }
    })
    //
    // const postsPerPage = 10;
    // const numPages = Math.ceil(posts.length / postsPerPage);
    //
    // Array.from({ length: numPages }).forEach((_, i) => {
    //
    //   createPage({
    //     path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
    //     component: path.resolve(`src/templates/blog.js`),
    //     context: {
    //       limit: postsPerPage,
    //       skip: i * postsPerPage,
    //       numPages,
    //       currentPage: i + 1
    //     }
    //   });
    // });

    // Tag pages:
    let tagsRu = [];
    let tagsUa = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {

      if (edge.node.frontmatter.tags != null) {
        if (edge.node.frontmatter.locale === 'ru') {
          tagsRu = tagsRu.concat(edge.node.frontmatter.tags)
        } else {
          tagsUa = tagsUa.concat(edge.node.frontmatter.tags)
        }
      }
    });
    // Eliminate duplicate tags
    tagsRu = _.uniq(tagsRu);
    tagsUa = _.uniq(tagsUa);

    // Make tag pages
    tagsRu.forEach(tag => {
      const tagPath = `ru/blog/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/blog.js`),
        context: {
          locale: 'ru',
          tag,
        },
      })
    });

    tagsUa.forEach(tag => {
      const tagPath = `/blog/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/blog.js`),
        context: {
          locale: 'ua',
          tag,
        },
      })
    })
  })
}


exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default ? page.path : locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
        },
      })
    })
    resolve()
  })
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images
  if (node.internal.type === `MarkdownRemark`) {

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
