import React, { useState } from 'react'
import { Button, Card, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Menu = () => {
  const [input , setinput]=useState("");
  let arr =[{name:"Breakfast",image:"/image/77.jpg", price:"50 Pound"},
                  {name:"Lunch",image:"/image/66.jpg",price:"70 Pound"},
                  {name:"Dinner",image:"/image/18.webp", price:"120 Pound"},
                  {name:"Breakfast",image:"/image/9.webp", price:"100 Pound"},
                  {name:"Dinner",image:"/image/product-3-161x162.png", price:"75 Pound"}
  ]
  console.log(input)
  const handlesearch=(w)=>{
    setinput(w.target.value);
  }
  if(input.length > 0){
    arr=arr.filter((q)=>{
      return q.name.match(input)
    })
  }
  return (
    <div className='container' >
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Menu Project</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll> 
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        value={input}
                        onChange={handlesearch}
                        />
                        <Button>Search</Button>
                    </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {
            arr.map(({name,image,price})=>{
              return( 
                <div className='Head'>
                    <Card className='Move'>
                          <div className='AA'><Card.Img className='imge' src={image} /></div>
                          <div className='BB'>
                              <Card.Body>
                                  <div className='price'>
                                    <Card.Title>{name}</Card.Title>
                                    <div className='pri'>{price}</div>
                                  </div>
                                  <Card.Text>
                                  Some quick example text to build on the card title and make up the
                                  bulk of the card's content.
                                  </Card.Text>
                                  <Button variant="primary">Go somewhere</Button>
                              </Card.Body>
                          </div>
                    </Card>
                </div>
              )
            })
          }
    </div>
  )
}

export default Menu;
