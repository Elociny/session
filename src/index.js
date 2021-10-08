import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles.css";

import Teste from "./site/teste";
import Contador from "./site/comunicacaoComps/contador";
import Pedido from "./site/comunicacaoComps/finalizacaoPedido/pedido";
import ConclusaoPedido from "./site/comunicacaoComps/finalizacaoPedido/conclusao";

import App from "./site/home";
import DetalheProduto from "./site/detalheProduto";
import Carrinho from "./site/carrinho";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />

        <Route path="/teste" component={Teste} />
        <Route path="/infoX/contador" exact={true} component={Contador} />
        <Route path="/infoX/pedido" component={Pedido} />
        <Route path="/infoX/conclusao" component={ConclusaoPedido} />
      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
