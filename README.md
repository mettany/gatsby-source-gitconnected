# gatsby-source-gitconnected
Source plugin for pulling data into Gatsby from [gitconnected.com](https://gitconnected.com/) 

## How to use
```js
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-gitconnected`,
      options: { username: `your_gitconnected_username`}
    }
  ]
}
```

## Plugin options
- username: the gitconnected username witch you want to request the API

## How to query your gitconnected data using GraphQL

```graphql
query {
  portfolio {
    basics {
      email
      name
      picture
      summary
    }
    certificates {
      date(formatString: "YYYY-MM-DD")
      issuer
      name
    }
    languages {
      fluency
      language
    }
    skills {
      level
      name
      rating
      yearsOfExperience
    }
  }
}

```