import { gql } from "@apollo/client";

export const GET_COMMENTS_BY_POST_ID = gql`
  query GetComments($postId: Int!) {
    comments(postId: $postId) @rest(type: "Comment", path: "comments?postId={args.postId}") {
      id
      name
      email
      body
    }
  }
`;