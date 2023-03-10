import React, { useState } from "react";
import { Button, Offcanvas, Form } from "react-bootstrap";
import { BsJustifyLeft, BsJustifyRight, BsJustify } from "react-icons/bs";
import { GoTextSize } from "react-icons/go";
import { BiBold, BiFontSize } from "react-icons/bi";

import "./styles.css";
export default function BarraDeFerra({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props} placement="top">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Barra de Ferramentas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="elementos">
          <div>
            <h6>Texto</h6>
            <ul>
              <li>
                <GoTextSize fontSize="1.5em" />
              </li>
              <li>
                <BiBold fontSize="1.5em" />
              </li>
              <li>
                <BiFontSize fontSize="1.5em" />
              </li>
            </ul>
          </div>
          <div>
            <h6>Alinhamento</h6>
            <ul>
              <li>
                <BsJustify fontSize="1.5em" />
              </li>
              <li>
                <BsJustifyLeft fontSize="1.5em" />
              </li>
              <li>
                <BsJustifyRight fontSize="1.5em" />
              </li>
            </ul>
          </div>

          <div>
            <h6>Fonte</h6>
            <Form.Select size="sm" aria-label="Default select example">
              <option>Arial</option>
              <option value="1">Calibre</option>
              <option value="2">Verdana</option>
              <option value="3">Calibre Light</option>
              <option value="3">Agency</option>
            </Form.Select>
            <Form.Select size="sm">
              <option>10 Px</option>
              <option value="1">12 Px</option>
              <option value="2">14 Px</option>
              <option value="3">16 Px</option>
              <option value="3">18 Px</option>
              <option value="3">20 Px</option>
              <option value="3">22 Px</option>
            </Form.Select>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
