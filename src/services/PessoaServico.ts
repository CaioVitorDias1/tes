import { Request, Response } from "express";
import AppDataSource from "../configs/data-source";
import { Pessoa } from "../entities/Pessoa";

export default class PessoaServico {

    public static buscaTodos(req: Request,res: Response): void{
        const users = AppDataSource.getRepository(Pessoa).find();
        res.json(users);
    }

    public static async cadastrarPessoa(req: Request, res: Response){

        const repositorio = AppDataSource.getRepository(Pessoa)
        const objeto = repositorio.create(req.body)
        repositorio.save(objeto)
        return res.json({objeto, msg: 'blz'})
    }
}