package br.com.fiap.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PostLoad;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import br.com.fiap.enuns.CategoriaEnum;

@Entity
@Table(name = "Livros")
public class LivroModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String nome;
	private String autor;
	@Column(name = "numeros_copias")
	private int numerosCopias;
	
	@Enumerated(EnumType.STRING)
	private CategoriaEnum categoria;

	public LivroModel() {
		// TODO Auto-generated constructor stub
	}

	
	public LivroModel(String nome, String autor, int numerosCopias, CategoriaEnum categoria) {
		super();
		this.nome = nome;
		this.autor = autor;
		this.numerosCopias = numerosCopias;
		this.categoria = categoria;
	}


	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getAutor() {
		return autor;
	}
	public void setAutor(String autor) {
		this.autor = autor;
	}
	public int getNumerosCopias() {
		return numerosCopias;
	}
	public void setNumerosCopias(int numerosCopias) {
		this.numerosCopias = numerosCopias;
	}
	public CategoriaEnum getCategoria() {
		return categoria;
	}
	public void setCategoria(CategoriaEnum categoria) {
		this.categoria = categoria;
	}
		
	@PostLoad
	public void aposPersistir() {
		System.out.println("O livro foi salvo no banco");
	}
	
}