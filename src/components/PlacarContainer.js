import React from 'react';
import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component{

    constructor() {
        super();
        this.state = {
            gols_casa: 0,
            gols_visitante: 0
        };
    }

    marcarGolCasa() {
        this.setState({
            gols_casa: this.state.gols_casa + 1
        });
    }

    marcarGolVisitante() {
        this.setState({
            gols_visitante: this.state.gols_visitante + 1
        });
    }

    render(){

        // DESCONSTRUINDO OBJETO - EXTRACT
        const { partida, casa, visitante } = this.props;

        const estilo = {float: "left", "marginLeft": "20px"};

        return(
            <div>
                <div style={estilo}>
                    <h3>Casa</h3>
                    <Time nome={casa.nome} 
                          gols={this.state.gols_casa}
                          marcarGol={this.marcarGolCasa.bind(this)} />
                </div>
                <div style={estilo}>
                    {/* SPREAD OPERATOR */}
                    <Partida {...partida} />
                </div>
                <div style={estilo}>
                    <h3>Visitante</h3>
                    <Time nome={visitante.nome}
                          gols={this.state.gols_visitante}
                          marcarGol={this.marcarGolVisitante.bind(this)}/>
                </div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }

}

PlacarContainer.propTypes = {
    // DEFININDO TIPO
    clima: React.PropTypes.string,
    // DEFININDO OBRIGATORIO
    //tempo: React.PropTypes.number.isRequired,
};

PlacarContainer.defaultProps = {
    // VALOR DEFAULT
    clima: 'Ensolarado',
};