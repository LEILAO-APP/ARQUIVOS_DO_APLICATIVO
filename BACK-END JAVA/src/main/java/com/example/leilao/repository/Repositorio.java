package com.example.leilao.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.leilao.model.Cliente;

@Repository
public interface Repositorio extends CrudRepository<Cliente, Long> {
    
}
 