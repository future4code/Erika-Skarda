import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	constructor(props) {
		super(props)

		this.state = {
			inputUsuario:''
		}
	}

	onChangeComentario = (event) => {
		const oQueUsuarioDigitou = event.target.value
		console.log(oQueUsuarioDigitou)
		this.setState({
			inputUsuario:oQueUsuarioDigitou
		})

	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.inputUsuario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
