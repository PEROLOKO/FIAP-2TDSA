package br.com.fiap.utils;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class UtilsJpa {

	
	private static final String FACTORY = "oracle";
	private static final String FACTORY_LOCAL = "localhost";
	
	public static EntityManager entityManagerOracle() {
		EntityManagerFactory factoryOracle = Persistence.createEntityManagerFactory(FACTORY);
		return factoryOracle.createEntityManager();
	}
	
	public static EntityManager entityManagerOracleLocalHost() {
		EntityManagerFactory factoryLocal = Persistence.createEntityManagerFactory(FACTORY_LOCAL);
		return factoryLocal.createEntityManager();
	}
}
