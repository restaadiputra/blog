import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';
import * as Styled from './styles';

export interface Post {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    // remoteCover: {
    //   childImageSharp: {
    //     fluid: FluidObject | FluidObject[];
    //   };
    // };
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      cover: {
        childImageSharp: {
          fluid: FluidObject | FluidObject[];
        };
      };
    };
  };
}

const PostCard: React.FC<Post> = ({ node }) => {
  const {
    fields: { slug },
    // remoteCover,
    frontmatter: { title, description, date, tags, cover },
  } = node;

  return (
    <Styled.Post>
      <Link to={slug}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
          <Styled.Card>
            <Styled.Image>
              <Img fluid={cover.childImageSharp.fluid} alt={title} />
            </Styled.Image>
            <Styled.Content>
              <Styled.Date>{date}</Styled.Date>
              <Styled.Title>{title}</Styled.Title>
              <Styled.Description>{description}</Styled.Description>
            </Styled.Content>
            <Styled.Tags>
              {tags.map(item => (
                <Styled.Tag key={item}>{item}</Styled.Tag>
              ))}
            </Styled.Tags>
          </Styled.Card>
        </motion.div>
      </Link>
    </Styled.Post>
  );
};

export default PostCard;
