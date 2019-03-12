export const data = {
  "site": {
    "siteMetadata": {
      "title": "Test title",
      "description": "Test description",
      "author": "Test author"
    }
  }
}

export const indexData = {
  "site": {
    "siteMetadata": {
      "title": "Test title",
      "description": "Test description",
      "author": "Test author"
    }
  },
  "allMarkdownRemark": {
    "totalCount": 2,
    "edges": [
      {
        "node": {
          "id": "123",
          "frontmatter": {
            "title": "Test Post",
            "date": "12 March, 2019",
            "author": "Test author",
            "description": "Test description",
            "keywords": ["test", "test1", "test2"]
          },
          "excerpt": "Test excerpt",
          "fields": {
            "slug": "/test/1/"
          }
        }
      },
      {
        "node": {
          "id": "456",
          "frontmatter": {
            "title": "Test Post",
            "date": "11 March, 2019"
          },
          "excerpt": "Test excerpt",
          "fields": {
            "slug": "/test/2"
          }
        }
      }
    ]
  }
}

export const recipeData = {
  "site": {
    "siteMetadata": {
      "title": "Test Recipe",
      "description": "Test Recipe description",
      "author": "Test recipe author"
    }
  },
  "markdownRemark": {
    "html": "<p>Wow, eggs.</p>",
    "frontmatter": {
      "title": "Eggs"
    }
  }
}
