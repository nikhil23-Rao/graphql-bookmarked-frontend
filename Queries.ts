// GQL Formatter
import { gql } from "@apollo/client";

export const GET_BOOKS_BY_TITLE = gql`
  query getBookByTitle($title: String) {
    getBookByTitle(title: $title) {
      title
      authors
      small_image_url
      average_rating
      books_count
      ratings_count
      original_publication_year
      _id
    }
  }
`;
