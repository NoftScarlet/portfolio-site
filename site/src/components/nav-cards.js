import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody, CardImg,
    CardTitle, CardText
} from 'reactstrap';

import {Link, StaticQuery, graphql} from "gatsby"


const NavCards = (props) => (
    <StaticQuery
        query={graphql`
     {
        allProjectsJson {
          edges{
          node{
          id
          title
          link
          description
          type
          implementation
          source_code
          }
          }
        }
     }
    `}
        render={data => (
            <>
            {getProjects(data)}
            </>
        )}
    />

);

function getProjects(data) { //helpler function to iterate over object and push elements into array


    const elemArray = [];

    data.allProjectsJson.edges.forEach(item =>
        elemArray.push(
            <Card className="project-card">
                <CardImg top width="100%"
                         src={item.node.src}
                         alt="Yixiao project card"/>
                <CardBody>
                    <CardTitle>{item.node.title}</CardTitle>
                    <CardText>{item.node.description}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        )
    );

    return elemArray;
}


export default NavCards;