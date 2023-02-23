package br.com.fiap.dao;

import javax.persistence.EntityManager;

import br.com.fiap.model.LivroModel;

public class BibliotecaDao {

	private EntityManager entity;

	public BibliotecaDao(EntityManager em) {
		entity = em;
	}

	public void insert(LivroModel model) {
		try {
			entity.getTransaction().begin();
			entity.persist(model);
			entity.getTransaction().commit();
		} catch (Exception e) {
			entity.getTransaction().rollback();
		}
	}

	public void update(LivroModel model) {
		try {
			entity.getTransaction().begin();
			entity.merge(model);
			entity.getTransaction().commit();
		} catch (Exception e) {
			entity.getTransaction().rollback();
		}
	}

	public void delete(LivroModel model) {
		try {
			entity.getTransaction().begin();
			model = entity.merge(model);
			entity.remove(model);
			entity.getTransaction().commit();
		} catch (Exception e) {
			entity.getTransaction().rollback();
		}
	}

	public void select(int id) {
		entity.find(LivroModel.class, id);
	}
}