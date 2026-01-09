# WordPress GraphQL Queries Reference

Test these queries in your WordPress GraphiQL IDE at `https://YOUR-SITE.com/graphql`

## Get All Posts (for Blog Listing)

```graphql
query GetAllPosts {
  posts(first: 100, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      slug
      title
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
}
```

## Get Single Post by Slug

```graphql
query GetPostBySlug($id: ID!) {
  post(id: $id, idType: SLUG) {
    title
    content
    date
    excerpt
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
    tags {
      nodes {
        name
      }
    }
  }
}
```

### Query Variables
```json
{
  "id": "your-post-slug"
}
```

## Get Posts by Category

```graphql
query GetPostsByCategory($categoryName: String!) {
  posts(where: {categoryName: $categoryName}) {
    nodes {
      slug
      title
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
```

### Query Variables
```json
{
  "categoryName": "Business"
}
```

## Get All Categories

```graphql
query GetCategories {
  categories {
    nodes {
      name
      slug
      count
    }
  }
}
```

## Get Recent Posts (Limited)

```graphql
query GetRecentPosts {
  posts(first: 6, where: {orderby: {field: DATE, order: DESC}}) {
    nodes {
      slug
      title
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}
```

## Get Posts with Pagination

```graphql
query GetPostsWithPagination($first: Int!, $after: String) {
  posts(first: $first, after: $after) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      slug
      title
      excerpt
      date
    }
  }
}
```

### Query Variables
```json
{
  "first": 10,
  "after": null
}
```

## Search Posts

```graphql
query SearchPosts($searchTerm: String!) {
  posts(where: {search: $searchTerm}) {
    nodes {
      slug
      title
      excerpt
      date
    }
  }
}
```

### Query Variables
```json
{
  "searchTerm": "remote teams"
}
```

## Get Post with SEO Data (Requires Yoast SEO + WPGraphQL SEO)

```graphql
query GetPostWithSEO($id: ID!) {
  post(id: $id, idType: SLUG) {
    title
    content
    seo {
      title
      metaDesc
      focuskw
      opengraphTitle
      opengraphDescription
      opengraphImage {
        sourceUrl
      }
    }
  }
}
```

## Tips for Using GraphQL

1. **Test First**: Always test your queries in GraphiQL before adding to Astro
2. **Limit Results**: Use `first: N` to limit results and improve performance
3. **Only Query What You Need**: Don't request fields you won't use
4. **Use Variables**: For dynamic queries, use variables instead of string interpolation
5. **Check Permissions**: Ensure your WordPress content is published and public

## Common Issues

### "Cannot query field X on type Y"
- Make sure WPGraphQL is up to date
- Check that the field exists in WordPress
- Verify plugin compatibility

### No results returned
- Check post status is "published"
- Verify category/taxonomy exists
- Test the query in GraphiQL first

### Images not showing
- Ensure featured images are set
- Check media library permissions
- Verify image URLs are absolute
