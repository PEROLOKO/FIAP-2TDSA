package br.com.fiap.exercicios;

import javax.persistence.EntityManager;

import br.com.fiap.enuns.TipoHdEnum;
import br.com.fiap.model.ComputadorModel;
import br.com.fiap.model.NotebookModel;
import br.com.fiap.utils.UtilsJpa;

public class ExercicioMain {

	
	
	/*
	 * Crie duas entidades em Java chamadas Computador e Notebook que possuem os seguintes atributos ID, PROCESSADOR, MEMORIA RAM, HD e TIPO DE HD.
	   Em seguida, desenvolva uma estrutura de switch case para realizar as operações básicas de CRUD. 
	   Cada opção do switch case deve chamar um método para realizar a operação.
	   
	   Tipo de Operacao
	   1 - Insert
	   2 - Update
	   3 - Remove
	   4 - Select
	   
	   Tipo Dispositivo
	   1 - Computador
	   2 - Notebook
	   
	 */

	public static void main(String[] args) {

		int tipoDeOperacao = 2;
		int tipoDispositivo = 1;
		
		EntityManager entity = UtilsJpa.entityManagerOracle();
		ComputadorModel computador = new ComputadorModel("I3",8,500,TipoHdEnum.HD);
		NotebookModel notebook = new NotebookModel("I5",16,1000,TipoHdEnum.SSD);
		entity.getTransaction().begin();

		if (tipoDispositivo == 1) {
			switch (tipoDeOperacao) {
			case 1:
				
				entity.persist(computador);
				entity.getTransaction().commit();
				
				break;
				
			case 2:
				
				ComputadorModel computadorNovo = entity.find(ComputadorModel.class,3L);
				
				entity.merge(computador);
				entity.getTransaction().commit();
				
				break;
				
			case 3:
				break;
				
			case 4:
				break;

			default:
				break;
			}
		} else {
			switch (tipoDeOperacao) {
			case 1:
				break;

			default:
				break;
			}
		}

	}
}
