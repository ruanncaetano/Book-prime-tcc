import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import * as Yup from "yup";
import api from "../../ultils/api";
import { useToast } from "../../hooks/Toast/index";
import { GiSaveArrow } from "react-icons/gi";
import { IoMdShareAlt, IoCloseCircleSharp } from "react-icons/io";
import "./styles.css";
const AdicionarCidade = () => {
  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const { addToast } = useToast();
  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const salvarFechar = async (evt) => {
    const schema = Yup.object().shape({
      cad_nome: Yup.string().required("Informar o nome da Cidade"),
      cad_observações: Yup.string().required("Informar o Estado")
    });
    let data = {
      cad_nome: titulo,
      cad_observações: conteudo
    };
    try {
      const isValidSchema = schema.validateSync(data);

      api("/biblioteca", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
      })
        .then(async (response) => {
          if (response.status !== 201) {
            throw new Error(
              `Erro ao incluir o Nome: ${(await response.json()).error}`
            );
          }
          return response.json();
        })
        .then((data) => {
          addToast({
            message: "Caderno adicionado com sucesso",
            type: "success",
            title: "Cadernos"
          });
          handleClose();
        });
    } catch (error) {
      addToast({
        message: error.message,
        type: "error",
        title: "Caderno"
      });
    }
  };

  return (
    <>
      <Button className="Botao" onClick={handleOpen}>
        Novo Caderno
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="Matematica" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Digite aqui seu texto</Form.Label>
              <Form.Control as="textarea" rows={30} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button>
            <GiSaveArrow />
          </Button>
          <Button>
            <IoMdShareAlt />
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            ❌
          </Button>
          <Button variant="primary" onClick={handleClose}>
            salvar e sair
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AdicionarCidade;
