package br.com.fiap.main;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.PostPersist;
import javax.persistence.PrePersist;

import br.com.fiap.dao.BibliotecaDao;
import br.com.fiap.enuns.CategoriaEnum;
import br.com.fiap.model.LivroModel;
import br.com.fiap.utils.UtilsJpa;

public class BibliotecaMain {

	public static void main(String[] args) {

		
		EntityManager entity = UtilsJpa.entityManagerOracle();

		
		//------- INSERINDO UM REGISTRO NOVO NO BANCO ----- //
		
		LivroModel livro = new LivroModel("Harry Potter e a pedra filosofal", "Brabo", 100, CategoriaEnum.ACAO);
			
		entity.getTransaction().begin();
		entity.persist(livro);
		entity.getTransaction().commit();

		//------- VERIFICANDO SE A CONEXAO ESTA ATIVA ----- //
		if (entity.getTransaction().isActive()) {
			System.out.println("ainda ativo");
		} else {
			System.out.println("nao esta ativo");
		}		
		
		//-----ALTERACAO DO REGISTRO NO BANCO DE DADOS-----//
		entity.getTransaction().begin();
		livro.setNome("Harry Potter e o prisoneiro de azkaban");
		entity.persist(livro);

		//----VERIFICANDO SE A CONEXAO ESTA ATIVA----//
		if (entity.getTransaction().isActive()) {
			System.out.println("ainda ativo");
		} else {
			System.out.println("nao esta ativo");
		}
		entity.getTransaction().commit();
		
		//entity.clear();
		
		//------UPDATE COM MERGE-----//
	
		entity.getTransaction().begin();
		livro = entity.merge(livro);
		livro.setNome("Harry Potter e a ordem da fenix");
		entity.getTransaction().commit();
		
		if (entity.getTransaction().isActive()) {
			System.out.println("ainda ativo");
		} else {
			System.out.println("nao esta ativo");
		}
		
		LivroModel livroretorno = entity.find(LivroModel.class, 1L);
		System.out.println(livroretorno.getNome());
		entity.close();

	}
	

}