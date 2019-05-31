import React, { Component } from 'react'
import Project from './project'
import styled from 'styled-components'
import { colors, breakpoints, textStyles } from '../../styles'

const projects = [
  {
    image: 'https://res.cloudinary.com/apomarn/image/upload/v1559257591/portfolio/project.png',
    title: 'Little Red Riding Hood',
    description: 'An adventure game to challenge your inner child.',
    technologies: [
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/javascript.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/webpack.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266756/portfolio/babel.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/tiled.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/figma.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266758/portfolio/netlify.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/phaser.png'
    ]
  },
  {
    image: 'https://res.cloudinary.com/apomarn/image/upload/v1559272123/portfolio/wiki-book.png',
    title: 'Wiki Book',
    description:
      'A place to find books by title, author and genres. It allows you to review books and authors as well as favorite them.',
    technologies: [
      'https://res.cloudinary.com/apomarn/image/upload/v1559266761/portfolio/node.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/express.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/mongodb.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266758/portfolio/heroku.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559272620/portfolio/handlebars.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/cloudinary.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/figma.png'
    ]
  },
  {
    image: 'https://res.cloudinary.com/apomarn/image/upload/v1559272123/portfolio/we-do.png',
    title: 'WeDo',
    description:
      'Planning a wedding can be difficult. WeDo helps you from managing your guest list to share your wedding story.',
    technologies: [
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/react.js.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/express.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/mongodb.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/parsel.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266758/portfolio/heroku.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/cloudinary.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266758/portfolio/style-component.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266757/portfolio/figma.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559266761/portfolio/node.png',
      'https://res.cloudinary.com/apomarn/image/upload/v1559273120/portfolio/firebase.png'
    ]
  }
]

const Separator = styled.div`
  width: 64px;
  height: 4px;
  background-color: ${colors.green};
  margin: 80px 16px 32px 16px;
  @media screen and (min-width: ${breakpoints.desktop}px) {
    width: 128px;
    height: 8px;
    margin: 80px 32px;
  }
`

const Headline = styled.p`
  margin: 0px 0px 32px 16px;
  ${textStyles.h3}
  @media screen and (min-width: ${breakpoints.desktop}px) {
    margin: 16px 0 32px 0;
  }
`

class ProjectInformation extends Component {
  render() {
    return (
      <div>
        <Separator />
        <Headline>
          My <strong>Projects</strong>
        </Headline>
        {projects.map(project => {
          return <Project {...project} key={project.title} />
        })}
      </div>
    )
  }
}

export default ProjectInformation