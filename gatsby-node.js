const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const locales = require('./src/data/locales');


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

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
              localeKey
              name
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
      const localeKey = edge.node.frontmatter.localeKey;

      const localePath = () => {
        const filter = _.filter(posts, key => key.node.frontmatter.localeKey === edge.node.frontmatter.name);

        return localeKey != null ?
              localeKey :
              edge.node.frontmatter.name != null && filter.length > 0
                   ? filter[0].node.fields.slug : "/";
      };

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
            localePath: localePath(),
            ...contextPost
          },
        })
      }
    })


    //blog
    const pagePathBlog = "/blog/";

    const localizedPath = ({lang, path}) => locales[lang].default ? path : locales[lang].path + path;
    const localePath = ({lang}) => locales[lang].default ? "/ru" + pagePathBlog : pagePathBlog;

    //Pagination
    const postsPerPage = 2;

    Object.keys(locales).map(lang => {

      const BlogPosts = _.filter(posts, key =>
          key.node.frontmatter.templateKey === 'blog-post' && key.node.frontmatter.locale === lang);
      const numPages = Math.ceil(BlogPosts.length / postsPerPage);
      const langPath = localizedPath({lang: lang, path: pagePathBlog});

      Array.from({ length: numPages }).forEach((_, i) => {

        createPage({
          path: i === 0 ? langPath : langPath + (i + 1),
          component: path.resolve(`src/templates/blog.js`),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            localePath: localePath({lang}),
            locale: lang,
            currentPage: i + 1
          }
        });
      });

    });


    // Tag pages:

    Object.keys(locales).map(lang => {
      let tags = [];
      const PostTags = _.filter(posts, key =>
          key.node.frontmatter.templateKey === 'blog-post' &&
          key.node.frontmatter.tags != null &&
          key.node.frontmatter.locale === lang);

      // Iterate through each post, putting all found tags into `tags`
      PostTags.forEach(edge => {
        tags = tags.concat(edge.node.frontmatter.tags)
      });

      tags = _.uniq(tags);

      const BlogPostsPagination = (tag) => Math.ceil(_.filter(PostTags, key =>
          key.node.frontmatter.tags.includes(tag)).length / postsPerPage);

      // Make tag pages
      tags.forEach(tag => {
        const pathTag = localizedPath({path: pagePathBlog+_.kebabCase(tag), lang: lang});

        Array.from({ length: BlogPostsPagination(tag) }).forEach((_, i) => {
          createPage({
            path: i === 0 ? pathTag : `${pathTag}/${i + 1}`,
            component: path.resolve(`src/templates/blog.js`),
            context: {
              tag,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: BlogPostsPagination(tag),
              locale: lang,
              localePath: localePath({lang}),
              currentPage: i + 1
            }
          });
        });
      });
    });
  })
};


exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default ? page.path : locales[lang].path + page.path
      const otherLeng = locales[lang].default ? "/ru" + page.path : page.path;

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
          localePath: otherLeng
        },
      })
    });
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
