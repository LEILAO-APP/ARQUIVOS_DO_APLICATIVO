package com.example.leilao.controller;

import org.hibernate.procedure.internal.ProcedureCallImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.leilao.model.Cliente;
import com.example.leilao.repository.Repositorio;

@RestController
@CrossOrigin(origins = "*")
public class Controller {
    
    @Autowired
    private Repositorio acao;

    // Método responsável por cadastrar o cliente de acordo com nome, idade, cidade..
    @PostMapping("/")
    public Cliente cadastrar (@RequestBody Cliente c){
        return acao.save(c);
    }

    @GetMapping("/")
    //Isso é um método igual o de cima que é o cadastrar!
    public Iterable<Cliente> selecionar(){
        return acao.findAll();
    }
     
    //Método responsável por alterar os dados do cliente
    @PutMapping("/")
    public Cliente editar(@RequestBody Cliente c){
        return acao.save(c);
    }

    //Método para remover um cliente.
    @DeleteMapping("/{codigo}")
    public void remove(@PathVariable long codigo){
        acao.deleteById(codigo);        
    }

}
