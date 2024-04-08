import express, { Router } from "express";
import { PessoaController } from "../controllers/PessoaController";
import PessoaServico from "../services/PessoaServico";

const router = Router();

//router.get()
router.post("/cadastro", PessoaServico.cadastrarPessoa);
router.get("/pegartodos", PessoaController.getall);

export default router;