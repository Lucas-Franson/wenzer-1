import { UsuarioJaCadastrado } from "./erros";

export function GlobalErrorHandler(app) {
    app.use((err, req, res, next) => {
        let status = 500;
        
        const corpo = {
            mensagem: err.message
        };

        if (err.name === 'UsuarioJaCadastrado') {
            status = 200;
        }

        if (err.name === 'NaoEncontrado') {
            status = 403;
        }

        res.status(status).json(corpo);
    });
}