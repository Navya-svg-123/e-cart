import React from 'react'
import { Col,Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
    <Container className='mt-5'>
      <Row>
        <Col sm={12} md={6}>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nam voluptas architecto iusto, aliquam eum sed consequatur nesciunt quidem rerum obcaecati vero commodi illo, ipsum similique ullam repellat qui dolorum.lorem</p>
        <Link to={'/home'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
        </Col>
        <Col sm={12} md={6} className='d-flex justify-content-center'>
        <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-50' />
        </Col>
      </Row>
    </Container>
    <Container className='mt-5'>
      <h3 className='text-center'>Features</h3>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
        <Row className='mt-5 d-flex justify-content-center align items-center'>
          <Col md={4}className='p-3'>
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media.giphy.com/media/4oMoIbIQrvCjm/giphy.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col md={4}className='p-3'>
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media0.giphy.com/media/l2SpZvhMicR8zUhxe/source.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col md={4}className='p-3'>
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media1.tenor.com/images/4d5fdb6c20630ca254865fd9ba781bd2/tenor.gif?itemid=14460643" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          

        </Row>
        </Col>
        <Col md={1}></Col>

      </Row>

    </Container>
    <div className="container">
      <div className='row p-5'>
        <div className='col border border-secondary border-2 rounded p-4'>
          <div className='row'>
            <div className='col-md-6'>
              <h3 className='text-warning'>Simple fast and powerful</h3>
              <p style={{ textAlign: 'justify' }}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sint, tempora quas expedita veritatis illo cum praesentium culpa! Obcaecati reprehenderit</p>
              <p style={{ textAlign: 'justify' }}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sint, tempora quas expedita veritatis illo cum praesentium culpa! Obcaecati reprehenderit</p>
              <p style={{ textAlign: 'justify' }}><span className='fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sint, tempora quas expedita veritatis illo cum praesentium culpa! Obcaecati reprehenderit</p>

            </div>
            <div className='col-md-6'>
            <iframe width="100%" height="515" src="https://www.youtube.com/embed/0Z3I8TSUwLI" title="Hey Minnale | Amaran | Sivakarthikeyan, Sai Pallavi | GV Prakash | Rajkumar| Kamal Haasan| Mahendran" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>

          </div>

        </div>

      </div>

    </div>
    </>
  )
}

export default Landingpage
