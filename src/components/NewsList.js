import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from '../images/image.png'
const NewsList = ({title , description , src, url}) => {
  return (
     <Card className='mb-3 d-inline-block mx-3 my-3 px-3 py-3' style={{maxWidth:'345px' }}>
      <Card.Img style={{height:'200px',width:'300px'}} variant="top" src={src?src:myImage} />
      <Card.Body>
        <Card.Title>{title.slice(0,60)}</Card.Title>
        <Card.Text>
          {description?description.slice(0,100):'COVID is spreading rapidly across Europe and the US. These are the affected countries and the sympto'}
        </Card.Text>
        <Button variant="primary" href={url}>Read More</Button>
      </Card.Body>
    </Card>
  )
}

export default NewsList
