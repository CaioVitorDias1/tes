import { Response } from "express"
import { json } from "stream/consumers"
import AppDataSource from "../configs/data-source"
import servisinho from "../routes/PessoaRoute"
import Servico from "../services/PessoaServico"

export class PessoaController {
    
    public static async create(res: Response){
        Servico.cadastrarPessoa
    }

    public static async getall(res: Response){
        await Servico.buscaTodos
        const objeto = res.json()
        return objeto
    }

}