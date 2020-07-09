import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Button
} from 'react-bootstrap/';
import { MdAddShoppingCart } from "react-icons/md";

function Body() {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        fetch('https://api.reinaldowft.com/pokestore?page=1&limit=150')
            .then(response => response.json())
            .then(data => setPokemons(data.results))
    }, [])

    let total = 0;
    function somaPrice(id) {
        console.log(pokemons[id - 1].price)
        total += parseInt(pokemons[id - 1].price);
        document.getElementById('list').innerHTML += `<li> <img src="${pokemons[id - 1].sprite}" width="100px" height="100px"/> 
            <span> ${ pokemons[id - 1].name}</span > <span>R$ ${pokemons[id - 1].price}</span></li>`;
        document.getElementById('total').innerHTML = `TOTAL: ${total}`
        return total;

    }

    function Mensagem() {
        alert("Compra Finalizada com Sucesso")
        window.location.reload(true);
    }

    return (
        <div>
            <br />
            <Container className="bodyPokemon" fluid>
                <Row>
                    <Col md={8} className="teste" >
                        <Row>
                            {pokemons.map(pokemon => (
                                <Col md={3} key={pokemon.id} >
                                    <Card className="cardPokemon" border="danger" >
                                        <Card.Img src={pokemon.sprite} />
                                        <Card.Body>
                                            <Card.Header>{pokemon.name}</Card.Header>
                                            <Card.Text> R$ {pokemon.price},00</Card.Text>
                                            <Button variant="danger" value={pokemon.id} onClick={e => somaPrice(e.currentTarget.value)} >COMPRAR</Button>
                                        </Card.Body>
                                    </Card>
                                    <br />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col md={4} className="">
                        <Row>
                            <Col md={4}>
                                <Card style={{ width: '24rem' }} border="danger" id="CardCarrinho" >
                                    <Card.Body >
                                        <Card.Title>Carrinho de Compra <MdAddShoppingCart /> </Card.Title>
                                    </Card.Body>
                                    <ul>
                                        <span id="list"></span>
                                    </ul>
                                    <ul>
                                        <span id="total">TOTAL:</span>
                                    </ul>
                                    <Card.Body>
                                        <Button variant="danger" onClick={e => Mensagem()}>
                                            Finalizar compra
                                            <MdAddShoppingCart />
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}


export default Body;

